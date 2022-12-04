import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Head from "next/head";
import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { theme } from "../theme";

import "macro-css";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import { Component, FC } from "react";
import { parseCookies } from "nookies";
import { UserApi } from "../utils/api/user";
import { setUserData } from "../redux/user/slice";
import { Api } from "../utils/api";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const { token } = parseCookies(ctx);
        const userData = await Api(ctx).user.getProfile();
        store.dispatch(setUserData(userData));
      } catch (err) {
        if (ctx.asPath === "/write") {
          ctx?.res?.writeHead(302, { Location: "/403" });
          ctx?.res?.end();
        }
        console.log(err);
      }

      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {},
      };
    }
);

export default wrapper.withRedux(App);
