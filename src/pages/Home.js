// src/pages/Home.js
import React from 'react';
import HomeSection1 from '../components/home/HomeSection1';
import HomeSection2 from '../components/home/HomeSection2';
import HomeSection3 from '../components/home/HomeSection3';
import HomeSection4 from '../components/home/HomeSection4';

const Home = () => {
  return (
    <div>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      {/* <HomeSection4 /> */}
    </div>
  );
};

export default Home;
