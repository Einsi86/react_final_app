import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';


const TopNavbar = () => {
    return (

        <StyledNavbar>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Orders</Nav.Link>
                            <Nav.Link href="#link">Drinks</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </StyledNavbar >
    )
}


export default TopNavbar;

const StyledNavbar = styled(Container)`
    padding: 0 20px;
  background-color: #e0e39a;
  color: #e0e39a;
  width: auto;
  max-width: 100%;
  max-height: 80px;
  padding: 10 20px;
  margin: 0;
  nav {
    background-color: #e0e39a !important;
  }
  Button {
    background: none;
    border: none;
    color: black;
    :hover {
      background-color: lightgrey;
    }
  }
`