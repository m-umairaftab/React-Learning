import React, { useState } from "react";

function Toogle() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      {status ? <h1>Umair Aftab</h1> : null}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default Toogle;
