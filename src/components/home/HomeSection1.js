import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import vid from '../../assets/images/re-ran.mp4';
import '../../assets/css/HomeSection1.css'; 

const HomeSection1 = () => {
  useEffect(() => {
    const textCol = document.querySelector('.text-col');
    const button = document.querySelector('.explore-button');

    textCol.classList.add('fade-in-slide');
    button.classList.add('fade-in-slide');
  }, []);

  return (
    <div className="home-section1">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-col">
            <h1>Delivering Excellence!</h1>
            <p>Re-RaN Electro-mechanical Solutions is a pioneering company dedicated to providing comprehensive electro-mechanical works and consulting services.</p>
            <Link to="/services">
              <Button className="explore-button">Explore</Button>
            </Link>
          </Col>
          <Col md={6} className="video-col">
            <video
              autoPlay
              loop
              muted
              className="right-video"
            >
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSection1;
