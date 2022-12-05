import React from "react";
import { Input, Button } from "@material-ui/core";

import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import { Api } from "../../utils/api";
import { TPost } from "../../utils/api/types";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
  ssr: false,
});

type WriteFormProps = {
  data?: TPost;
};

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const [title, setTitle] = React.useState(data?.title || "");
  const [body, setBody] = React.useState(data?.body || []);
  const [isSubmiting, setIsSubmiting] = React.useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    try {
      setIsSubmiting(true);
      const obj = {
        title,
        body,
      };

      if (!data) {
        const post = await Api().post.create(obj);
        await router.push(`/write/${post.id}`);
      } else {
        await Api().post.update(data.id, obj);
      }
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
        <Editor
          initialValue={data?.body}
          onChange={(blocks) => setBody(blocks)}
        />
      </div>
      <Button
        disabled={isSubmiting || !title || !body.length}
        onClick={onSubmit}
        style={{ height: 42 }}
        variant="contained"
        color="primary"
      >
        {data ? "Сохранить" : "Опубликовать"}
      </Button>
    </div>
  );
};
