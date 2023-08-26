import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import "./navbar.css";

function YodlerNavbar() {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/"><img className="logo" src={require("./images/people.png")} /> Yodler</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin">Admin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/register">Register</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default YodlerNavbar;