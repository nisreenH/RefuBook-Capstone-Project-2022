import React from 'react';
import About from './components/Home/AboutSection';
import Navbar from './components/Home/Navbar/Navbar';
import Header from './components/Home/Header/Header';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <About />
    </div>
  );
}

export default App;
