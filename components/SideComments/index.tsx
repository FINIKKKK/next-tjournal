import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from "./SideComments.module.scss";
import clsx from "clsx";

export const comments = [
  {
    id: 1,
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    date: new Date().toString(),
    user: {
      fullName: "Вася Пупкин",
      avatarUrl:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    post: {
      title: "Какая у вас дома ванна?",
    },
  },
  {
    id: 2,
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    date: new Date().toString(),
    user: {
      fullName: "Вася Пупкин",
      avatarUrl:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    post: {
      title: "Какая у вас дома ванна?",
    },
  },
  {
    id: 3,
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    date: new Date().toString(),
    user: {
      fullName: "Вася Пупкин",
      avatarUrl:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    post: {
      title: "Какая у вас дома ванна?",
    },
  },
];

interface CommentItemProps {
  user: {
    fullName: string;
  };
  text: string;
  post: {
    title: string;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="/static/img/logo.svg" />
        <a href="#">
          <b>{user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  const [isHideComments, setIsHideComments] = React.useState(false);

  return (
    <div className={clsx(styles.root, !isHideComments && styles.rotated)}>
      <h3 onClick={() => setIsHideComments(!isHideComments)}>
        Комментарии <ArrowRightIcon />
      </h3>
      {isHideComments &&
        comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
