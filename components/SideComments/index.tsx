import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";
import clsx from "clsx";

import { CommentItem } from "./CommentItem";

import styles from "./SideComments.module.scss";
import { useComments } from "../../hooks/useComments";

export const SideComments = () => {
  const [isHideComments, setIsHideComments] = React.useState(false);

  const { comments } = useComments();

  return (
    <div className={clsx(styles.root, isHideComments && styles.rotated)}>
      <h3 onClick={() => setIsHideComments(!isHideComments)}>
        Комментарии <ArrowRightIcon />
      </h3>
      {!isHideComments &&
        comments
          .slice(0, 3)
          .map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
