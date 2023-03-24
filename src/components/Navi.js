import React, { useState,useContext } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Button,
} from "reactstrap";
import DefaultContext from "../contexts/DefaultContext";

function Navi() {
    const {userRole} = useContext(DefaultContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
  
    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="brand" href="/">
          EmployeeTrackingApp
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/createTicket" state={{}}>
                Create New Ticket
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/" state={{}}>
                Your Tickets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/" state={{}}>
                Your Completed Tickets
              </NavLink>
            </NavItem>
            {userRole == 1
              ? [(
                  <NavItem>
                    <NavLink className="nav-link" to="/employees" state={{}}>
                      Employees
                    </NavLink>
                  </NavItem>
              ),
              (
                  <NavItem>
                    <NavLink className="nav-link" to="/unassignedTickets" state={{}}>
                      Unassigned Tickets
                    </NavLink>
                  </NavItem>
              )]
              : ""}
          </Nav>
          <Button
            color="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi