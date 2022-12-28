import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import HomeSection from './components/Home/Home/HomeSection';
import Signup from './components/Signup/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeSection />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
