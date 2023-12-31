/*The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).*/
import React from "react";
import ReactDOM from "react-dom/client";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
