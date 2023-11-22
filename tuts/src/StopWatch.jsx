import React, { useState } from "react";
let adjustInterval = undefined;
const StopWatch = () => {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);
  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
    setStarted(true);
  };
  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false);
  };
  const resetWatch = () => {
    setWatch(0);
    clearInterval(adjustInterval);
    setStarted(false);
  };
  return (
    <>
      <h1>Start Stop Watch</h1>
      <h1> {watch} </h1>
      <button className="start" disabled={started} onClick={startWatch}>
        Start
      </button>
      <button className="stop" onClick={stopWatch}>Stop</button>
      <button className="reset" onClick={resetWatch}>Reset</button>
    </>
  );
};

export default StopWatch;
