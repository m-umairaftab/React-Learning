import { useState } from "react";
import React from "react";

function InputBox() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div>
      <h1>Input Box</h1>
      <input type="text" onChange={getData} />
      <button
        onClick={() => {
          setPrint(true);
        }}
      >
        Print Data
      </button>
      {print ? <h1>{data}</h1> : null}
    </div>
  );
}

export default InputBox;
