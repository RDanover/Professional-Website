import React from 'react'
import default_img from '../Images/default-placeholder-2.png';
import Skill from '../Components/Skill';

function Interests() {
  return (
    <section id="interests">
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
    </section>
  )
}

export default Interests
