import React from 'react';
import './App.css';
import Experience from './Components/Experience';
import Skill from './Components/Skill';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import default_img from './Images/default-placeholder-2.png';
import python_img from './Images/267_Python-512.webp';
import c_img from './Images/c_original_logo_icon_146611.png'
import cpp_img from './Images/ISO_C++_Logo.svg.png'
import java_img from './Images/java-4-logo.svg'
import cs_img from './Images/c-sharp-c-icon-1822x2048-wuf3ijab.png'
import ucr_img from './Images/2560px-UC_Riverside_logo.svg.png'
import java_script_img from './Images/javascript-js-icon-2048x2048-nyxvtvk0.png'
import ga_img from './Images/General_Atomics_Aeronautical_Systems,_Inc.png'
function App() {
  return (
    <div className="App">
        <div className="hero-section">
        <span className="hero-text-large">Rachel Danover</span>
        <span className="hero-text-small">Aerospace Software Developer</span>
      </div>

      <div className="section-heading">
        <p>About</p>
      </div>

      <p className="about-blurb">My name is Rachel Danover. I am a 4th year Computer Science Major looking for aerospace opportunities. Here is my Resume</p>

      <div className="section-heading">
        <p>Education</p>
      </div>

      <div className="experiences">
        <Experience title="Computer Science B.S." company = "University of California - Riverside"date="October 2020 - Present" img={ucr_img} alt="UCR"/>
      </div>

      <div className="section-heading">
        <p>Skills</p>
      </div>

      <div className="skills">
        <div className="skill-row">
        <Skill img={cpp_img}/>
        <Skill img={python_img}/>
        <Skill img={java_script_img}/>
        </div>
        <div className="skill-row">
        <Skill img={cs_img}/>
        <Skill img={java_img}/>
        <Skill img={c_img}/>
        </div>
      </div>

      <div className="section-heading">
        <p>Experience/Projects</p>
      </div>

      <div className="experiences">
        <Experience title="Flight Critical Software Engineer Intern" company="General Atomics - Aeronautical" date="June 2023 - August 2023" img={ga_img} alt="general atomics aeronautical logos" />
      </div>

      <div className="section-heading">
        <p>Interests</p>
      </div>

      <div className="skills">
        <div className="skill-row">
        <Skill img={default_img}/>
        <Skill img={default_img}/>
        <Skill img={default_img}/>
        </div>
        <div className="skill-row">
        <Skill img={default_img}/>
        <Skill img={default_img}/>
        <Skill img={default_img}/>
        </div>
      </div>

    </div>
  );
}

export default App;
