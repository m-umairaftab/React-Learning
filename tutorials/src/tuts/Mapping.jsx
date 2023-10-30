import React from "react";
import { Table } from "react-bootstrap";
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
      <Table striped variant="dark">
        <thead>
          <tr>
            <td>Serial No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          {students.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Mapping;
