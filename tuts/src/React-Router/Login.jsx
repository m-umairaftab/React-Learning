import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  function login() {
    localStorage.setItem("login", true);
    navigate("/");
  }
  return (
    <div>
      <h1>Login page</h1>
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
