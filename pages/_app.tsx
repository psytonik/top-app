import '../styles/globals.css';
import {AppProps} from "next/app";
import Head from "next/head";

const MyApp =({ Component, pageProps } :AppProps) :JSX.Element => {
  return <>
    <Head>
      <title>Top Rating Restaurants</title>
      <meta name="description" content="Application for rating restaurants" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>;
};

export default MyApp
