import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick'; // Assume you're using react-slick for the slider
import partnerLogo1 from '../../assets/images/logo.jpg'; // replace with actual images
import partnerLogo2 from '../../assets/images/logo.jpg';
import partnerLogo3 from '../../assets/images/logo.jpg';
import '../../assets/css/AboutUsSection2.css'; // Import custom CSS for styling

const AboutUsSection2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Centering the slides
    centerPadding: '0', // No padding around centered slides
  };

  return (
    <Container className="my-5 partners-section">
      <h2 className="partners-title text-center">Our Partners</h2>
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
          <img src={partnerLogo1} alt="Partner 1" className="partner-logo" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={partnerLogo2} alt="Partner 2" className="partner-logo" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={partnerLogo3} alt="Partner 3" className="partner-logo" />
        </div>
        {/* Add more logos as needed */}
      </Slider>
    </Container>
  );
};

export default AboutUsSection2;
