import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Paper, Typography } from "@material-ui/core";

import styles from "./Post.module.scss";
import { PostActions } from "../PostActions";

export type PostProps = {
  id: number;
  title: string;
  description: string;
  img?: string;
};

export const Post: React.FC<PostProps> = ({ id, title, description, img }) => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">{description}</Typography>
      {img && (
        <Image
          src={img}
          height={600}
          width={600}
          objectFit="cover"
          priority
          alt={title}
        />
      )}
      <PostActions />
    </Paper>
  );
};
