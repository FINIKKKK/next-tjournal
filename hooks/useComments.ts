import React from "react";
import { Api } from "../utils/api";
import { TComment } from "../utils/api/types";

export type UseCommentsProps = {
  setComments: React.Dispatch<React.SetStateAction<TComment[]>>;
  comments: TComment[];
};

export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = React.useState<TComment[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId);
        setComments(arr);
        console.log("comments", comments);
      } catch (err) {
        console.log(err, "Ошибка при получении ...");
        alert("Ошибка!");
      }
    })();
  }, []);

  return { setComments, comments };
};
