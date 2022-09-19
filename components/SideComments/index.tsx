import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";
import clsx from "clsx";

import { CommentItem } from "./CommentItem";

import styles from "./SideComments.module.scss";

export const comments = [
  {
    id: 1,
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    date: new Date().toString(),
    user: {
      id: 1,
      fullName: "Вася Пупкин",
      avatarUrl:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    post: {
      id: 1,
      title: "Какая у вас дома ванна?",
    },
  },
  {
    id: 2,
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    date: new Date().toString(),
    user: {
      id: 2,
      fullName: "Вася Пупкин",
      avatarUrl:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    post: {
      id: 2,
      title: "Какая у вас дома ванна?",
    },
  },
  {
    id: 3,
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    date: new Date().toString(),
    user: {
      id: 3,
      fullName: "Вася Пупкин",
      avatarUrl:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    post: {
      id: 3,
      title: "Какая у вас дома ванна?",
    },
  },
];




export const SideComments = () => {
  const [isHideComments, setIsHideComments] = React.useState(false);

  return (
    <div className={clsx(styles.root, isHideComments && styles.rotated)}>
      <h3 onClick={() => setIsHideComments(!isHideComments)}>
        Комментарии <ArrowRightIcon />
      </h3>
      {!isHideComments &&
        comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
