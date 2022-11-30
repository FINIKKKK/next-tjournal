import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Paper, Typography } from "@material-ui/core";

import styles from "./Post.module.scss";
import { PostActions } from "../PostActions";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test-123">
          <a>
            Кот прилёг отдохнуть в английском парке миниатюр — и стал героем
            шуток и фотожаб о «гигантском пушистом захватчике»
          </a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        Пока одни не могли соотнести размеры животного и окружения, другие
        начали создавать апокалиптические сюжеты с котом в главной роли.
      </Typography>
      <Image
        src="https://images.unsplash.com/photo-1543965860-0a2c912bc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        height={600}
        width={600}
        objectFit="cover"
        priority
      />
      <PostActions />
    </Paper>
  );
};
