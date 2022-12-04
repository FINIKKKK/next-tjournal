import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { Post } from "../components/Post";
import { MainLayout } from "../layouts/MainLayout";
import { Api } from "../utils/api";
import { TPost } from "../utils/api/types";

export type THome = {
  posts: TPost[];
};

const Home: NextPage<THome> = ({ posts }) => {
  return (
    <MainLayout>
      {posts.map((obj) => (
        <Post
          key={obj.id}
          id={obj.id}
          title={obj.title}
          description={obj.description}
        />
      ))}
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const posts = await Api().post.getAll();
    return { props: { posts } };
  } catch (err) {
    console.log(err);
  }

  return { props: { posts: null } };
};

export default Home;
