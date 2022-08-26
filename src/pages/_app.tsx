/* eslint-disable prettier/prettier */
import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado -Boilerplate</title>
        <link rel="shortcut icon" href="/public/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/public/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project with TypeScript, React, Nextjs and Styled-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
