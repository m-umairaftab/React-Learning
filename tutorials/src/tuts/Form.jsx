import { useState } from "react";
function Form() {
  function getFormData(e) {
    e.preventDefault();
    console.log(name, interest, tnc);
  }
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  return (
    <div>
      <h1>Handle Form in React</h1>
      <form action="" onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <select
          name=""
          id=""
          onChange={(e) => {
            setInterest(e.target.value);
          }}
        >
          <option value="">Select Options</option>
          <option value="">Marvel</option>
          <option value="">Dc</option>
        </select>
        <br /> <br />
        <input
          type="checkbox"
          onChange={(e) => {
            setTnc(e.target.checked);
          }}
        />
        <span>Accept Terms and Condition</span>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
