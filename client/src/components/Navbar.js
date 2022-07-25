import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/global.css';
import '../styles/navbar.css';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <Navbar expand="md" className="nav">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-item" href="#about">About</Nav.Link>
            <Nav.Link className="nav-item" href="#services">Services</Nav.Link>
            <Nav.Link className="nav-item" href="#portfolio">Portfolio</Nav.Link>
            <button className="btn float-end"><a href="#contact">Contact</a></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
