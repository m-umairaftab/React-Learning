// import React, { useEffect, useState } from "react";

// function UseEffect() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("useEffect");
//   });
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Update Count
//       </button>
//     </div>
//   );
// }

// export default UseEffect;

import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("called with data state");
  }, [data]);
  useEffect(() => {
    console.log("called with count state");
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <br />
      <br />
      <h1>Data: {data}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Update data
      </button>
    </div>
  );
}

export default UseEffect;
