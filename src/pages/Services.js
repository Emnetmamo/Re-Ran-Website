// src/components/Services.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import serviceImage1 from '../assets/images/service1.png'; 
import serviceImage2 from '../assets/images/service2.png';
import serviceImage3 from '../assets/images/service3.png';
import serviceImage4 from '../assets/images/service4.png';
import serviceImage5 from '../assets/images/service5.jpg';
import serviceImage6 from '../assets/images/service6.jpg';
import '../assets/css/Services.css';

const Services = () => {
  return (
    <Container  fluid className="service_Contanier my-5">
       <div className='mb-5 hero-section'>
       <h2 className="services-title">Our Services</h2>
       </div>
     
     
      <Row className='section-holder'>
        <Col md={4} className="service-col">
          <div className="service-item">
            <div className="service-image-container">
              <img src={serviceImage1} alt="Service 1" className="service-image" />
            </div>
            <div className="service-description-container">
              <p>Electromechanical Works: Import and export of electrical, mechanical, and electromechanical products.</p>
            </div>
          </div>
        </Col>
        <Col md={4} className="service-col">
          <div className="service-item">
            <div className="service-image-container">
              <img src={serviceImage2} alt="Service 2" className="service-image" />
            </div>
            <div className="service-description-container">
              <p>Supply, installation, testing, commissioning, and maintenance of vertical transport systems, pumps, generators, HVAC systems, sanitary equipment, and solar systems.</p>
            </div>
          </div>
        </Col>
        <Col md={4} className="service-col">
          <div className="service-item">
            <div className="service-image-container">
              <img src={serviceImage3} alt="Service 3" className="service-image" />
            </div>
            <div className="service-description-container">
              <p>Installation, maintenance, repair, operation, and management of electromechanical products and systems.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='section-holder'>
        <Col md={4} className="service-col">
          <div className="service-item">
            <div className="service-image-container">
              <img src={serviceImage4} alt="Service 4" className="service-image" />
            </div>
            <div className="service-description-container">
              <p>Electromechanical Consulting: Technical consultation for design, selection, installation supervision, testing, and commissioning.</p>
            </div>
          </div>
        </Col>
        <Col md={4} className="service-col">
          <div className="service-item">
            <div className="service-image-container">
              <img src={serviceImage5} alt="Service 5" className="service-image" />
            </div>
            <div className="service-description-container">
              <p>Feasibility studies and performance evaluations.</p>
            </div>
          </div>
        </Col>
        <Col md={4} className="service-col">
          <div className="service-item">
            <div className="service-image-container">
              <img src={serviceImage6} alt="Service 6" className="service-image" />
            </div>
            <div className="service-description-container">
              <p>Training and education in engineering and technology.</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* <div className="text-center mt-4">
        <Button variant="primary" href="/more-services">See More</Button>
      </div> */}
    </Container>
  );
};

export default Services;
