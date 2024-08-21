// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaServicestack, FaBox, FaEnvelope } from 'react-icons/fa';
import '../assets/css/Navbar.css';
import logo from "../assets/images/Logo.png"

const NavBar = () => {
  return (
    <Navbar  variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="/">
        <img src={logo} alt="Re-RaN Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" className="nav-link" activeClassName="active-link">
            <FaHome /><br />Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about-us" className="nav-link" activeClassName="active-link">
            <FaInfoCircle /><br />About Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services" className="nav-link" activeClassName="active-link">
            <FaServicestack /><br />Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" className="nav-link" activeClassName="active-link">
            <FaBox /><br />Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact-us" className="nav-link" activeClassName="active-link">
            <FaEnvelope /><br />Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
