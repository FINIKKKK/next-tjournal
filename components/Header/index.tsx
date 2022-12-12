import React from "react";
import Link from "next/link";

import { Paper, Button, IconButton, Avatar, ListItem, List } from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from "@material-ui/icons";

import { Auth } from "../Auth";

import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { userSliceSelector } from "../../redux/user/selectors";
import { TPost } from "../../utils/api/types";
import { Api } from "../../utils/api";

export type HeaderProps = {};

export const Header: React.FC = () => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [posts, setPosts] = React.useState<TPost[]>([]);

  const userData = useSelector(userSliceSelector);

  const handleClickOpen = () => {
    setVisiblePopup(true);
  };

  const handleClose = () => {
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    if (visiblePopup && userData) {
      setVisiblePopup(false);
    }
  }, [visiblePopup, userData]);

  const handleChangeInput = async (e: any) => {
    setSearchValue(e.target.value);
    try {
      const { items } = await Api().post.search({ title: e.target.value });
      console.log(items);
      setPosts(items);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img
              height={35}
              className="mr-20"
              src="/static/img/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input
            value={searchValue}
            onChange={handleChangeInput}
            placeholder="Поиск"
          />
          {posts.length > 0 && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                {posts.map((obj) => (
                  <Link key={obj.id} href={`/news/${obj.id}`}>
                    <a>
                      <ListItem button>{obj.title}</ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
        </div>
        <Link href="write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {userData ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ArrowBottom />
            </a>
          </Link>
        ) : (
          <div
            className={styles.loginButton}
            onClick={() => setVisiblePopup(true)}
          >
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      <Auth visible={visiblePopup} onClose={handleClose} />
    </Paper>
  );
};
