import Link from "next/link";
import React from "react";

import styles from "./SideComments.module.scss";

interface CommentItemProps {
  user: {
    id: number;
    fullName: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    id: number;
    title: string;
  };
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
            <img src={user.avatarUrl} alt="avatar" />
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
