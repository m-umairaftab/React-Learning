import React, { useState } from "react";

const Hoc = () => {
  return (
    <>
      <h1>HOC(High Order Function)</h1>
      <HocRed cmp={Counter} />
      <HocGreen cmp={Counter} />
    </>
  );
};
function HocRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: "40%" }}>
      Red
      <props.cmp />
    </h2>
  );
}
function HocGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: "40%" }}>
      Green
      <props.cmp />
    </h2>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3> {count} </h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
    </>
  );
}
export default Hoc;
