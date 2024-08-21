import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import '../assets/css/Footer.css'; // Import custom CSS for styling
import logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <>
      <footer className="footer-top text-center py-4">
        <Container>
          <Row className="mb-4">
            <Col md={4} className="address-info">
              <div className="logo mb-5">
                <img src={logo} alt="Re-RaN Electro-mechanical Solutions" />
              </div>
              <div className="contact-details">
                <div className="address">
                  <FaMapMarkerAlt size={20} />
                  <p>Addis Ababa, Ethiopia<br />Haile Maryam Mamo St</p>
                </div>
                <div className="phone">
                  <FaPhoneAlt size={20} />
                  <p>+251-945-43-4356<br />+251-945-93-4357</p>
                </div>
              </div>
            </Col>
        
            <Col md={4} className="footer-links mt-5">
              <h3 className='mb-3'>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </Col>

            <Col md={4} className="social-icons mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="mailto:info@example.com">
                <FaEnvelope />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className="footer-bottom text-white text-center py-3">
        <Container>
          <p className='copyright'>&copy; 2024 Re-RaN Electro-mechanical Solutions. Developed by Nomads</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
