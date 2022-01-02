import '../styles/globals.css';
import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";

const MyApp =({ Component, pageProps, router } :AppProps) :JSX.Element => {
  return <>
    <Head>
      <title>Top Rating Restaurants</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
      <meta property="og:locale" content="ru_RU"/>
    </Head>
    <Component {...pageProps} />
  </>;
};

export default MyApp;
