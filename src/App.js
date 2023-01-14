import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import HomeSection from './components/Home/Home/HomeSection';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import Blogs from './components/BlogsPage/Blogs';
import Contact from './components/ContactPage/Contact';
import UserProfile from './components/userProfile';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeSection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
