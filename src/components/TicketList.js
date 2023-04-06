import React from 'react'
import { Table } from 'reactstrap'

function TicketList({tickets}) {
  return (
    <div>
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
                <th>{ticket.department.departmentName}</th>
                <th>{ticket.description}</th>
                <th>{ticket.createdAt}</th>
                <th>{ticket.createdBy}</th>
                <th>{ticket.closedAt}</th>
                <th>{ticket.closedBy}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default TicketList