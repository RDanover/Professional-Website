import React from 'react'
import Resume from './Resume.pdf'

function About() {
  return (
    <section id="about">
      <div className="section-heading" id="about-heading">
        <p>About</p>
      </div>

      <p className="about-blurb">My name is Rachel Danover. I am a 4th year Computer Science Major looking for aerospace opportunities. I am passionate about improving our understanding of the universe by assisting in launching and maintaining our current research satellites.</p>
      <a id='resume-link' href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>

    </section>
  )
}

export default About
