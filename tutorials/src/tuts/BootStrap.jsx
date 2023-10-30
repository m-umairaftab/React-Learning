import React from "react";
import { Button } from "react-bootstrap";
function BootStrap() {
  return (
    <div>
      <h1>Install and Use BootStrap</h1>
      <Button
        onClick={() => {
          alert("Hello");
        }}
      >
        Click Me!
      </Button>
    </div>
  );
}

export default BootStrap;
