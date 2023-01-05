import Header from '../Header/Header';
import About from '../AboutSection';
import Story from '../Story/Story';
import Footer from '../Footer/Footer';
import React from 'react';
import Testimonials from '../Testimonials/Testimonials';

export default function HomeSection() {
  return (
    <>
      <Header />
      <About />
      <Testimonials/>
      <Story />
      <Footer />
    </>
  );
}
