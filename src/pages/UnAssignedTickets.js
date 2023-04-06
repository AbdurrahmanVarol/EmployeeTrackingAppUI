import React, { useContext, useEffect, useState } from 'react'
import DefaultContext from '../contexts/DefaultContext';
import { Table } from 'reactstrap';

function UnAssignedTickets() {
  const { token } = useContext(DefaultContext);

    const [tickets, setTickets] = useState([]);
  
    useEffect(() => {
      fetch("https://localhost:44333/api/Jobs/unassigned", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTickets(data);
        });
    }, []);
    return (
      <div>
        <h1>Unassigned Tickets</h1>
          {tickets.length == 0 ? (
        <h2>Thare aren't any ticket</h2>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <th>{ticket.department.departmentName}</th>
                <th>{ticket.description}</th>
                <th>{ticket.createdAt}</th>
                <th>{ticket.createdBy.fullName}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </div>
    );
}

export default UnAssignedTickets