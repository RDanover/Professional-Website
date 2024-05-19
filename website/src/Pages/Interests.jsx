import React from 'react'
import bike from '../Images/Bike_icon(white).png'
import gaming from '../Images/Gaming-PNG-HD-Image.png'
import music from '../Images/music-note-2-xxl.png'
import Skill from '../Components/Skill';

function Interests() {
  return (
    <section id="interests">
       <div className="section-heading">
        <p>Interests</p>
      </div>

      <div className="skills">
        <div className="skill-row">
        <Skill img={bike} alt="biking" txt="I love biking along the beach"/>
        <Skill img={music} alt= "music" txt="I listen to music any chance I get"/>
        <Skill img={gaming} alt="gaming" txt="I enjoy playing games like Stardew Valley"/>
        </div>
      </div>
    </section>
  )
}

export default Interests
