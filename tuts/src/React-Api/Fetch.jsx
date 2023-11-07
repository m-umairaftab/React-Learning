import React from "react";
import { useState, useEffect } from "react";
const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://streaming-availability.p.rapidapi.com/countries").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Get API Call</h1>
    </div>
  );
};

export default Fetch;
