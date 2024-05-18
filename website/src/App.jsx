import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Interests from './Pages/Interests';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Experiences from './Pages/Experiences';

function App() {
  return (
    <div className="App">
      <div className='background-nav'></div>
      <NavBar></NavBar>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Experiences/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default App;
