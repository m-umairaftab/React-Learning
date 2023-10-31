import React, { useState } from "react";

const ControlledComponent = () => {
  const [val, setVal] = useState("000");
  return (
    <>
      <h1>Controlled Component in React</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </>
  );
};

export default ControlledComponent;
