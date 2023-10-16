import React from "react";
import ReactDOM from "react-dom/client";

class Cars extends React.Component {
  render() {
    return <h2>Hi, I am a new Car!</h2>;
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Cars />);
export default Cars;
