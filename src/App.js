import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Technologies from './components/technologies/Technologies'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home />
      <About />
      <Technologies />
      <Contact />
    </main>
    </>
  
  );
}

export default App;
