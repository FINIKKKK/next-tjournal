import React from "react";
import { Button } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from "@material-ui/icons";

import styles from "./LeftMenu.module.scss";
import { compile } from "sass";

const menu = [
  { text: "Лента", icon: <FireIcon />, path: "/" },
  { text: "Сообщения", icon: <MessageIcon />, path: "/messages" },
  { text: "Рейтинг RJ", icon: <TrendingIcon />, path: "/rating" },
  { text: "Подписки", icon: <ListIcon />, path: "/follows" },
];

export const LeftMenu: React.FC = () => {
  const router =  useRouter();
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button variant={obj.path === router.asPath ? "contained" : 'text'}>
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
