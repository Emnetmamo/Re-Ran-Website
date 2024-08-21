// src/components/AboutUsSection3.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import governmentImage from '../../assets/images/gov.png'; // replace with actual images
import schoolsImage from '../../assets/images/school.png';
import businessesImage from '../../assets/images/business.png';
import '../../assets/css/AboutUsSection3.css'; // Import custom CSS for styling

const AboutUsSection3 = () => {
  return (
    <Container fluid className="about-section3 my-5">
      <h2 className="serve-title">Who We Serve</h2>
      <Row className="text-center my-4">
        <Col md={4}>
          <img src={governmentImage} alt="Government Institutions" className="serve-image" />
          <p>Government Institutions</p>
        </Col>
        <Col md={4}>
          <img src={schoolsImage} alt="Schools" className="serve-image" />
          <p>Schools</p>
        </Col>
        <Col md={4}>
          <img src={businessesImage} alt="Businesses" className="serve-image" />
          <p>Businesses</p>
        </Col>
      </Row>
      <p className="text-center text-p">
        We are committed to building long-term relationships with our clients by providing exceptional service and support.
      </p>
    </Container>
  );
};

export default AboutUsSection3;
