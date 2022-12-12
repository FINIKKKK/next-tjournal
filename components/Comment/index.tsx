import React from "react";
import {
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";

import styles from "./Comment.module.scss";
import { ResponseUser } from "../../utils/api/types";
import { Api } from "../../utils/api";

type CommentProps = {
  id: number;
  text: string;
  date: string;
  user: ResponseUser;
  currentUserId: number;
  onRemoveComment: (id: number) => void;
};

export const Comment: React.FC<CommentProps> = ({
  id,
  text,
  date,
  user,
  currentUserId,
  onRemoveComment
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveComment = async () => {
    if (window.confirm("Вы зотите удалить комментарий?")) {
      try {
        await Api().comment.remove(id);
        onRemoveComment(id)
      } catch (err) {
        console.log(err, "Ошибка при удалении коментария");
        alert("Ошибка!");
      } finally {
        handleClose();
      }
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.fullName[0]}</Avatar>
        <b>{user.fullName}</b>
        <span>{date}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      {currentUserId && <span className={styles.replyBtn}>Ответить</span>}
      {currentUserId === user.id && (
        <>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
          >
            <MenuItem onClick={handleRemoveComment}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};
