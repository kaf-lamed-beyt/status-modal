import React from "react";
import dynamic from "next/dynamic";

const Status = dynamic(() => import("../src").then((mod) => mod.Status), {
  ssr: false,
});

export default function Home() {
  const greetings = "Holla Next.js";

  return (
    <React.Fragment>
      <h3 style={{ textAlign: "center", fontFamily: "ubuntu" }}>
        Here you can test the functionalites of {""}
        <span
          style={{
            width: "70px",
            padding: "8px 4px",
            backgroundColor: "#ff0000",
            color: "#fff",
          }}
        >
          status-modal
        </span>
      </h3>
      <Status message={greetings} error={false} />
      <Status message={greetings} error={true} />
    </React.Fragment>
  );
}
