import React from 'react';
import Footer from './components/Footer'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <body >
      <nav className='w-full mt-0 flex h-64 justify-center'>navbar</nav>
      <main className='w-full flex justify-center h-64'>main</main>
     <Footer />
    </body>
  );
}

export default App;
