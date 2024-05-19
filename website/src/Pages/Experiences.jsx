import React from 'react'
import ga_img from '../Images/General_Atomics_Aeronautical_Systems,_Inc.png'
import Experience from '../Components/Experience';
import arduino_img from '../Images/273416955-df9376ad-d448-497e-b7e5-177413322f4e.png'

function Experiences() {
  return (
    <section id="experiences-projects">
      <div className="section-heading">
        <p>Experience/Projects</p>
      </div>

      <div className="experiences">
        <Experience title="Flight Critical Software Engineer Intern" company="General Atomics - Aeronautical" date="June 2023 - August 2023" img={ga_img} alt="general atomics aeronautical logos" heading = "Responsibilities" txt="Navigated a 10,000+ line code base consisting of C, C++, and JavaScript. Worked with a team of 12 engineers on a software release and participated in code peer reviews. Created a Python script to automate data decoding. Audited safety alerts for a test and presented findings." />
        
        <Experience title="2048 for Arduino" company="University Of California - Riverside" date="May 2022 - June 2022" img = {arduino_img} alt="wiring diagram" heading="Details" txt=" Recreated 2048 game using C++ and an Elegoo Uno R3 microcontroller. Designed and implemented an original random function to generate tile placement. Implemented system to determine when the game had been won or lost. Created a system to activate individual pixels on a display."/>
        

      </div>
    </section>
  )
}

export default Experiences
