// src/components/AboutUsSection5.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import mission from '../../assets/images/mission.png'; // replace with actual image path
import vision from '../../assets/images/vision.png'; // replace with actual image path
import '../../assets/css/AboutUsSection5.css'; // Import custom CSS for styling

const AboutUsSection5 = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col md={6}>
          <Card className="custom-card">
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title className="card-title">Our Mission</Card.Title>
              <Card.Text className="card-text">
                To deliver top-notch electro-mechanical products and services that exceed our clients’ expectations. We strive to foster innovation, ensure quality, and provide sustainable solutions that contribute to the advancement of technology and engineering.
              </Card.Text>
              <Card.Img src={mission} alt="Our Mission" className="card-img" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="custom-card">
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title className="card-title">Our Vision</Card.Title>
              <Card.Text className="card-text">
                To be the most trusted and innovative electro-mechanical solutions provider globally, known for our commitment to excellence, customer satisfaction, and sustainable practices.
              </Card.Text>
              <Card.Img src={vision} alt="Our Vision" className="card-img" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection5;
