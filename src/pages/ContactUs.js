import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../assets/css/ContactUs.css';

const ContactUs = () => {
  return (
    <Container className="contact-us-page my-5">
      <section className="first-section text-center mb-5">
        <h2 className="get-in-touch">Get in Touch</h2>
        <Row className="mt-4">
          <Col md={4} className="contact-detail">
            <FaMapMarkerAlt size={50} className="contact-icon" />
            <h4>Address</h4>
            <p>Addis Ababa, Ethiopia<br />Haile Maryam Mamo St</p>
          </Col>
          <Col md={4} className="contact-detail">
            <FaPhoneAlt size={50} className="contact-icon" />
            <h4>Phone</h4>
         
            <p>+251 993305867</p>
            <p>P.O. Box: 8669</p> 
            <p>Fax: +251993305867  </p> 
          
          </Col>
          <Col md={4} className="contact-detail">
            <FaEnvelope size={50} className="contact-icon" />
            <h4>Email</h4>
            <p>info@reran.com <br />reranplc@re-ran.com </p>
          </Col>
        </Row>
      </section>

      <section className="map-section mt-5 mb-5">
        <h2 className='text-center mb-5'>Our Location</h2>
        <div className="map-container">
          {/* Embed a map iframe or a static map image here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.034412205005!2d38.7272723!3d9.0280579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850bcc9e48ef%3A0x2bafc78f5e2bdf06!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1619194688260!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </section>


      <section className="second-section">
        <h2 className='text-center mb-5'>Send Us a Message</h2>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your company name" />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Row>
                  <Col md={4}>
                    <Form.Control as="select">
                      <option>+251</option>
                      <option>+1</option>
                      <option>+44</option>
                      {/* Add more country codes as needed */}
                    </Form.Control>
                  </Col>
                  <Col md={8}>
                    <Form.Control type="text" placeholder="Phone number" />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter your country" />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter your city" />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group>

              <Form.Group controlId="formProductType">
                <Form.Label>Product type / brand / model</Form.Label>
                <Form.Control type="text" placeholder="Enter product details" />
              </Form.Group>

              <Form.Group controlId="formEnquiry">
                <Form.Label>Your Enquiry</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your enquiry" />
              </Form.Group>

              <Form.Group controlId="formHowDidYouHear">
                <Form.Label>How did you hear about us?</Form.Label>
                <Form.Control type="text" placeholder="Let us know" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>

         </Container>
  );
};

export default ContactUs;
