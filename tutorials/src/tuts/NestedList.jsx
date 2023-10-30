import React from "react";
import { Table } from "react-bootstrap";
function NestedList() {
  const students = [
    {
      name: "Umair",
      email: "m.umair.umairaftab@gmail.com",
      address: [
        { Hn: "10", city: "Lahore", country: "Pakistan" },
        { Hn: "10", city: "Lahore", country: "Pakistan" },
        { Hn: "10", city: "Lahore", country: "Pakistan" },
      ],
    },
    {
      name: "Zaigham",
      email: "m.zaighamjaved@gmail.com",
      address: [
        { Hn: "10", city: "Lahore", country: "Pakistan" },
        { Hn: "10", city: "Lahore", country: "Pakistan" },
        { Hn: "10", city: "Lahore", country: "Pakistan" },
      ],
    },
    {
      name: "Aftab",
      email: "aftabjaved377@gmail.com",
      address: [
        { Hn: "10", city: "Lahore", country: "Pakistan" },
        { Hn: "10", city: "Lahore", country: "Pakistan" },
        { Hn: "10", city: "Lahore", country: "Pakistan" },
      ],
    },
  ];
  return (
    <div>
      <h1>Handle array with Nested list</h1>
      <Table striped variant="dark">
        <thead>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {students.map((data, i) => (
            <tr key={i}>
              <td> {i + 1} </td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Table striped variant="dark">
                  <tbody>
                    {data.address.map((item, k) => (
                      <tr key={k}>
                        <td>{item.Hn}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default NestedList;
