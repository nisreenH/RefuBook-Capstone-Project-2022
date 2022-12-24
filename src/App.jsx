import { Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">Hello RefuBook Team!!!!</header>
      <Routes>
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
