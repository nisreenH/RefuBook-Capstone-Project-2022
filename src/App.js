import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import HomeSection from './components/Home/Home/HomeSection';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import Blogs from './components/BlogsPage/Blogs';
import SingleBlog from './components/BlogsPage/SingleBlog';
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
          <Route path="/SingleBlog" element={<SingleBlog />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
