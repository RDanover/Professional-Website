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
    </section>
  )
}

export default Skills
