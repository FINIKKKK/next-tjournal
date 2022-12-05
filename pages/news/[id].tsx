import React from "react";

import { MainLayout } from "../../layouts/MainLayout";
import { FullPost } from "../../components/FullPost";
import { PostCommnets } from "../../components/PostComments";
import { comments } from "../../components/SideComments";
import { GetServerSideProps, NextPage } from "next";
import { TPost } from "../../utils/api/types";
import { Api } from "../../utils/api";

interface FullPostPageProps {
  post: TPost;
}

const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} body={post.body} />
      <PostCommnets items={comments} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx?.params?.id;
    const post = await Api(ctx).post.getOne(+id);

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default FullPostPage;
