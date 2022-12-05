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
