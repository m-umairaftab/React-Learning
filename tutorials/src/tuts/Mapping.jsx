import React from "react";

function Mapping() {
  const students = [
    {
      name: "Umair",
      email: "m.umair.umairaftab@gmail.com",
      contact: "03451157264",
    },
    {
      name: "Zaigham",
      email: "m.zaighamjaved@gmail.com",
      contact: "03464960368",
    },
    { name: "Aftab", email: "aftabjaved377@gmail.com", contact: "03457626977" },
  ];
  return (
    <div>
      <h1>Handle array with list</h1>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {students.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Mapping;
