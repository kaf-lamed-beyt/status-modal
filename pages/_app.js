import React from "react";
import "../style/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component pageProps={pageProps} />
    </React.Fragment>
  );
}
