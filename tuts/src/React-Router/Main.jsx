import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Page404 from "./Page404";
import User from "./User";
const Main = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                {" "}
                <Home />{" "}
              </h1>
            }
          />
          <Route
            path="/about"
            element={
              <h1>
                {" "}
                <About />{" "}
              </h1>
            }
          />
          <Route
            path="/*"
            element={
              <h1>
                {" "}
                <Page404 />{" "}
              </h1>
            }
          />
          <Route
            path="/contact"
            element={
              <h1>
                {" "}
                <Navigate to="/" />{" "}
              </h1>
            }
          />
          <Route
            path="/user/:name"
            element={
              <h1>
                <User />
              </h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
