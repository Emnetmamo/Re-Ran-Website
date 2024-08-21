import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../../assets/images/aboutus.png'; 
import '../../assets/css/AboutUsSection1.css'; 

const AboutUsSection1 = () => {
  return (
    <Container fluid className="about-section">
      <Row className="my-5">
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
              Re-RaN is a new solution established by seasoned professionals with extensive experience in the electro-mechanical industry. Professionals of Re-RaN have successfully completed numerous projects, ranging from small-scale installations to large industrial setups.
            </p>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img src={aboutImage} alt="About Us" className="about-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection1;
