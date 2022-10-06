import React from "react";
import dynamic from "next/dynamic";

const Status = dynamic(() => import("../src").then((mod) => mod.Status), {
  ssr: false,
});

export default function Home() {
  const greetings = "Holla Next.js";
  const testError = "Example of an error message"

  const [testStatus, setTestStatus] = React.useState([])
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (count === 0) return
    setTestStatus(prev => ([
      ...prev,
      <Status key={count} message="How status shows" error={false} />
    ]))
  }, [count])

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
      <p>Click button to generate status message</p>
      <button onClick={() => setCount(count => count+1)}>
        Click Me
      </button>
      <Status message={greetings} error={false} />
      <Status message={testError} error={true} />
      {testStatus}
    </React.Fragment>
  );
}
