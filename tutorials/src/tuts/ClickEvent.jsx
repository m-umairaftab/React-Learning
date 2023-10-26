import React from "react";
function ClickEvent() {
  const data = "Umair Aftab";
  function Apple() {
    alert("function called");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button
        type="button"
        onClick={() => {
          alert(Apple);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default ClickEvent;
