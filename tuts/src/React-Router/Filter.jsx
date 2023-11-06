import React from "react";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const age = serachParams.get("age");
  const city = serachParams.get("city");
  return (
    <div>
      Filter
      <h3>Age is : {age} </h3>
      <h3>City is : {city} </h3>
      <input
        type="text"
        placeholder="Set Text in Query Param"
        onChange={(e) => {
          setSearchParams({ text: e.target.value });
        }}
      />
      <button
        onClick={() => {
          setSearchParams({ age: 40, city: "Lahore" });
        }}
      >
        Set age in Query Param
      </button>
    </div>
  );
};

export default Filter;
