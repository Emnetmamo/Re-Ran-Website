// src/pages/AboutUs.js
import React from 'react';
import AboutUsSection1 from '../components/aboutUs/AboutUsSection1';
import AboutUsSection2 from '../components/aboutUs/AboutUsSection2';
import AboutUsSection3 from '../components/aboutUs/AboutUsSection3';
import AboutUsSection4 from '../components/aboutUs/AboutUsSection4';
import AboutUsSection5 from '../components/aboutUs/AboutUsSection5';

const AboutUs = () => {
  return (
    <div>
      <AboutUsSection1 />
      <AboutUsSection2 />
      <AboutUsSection3 />
      <AboutUsSection4 />
      <AboutUsSection5 />
    </div>
  );
};

export default AboutUs;
