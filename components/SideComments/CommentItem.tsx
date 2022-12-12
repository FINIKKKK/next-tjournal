import { Avatar } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { ResponseUser, TPost } from "../../utils/api/types";

import styles from "./SideComments.module.scss";

interface CommentItemProps {
  user: ResponseUser;
  text: string;
  post: TPost;
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Link href={`/profile/${[user.id]}`}>
          <a>
            <Avatar>{user.fullName[0]}</Avatar>
            <b>{user.fullName}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${[post.id]}`}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};
