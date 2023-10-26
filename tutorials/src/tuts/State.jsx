import React, { useState } from "react";

function State() {
  const [data, setData] = useState(0);
  function updateData() {
    setData(data + 1);
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>Update data</button>
    </div>
  );
}

export default State;
