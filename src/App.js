import React from 'react';
import About from './components/Home/AboutSection';
import Story from './components/Home/Story/Story';
function App() {
  return (
    <div className="App">
      <header>this is the header</header>
      <About />

      <Story label="Language"/>
    </div>
  );
}

export default App;
