import React from 'react';
import AboutPageCover from '../aboutPageCover/Index';
import AboutUs from '../aboutPageAboutUs/Index';
import TeamSection from '../teamSection/index';
import AboutPageCTA from '../aboutPageCTA/index';
import Footer from '../Home/Footer/Footer';
import Testimonials from '../Home/Testimonials/Testimonials';
const About = () => {
  return (
    <>
      <AboutPageCover />
      <AboutUs /> 
       <TeamSection /> 
       <Testimonials/>
       <AboutPageCTA />
       <Footer />
    </>
  );
};
export default About;
