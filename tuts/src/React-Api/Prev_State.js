import React, { useState } from "react";

const Prev_State = () => {
  const [count, setCount] = useState(1);
  function updateCount() {
    let rand = Math.floor(Math.random() * 10);
    setCount((pre) => {
      console.log(pre);
      if (pre < 5) {
        alert("Low Value");
      }
      return rand;
    });
  }
  return (
    <div>
      <h1>Get value of Previous State</h1>
      <br />
      <h1>{count}</h1>
      <button onClick={updateCount}>Click me to Update</button>
    </div>
  );
};

export default Prev_State;
