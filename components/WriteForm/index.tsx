import React from "react";
import { Input, Button } from "@material-ui/core";

import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import { Api } from "../../utils/api";

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
  ssr: false,
});

type WriteFormProps = {};

export const WriteForm: React.FC<WriteFormProps> = ({}) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState([]);
  const [isSubmiting, setIsSubmiting] = React.useState(false);

  const onSubmit = async () => {
    try {
      setIsSubmiting(true);
      const post = await Api().post.create({
        title,
        body,
      });
      console.log(post);
    } catch (err) {
      console.warn(err);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <Editor onChange={(blocks) => setBody(blocks)} />
      </div>
      <Button
        disabled={isSubmiting}
        onClick={onSubmit}
        style={{ height: 42 }}
        variant="contained"
        color="primary"
      >
        Опубликовать
      </Button>
    </div>
  );
};
