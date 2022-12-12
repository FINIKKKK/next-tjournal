import { OutputData } from "@editorjs/editorjs";

export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  createAt: string;
  email: string;
  fullName: string;
  id: number;
  token: string;
  updateAt: string;
  commentCount: number;
};

export type CreatePostDto = {
  title: string;
  body: OutputData["blocks"];
};

export type TPost = {
  id: number;
  title: string;
  body: OutputData["blocks"];
  description: string;
  author: ResponseUser;
  tags: null | string;
  views: number;
  createAt: string;
  updateAt: string;
};

export type CreateCommentDto = {
  postId: number;
  text: string;
};

export type TComment = {
  id: number;
  text: string;
  post: TPost;
  user: ResponseUser;
  createAt: string;
  updateAt: string;
};

export type SearchPostDto = {
  title?: string;
  body?: string;
  tag?: string;
  views?: "DESC" | "ASC";
  limit?: number;
  take?: number;
};
