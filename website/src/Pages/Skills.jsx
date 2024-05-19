import React from 'react'
import Skill from '../Components/Skill';
import python_img from '../Images/267_Python-512.webp';
import c_img from '../Images/c_original_logo_icon_146611.png'
import cpp_img from '../Images/ISO_C++_Logo.svg.png'
import java_img from '../Images/java-4-logo.svg'
import cs_img from '../Images/c-sharp-c-icon-1822x2048-wuf3ijab.png'
import java_script_img from '../Images/javascript-js-icon-2048x2048-nyxvtvk0.png'
function Skills() {
  return (
    <section id = "skills">
      <div className="section-heading">
        <p>Skills</p>
      </div>

      <div className="skills">
        <div className="skill-row">
        <Skill img={cpp_img} alt="c++" txt="5 years of experience"/>
        <Skill img={python_img} alt="python" txt="2 years of experience"/>
        <Skill img={java_script_img} alt="Java Script" txt="1 year of experience"/>
        </div>
        <div className="skill-row">
        <Skill img={c_img} alt="C" txt="1 year of experience"/>
        <Skill img={java_img} alt="Java" txt="1 year of experience"/>
        <Skill img={cs_img} alt="c#" txt=".5 year of experience"/>
        </div>
      </div>
    </section>
  )
}

export default Skills
