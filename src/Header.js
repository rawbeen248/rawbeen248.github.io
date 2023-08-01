import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <LinkContainer to="/"><Navbar.Brand className="brand">RABINDRA ADHIKARI</Navbar.Brand></LinkContainer>

      <Navbar.Toggle className="navbar-toggle smaller-icon" aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
          <LinkContainer to="/resume"><Nav.Link>Resume</Nav.Link></LinkContainer>
          <LinkContainer to="/about-me"><Nav.Link>About Me</Nav.Link></LinkContainer>
          <LinkContainer to="/contact-me"><Nav.Link>Contact Me</Nav.Link></LinkContainer>
        </Nav>
        <Nav className="socials d-lg-none">
          <Nav.Link href="https://github.com/rawbeen248?tab=repositories" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="social-icon" color="#ffffff" />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/rabindra-adhikari/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="social-icon" color="#ffffff" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Nav className="socials d-none d-lg-flex ml-auto">
        <Nav.Link href="https://github.com/rawbeen248?tab=repositories" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="social-icon" color="#ffffff" />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/rabindra-adhikari/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="social-icon" color="#ffffff" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
