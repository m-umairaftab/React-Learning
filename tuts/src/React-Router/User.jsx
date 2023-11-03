import React from "react";
import { useParams } from "react-router";
const User = () => {
  const parms = useParams();
  const { name } = parms;
  return (
    <div>
      <h1>This is {name}'s Page</h1>
    </div>
  );
};

export default User;
