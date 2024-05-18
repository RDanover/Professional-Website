import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../Styling/navbar.css'

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const renderNavLink = (href, label) => {
    return (
      <Nav.Link
        href={`#${href}`}
        className={activeLink === href ? "active navbar-link" : "navbar-link"}
        onClick={() => onUpdateActiveLink(href)}
      >
        {label}
      </Nav.Link>
    );
  };

  return (
    <Navbar expand="lg" className="fixed-top-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {renderNavLink("home", "Home")}
            {renderNavLink("about", "About")}
            {renderNavLink("education", "Education")}
            {renderNavLink("skills", "Skills")}
            {renderNavLink("experiences-projects", "Experiences/Projects")}
            {renderNavLink("interests", "Interests")}
            {renderNavLink("links", "Links")}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
