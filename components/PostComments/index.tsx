import React from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";

import { Comment } from "../Comment";
import { FormComment } from "../FormComment";
import { Api } from "../../utils/api";
import { TComment } from "../../utils/api/types";
import { useSelector } from "react-redux";
import { userSliceSelector } from "../../redux/user/selectors";
import { useComments } from "../../hooks/useComments";

interface PostCommnetsProps {
  postId: number;
}

export const PostCommnets: React.FC<PostCommnetsProps> = ({ postId }) => {
  const userData = useSelector(userSliceSelector);
  const { setComments, comments } = useComments(postId);

  const onAddComment = (obj: TComment) => {
    setComments((prev) => [obj, ...prev]);
  };

  const onRemoveComment = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          {comments.length} комментария
        </Typography>
        <Divider />
        {userData && (
          <FormComment onAddComment={onAddComment} postId={postId} />
        )}
        <div className="mb-20">
          {comments.map((obj: TComment) => (
            <Comment
              key={obj.id}
              id={obj.id}
              text={obj.text}
              date={obj.createAt}
              user={obj.user}
              currentUserId={userData?.data.id}
              onRemoveComment={onRemoveComment}
            />
          ))}
        </div>
      </div>
    </Paper>
  );
};
