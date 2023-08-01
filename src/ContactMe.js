import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from './Header';
import './ContactMe.css'
import {FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa';

function ContactMe() {
  return (
    <div className="app">
        <Header />
        <Container className="contact-container">
            <Row className="text-center">
                <Col xs={12} sm={6} md={3} className="column-margin">
                    <a href="mailto:rawbeendraw.248@gmail.com" className="contact-link">
                        <FaEnvelope size="2em"/>
                        <p>Email</p>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={3} className="column-margin">
                    <a href="https://www.linkedin.com/in/rabindra-adhikari/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaLinkedin size="2em"/>
                        <p>LinkedIn</p>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={3} className="column-margin">
                    <a href="https://github.com/rawbeen248?tab=repositories" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaGithub size="2em"/>
                        <p>GitHub</p>
                    </a>
                </Col>
                <Col xs={12} sm={6} md={3} className="column-margin">
                    <a href="https://www.instagram.com/ard_neeb_war/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaInstagram size="2em"/>
                        <p>Instagram</p>
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default ContactMe;
