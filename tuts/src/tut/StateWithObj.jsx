import React, { useState } from "react";

const StateWithObj = () => {
  const [data, setData] = useState({ name: "Umair", age: 20 });
  return (
    <div>
      <h1>State With Object In React JS</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Age"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />
      <h1> {data.name} </h1>
      <h1> {data.age} </h1>
    </div>
  );
};

export default StateWithObj;
