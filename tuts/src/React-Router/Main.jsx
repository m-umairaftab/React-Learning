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
import Filter from "./Filter";
import Contact from "./Contact";
import Company from "./Company";
import Channel from "./Channel";
import Other from "./Other";
import Login from "./Login";
import Protected from "./Protected";
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
                <Protected Component={Home} />{" "}
              </h1>
            }
          />
          <Route path="/login" element={<Login />} />
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
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route
            path="/user/:name"
            element={
              <h1>
                <User />
              </h1>
            }
          />
          <Route
            path="/filter"
            element={
              <h1>
                {" "}
                <Filter />{" "}
              </h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
