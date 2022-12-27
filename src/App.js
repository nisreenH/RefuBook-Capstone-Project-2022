import React from 'react';
import About from './components/Home/AboutSection';
import Story from './components/Home/Story/Story';
import Navbar from './components/Home/Navbar/Navbar';
import Header from './components/Home/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <About />

      <Story label="Language"/>
    </div>
  );
}

export default App;
