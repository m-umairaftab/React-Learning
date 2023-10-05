import React from "react";
import ReactDOM from "react-dom/client";
import name, { Program, age } from "./Learning/importExport";
// import Car from "./Learning/component";
import Cars from "./Learning/component_with_class";
import Car from "./Learning/setState";

const myFirstElement = <h1>Hello React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myFirstElement);
root.render(name);
root.render(age);
root.render(Program());
root.render(Car());
root.render(Cars());
root.render(Car());
