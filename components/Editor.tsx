import React from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

export type TEditor = {
  onChange: (blocks: OutputData["blocks"]) => void;
};

export const Editor: React.FC<TEditor> = ({ onChange }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Введите текст вашей статьи",
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
    });

    // return () => {
    //   editor.isReady
    //     .then(() => {
    //       editor.destroy();
    //     })
    //     .catch((e) => console.error("ERROR editor cleanup", e));
    // };
  }, []);

  return <div id="editor" />;
};
