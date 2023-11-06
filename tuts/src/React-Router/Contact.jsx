import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <br />
      <Link to="company">Company</Link>
      <br />
      <Link to="channel">Channel</Link>
      <br />
      <Link to="other">Other</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
