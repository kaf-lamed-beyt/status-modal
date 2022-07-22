import Head from "next/head";
import React from "react";
import Status from "../src/index";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Status Modals</title>
      </Head>
      <Status message={"hello"} />
    </React.Fragment>
  );
}
