import React from 'react';

const Experience = (props) => {
  return (
    <div className="experience">
      <div className="experience-details">
        <span className="experience-title">{props.title}</span>
        <span className="experience-company">{props.company}</span>
        <span className="experience-date">{props.date}</span>
      </div>
      <img className="experience-image" src={props.img}alt={props.alt} />
    </div>
  );
}

export default Experience;
