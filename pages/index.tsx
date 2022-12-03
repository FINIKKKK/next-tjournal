import { parseCookies } from "nookies";
import { useDispatch } from "react-redux";
import { Post } from "../components/Post";
import { MainLayout } from "../layouts/MainLayout";
import { wrapper } from "../redux/store";
import { setUserData } from "../redux/user/slice";
import { UserApi } from "../utils/api";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { token } = parseCookies(ctx);
      const userData = await UserApi.getProfile(token);
      store.dispatch(setUserData(userData));
    } catch (err) {
      console.log(err);
    } finally {
      return { props: {} };
    }
  }
);
