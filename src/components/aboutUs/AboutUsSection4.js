import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/AboutUsSection4.css';
import Integrity from '../../assets/images/Integrity.png';
import Innovation from '../../assets/images/Innovation.png';
import Customer_focused from '../../assets/images/Customer_focused.png';
import Sustainability from '../../assets/images/Sustainability.png';
import Quality from '../../assets/images/Quality.png';

const AboutUsSection4 = () => {
  useEffect(() => {
    const section = document.querySelector('.home-section3');
    const title = document.querySelector('.core-values-title');
    const images = document.querySelectorAll('.value-image');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
          title.classList.add('visible');
          images.forEach((image, index) => {
            setTimeout(() => {
              image.classList.add('zoom');
            }, index * 300); // Stagger the zoom effect
          });
        }
      });
    });

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container className="my-5 home-section3">
      <Row className="text-center">
        <Col>
          <h2 className="core-values-title">Core Values</h2>
          <div className="values-container">
            <div className="value-item">
              <img src={Integrity} alt="Integrity" className="value-image" />
              <p>Integrity</p>
            </div>
            <div className="value-item">
              <img src={Innovation} alt="Innovation" className="value-image" />
              <p>Innovation</p>
            </div>
            <div className="value-item">
              <img src={Customer_focused} alt="Customer-focused" className="value-image" />
              <p>Customer-focused</p>
            </div>
            <div className="value-item">
              <img src={Sustainability} alt="Sustainability" className="value-image" />
              <p>Sustainability</p>
            </div>
            <div className="value-item">
              <img src={Quality} alt="Quality" className="value-image" />
              <p>Quality</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection4;
