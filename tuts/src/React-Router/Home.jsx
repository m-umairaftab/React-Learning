import React from "react";
import { useLocation, useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Home
      <br />
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About Page
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/filter");
        }}
      >
        Go to Filter Page
      </button>
    </div>
  );
};

export default Home;
