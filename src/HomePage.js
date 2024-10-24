import React from "react";
import { Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Header from './Header';
import './HomePage.css'
import profilePicture from './assets/profile_picture.jpg';

function HomePage() {
  return (
    <div className="app">
      <Header />
      <Container fluid className="main-content d-flex align-items-center justify-content-between">
        <div className="profile-img-wrapper">
          <img className="profile-image" src={profilePicture} alt="Rabindra Adhikari" />
        </div>
        <div className="description">
          <h4>Hello World!</h4><br/> <h2>I'm Rabindra</h2> <br/><span>a recent graduate with a Bachelor's in Computer Science and Artificial Intelligence, passionate about data science and machine learning.</span>
          <br/><br/>
          <LinkContainer to="/projects">
            <Button className="custom-button" >VIEW PROJECTS</Button>
          </LinkContainer>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
