// src/components/AboutUsSection5.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mission from '../../assets/images/mission.png'; 
import vision from '../../assets/images/vision.png';
import '../../assets/css/AboutUsSection5.css'; 

const AboutUsSection5 = () => {
  return (
    <Container fluid className="my-5 section">
      <Row className="g-4 align-items-center">
        {/* Mission Section */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            To deliver top-notch electro-mechanical products and services that exceed our clients’ expectations. We strive to foster innovation, ensure quality, and provide sustainable solutions that contribute to the advancement of technology and engineering.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img src={mission} alt="Our Mission" className="section-img1" />
        </Col>
      </Row>

      <Row className="g-4 align-items-center mt-5">
        {/* Vision Section */}
        <Col md={6} className="text-center">
          <img src={vision} alt="Our Vision" className="section-img2" />
        </Col>
        <Col md={6} className="text-center text-md-start">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            To be the most trusted and innovative electro-mechanical solutions provider globally, known for our commitment to excellence, customer satisfaction, and sustainable practices.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection5;
