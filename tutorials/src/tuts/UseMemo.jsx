import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(2);
  const multiCountMemo = useMemo(() => {
    console.log("multiCountMemo");
    return count * 5;
  }, [count]);
  return (
    <>
      <h1>Use memo hook in React</h1>
      <h2>Count : {count} </h2>
      <h2>Item : {item} </h2>
      <h2> {multiCountMemo} </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setItem(item * 5);
        }}
      >
        Update Item
      </button>
    </>
  );
};

export default UseMemo;
