import React from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";

import { Comment } from "../Comment";
import { on } from "stream";
import { FormComment } from "../FormComment";

export type TComment = {
  id: number;
  text: string;
  date: string;
  user: {
    fullName: string;
    avatarUrl: string;
  };
};

interface PostCommnetsProps {
  items: TComment[];
}

export const PostCommnets: React.FC<PostCommnetsProps> = ({ items }) => {
  const [activeLabel, setActiveLabel] = React.useState(0);
  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveLabel(newValue)}
          value={activeLabel}
          className="mt-20"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="По порядку" />
          <Tab label="Популярные" />
        </Tabs>
        <Divider />
        <FormComment />
        <div className="mb-20">
          {items.map((obj: TComment) => (
            <Comment
              key={obj.id}
              text={obj.text}
              date={obj.date}
              user={obj.user}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};
