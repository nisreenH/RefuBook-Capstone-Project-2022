import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import HomeSection from './components/Home/Home/HomeSection';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeSection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
