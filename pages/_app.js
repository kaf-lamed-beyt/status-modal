import React from "react";
import Head from "next/head";

export default function App({ Component, ...pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>status-modal playground</title>
      </Head>
      <Component pageProps={pageProps} />
    </React.Fragment>
  );
}
