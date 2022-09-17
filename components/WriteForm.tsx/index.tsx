import React from "react";
import { Input, Button } from "@material-ui/core";

import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
  ssr: false,
});

type WriteFormProps = {
  title?: string;
};

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button style={{ height: 42 }} variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
