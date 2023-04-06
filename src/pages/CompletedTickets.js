import React, { useContext, useEffect, useState } from "react";
import TicketList from "../components/TicketList";
import { Table } from "reactstrap";
import DefaultContext from "../contexts/DefaultContext";
import formatDate from "../NewFolder/DateFormater"

function CompletedTickets() {
  const { token } = useContext(DefaultContext);

  const [tickets, setTickets] = useState([{
    department:{
      departmentName:""
    },
    createdBy:{
      firstName:""
    },
    closedBy:{
      firstName:""
    },
    createdAt:"",
    closedAt:""
  }]);

  useEffect(() => {
    fetch("https://localhost:44333/api/Jobs/completed", {
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
      <h1>Your Completed Tickets</h1>
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
              <th>Closed At</th>
              <th>Closed By</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.department.departmentName}</td>
                <td>{ticket.description}</td>
                <td>{formatDate(ticket.createdAt)}</td>
                <td>{ticket.createdBy.fullName}</td>
                <td>{formatDate(ticket.closedAt)}</td>
                <td>{ticket.closedBy.fullName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default CompletedTickets;
