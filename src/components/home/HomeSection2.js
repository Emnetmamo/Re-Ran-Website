import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../assets/images/man-engaged-household-tasks-scenery.jpg';
import '../../assets/css/HomeSection2.css';

const HomeSection2 = () => {
  useEffect(() => {
    const section = document.querySelector('.home-section2');
    const imageElement = document.querySelector('.section-image');
    const textCol2 = document.querySelector('.text-col2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
          imageElement.classList.add('visible');  // Specifically target the image
          textCol2.classList.add('visible');
        }
      });
    });

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container fluid className="home-section2">
      <Row className="align-items-center">
        <Col md={5} className="image-col">
          <img src={image} alt="Who we are" className="section-image" />
        </Col>
        <Col md={7} className="text-col2">
          <h2>Who we are?</h2>
          <p>Re-RaN Electro-mechanical Solutions is a pioneering company dedicated to providing comprehensive electro-mechanical works and consulting services. With a focus on quality, innovation, and customer satisfaction, we aim to be the leading provider of electro-mechanical solutions in the industry.</p>
          <Link to="/about-us">
            <Button className="learn-more-button">Learn More</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSection2;
