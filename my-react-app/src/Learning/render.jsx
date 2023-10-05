import React from "react";
import ReactDOM from "react-dom/client";

class Header extends React.Component {
  render() {
    return <h1>This is the content of the Header component</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
// The render() method is required, and is the method that actually outputs the HTML to the DOM.
