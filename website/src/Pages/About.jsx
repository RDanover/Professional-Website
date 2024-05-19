import React from 'react'
import Resume from './Resume.pdf'
import Skill from '../Components/Skill'
import Experience from '../Components/Experience'
import pdf_img from '../Images/pdf-icons-free-icons-in-file-icons-18.png'

function About() {
  return (
    <section id="about">
      <div className="section-heading" id="about-heading">
        <p>About</p>
      </div>

      <div className="about-blurb">
        <span className='about_text'>
            My name is Rachel Danover. I am a 4th year Computer Science Major looking for aerospace opportunities. I am passionate about improving our understanding of the universe by assisting in launching and maintaining our current research satellites.
        </span>
        <div class="about-text">
          <p>TLDR: I love space 🪐</p>
      </div>
      </div>
      <a id='resume-link' href={Resume} target='_blank' rel='noopener noreferrer'>
        <Skill img={pdf_img} alt="pdf icon" txt="Click here to see my resume"/>
      </a>

    </section>
  )
}

export default About
