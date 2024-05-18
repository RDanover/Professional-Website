import React from 'react'
import ga_img from '../Images/General_Atomics_Aeronautical_Systems,_Inc.png'
import Experience from '../Components/Experience';
function Experiences() {
  return (
    <section id="experiences-projects">
      <div className="section-heading">
        <p>Experience/Projects</p>
      </div>

      <div className="experiences">
        <Experience title="Flight Critical Software Engineer Intern" company="General Atomics - Aeronautical" date="June 2023 - August 2023" img={ga_img} alt="general atomics aeronautical logos" />
      </div>
    </section>
  )
}

export default Experiences
