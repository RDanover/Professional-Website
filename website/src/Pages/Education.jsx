import React from 'react';
import Experience from '../Components/Experience';
import ucr_img from '../Images/2560px-UC_Riverside_logo.svg.png';

function Education() {
  return (
    <section id="education">
      <div className="section-heading">
        <p>Education</p>
      </div>

      <div className="experiences">
        <Experience
          title="Computer Science B.S."
          company="University of California - Riverside"
          date="October 2020 - Present"
          img={ucr_img}
          alt="UCR"
          heading="Additional Courses Taken"
          txt="Artificial Intelligence, Computer Architecture, Computer Networks, Computer Security, Databases, Data Analysis, and Web Development"
        />
      </div>
    </section>
  );
}

export default Education;
