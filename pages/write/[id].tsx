import { GetServerSideProps } from "next";
import React from "react";
import { WriteForm } from "../../components/WriteForm";
import { MainLayout } from "../../layouts/MainLayout";
import { Api } from "../../utils/api";
import { TPost } from "../../utils/api/types";

export type WritePageProps = {
  post: TPost;
};

const WritePage: React.FC<WritePageProps> = ({ post }) => {
  return (
    <MainLayout hideComments hideSidebar>
      <WriteForm data={post} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx?.params?.id;
    const post = await Api(ctx).post.getOne(+id);
    const user = await Api(ctx).user.getProfile();

    if (post.author.id !== user.id) {
      return {
        props: {},
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

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

export default WritePage;
