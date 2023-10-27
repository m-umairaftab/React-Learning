import React, { useState } from "react";

function LoginValidation() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  function LoginHandle(e) {
    e.preventDefault();
    if (user.length < 3 || password.length < 3) {
      alert("Type Correct Values");
    } else {
      alert("All good :)  ");
    }
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" on onSubmit={LoginHandle}>
        <input type="text" placeholder="Enter your Id" onChange={userHandler} />
        <br />
        {userErr ? <span> User Not Valid</span> : null}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={passwordHandler}
        />
        <br />
        {passwordErr ? <span> Password Not Valid</span> : null}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginValidation;
