import React from 'react'
import Experience from '../Components/Experience';
import ucr_img from '../Images/2560px-UC_Riverside_logo.svg.png'

function Education() {
  return (
    <section id = "education">
      <div className="section-heading">
        <p>Education</p>
      </div>

      <div className="experiences">
        <Experience title="Computer Science B.S." company = "University of California - Riverside"date="October 2020 - Present" img={ucr_img} alt="UCR"/>
      </div>
    </section>
  )
}

export default Education
