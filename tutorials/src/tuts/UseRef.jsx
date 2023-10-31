import React, { useRef } from "react";

const UseRef = () => {
  let inputRef = useRef(null);
  function handleInput() {
    console.log("function call");
    inputRef.current.value = "100";
    inputRef.current.focus();
    // inputRef.current.style.display = "none";
    inputRef.current.style.color = "red";
  }
  return (
    <>
      <h1>useRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
};

export default UseRef;
