import React from 'react';
const Skill = (props) => {
  return (
    <div className="skill">
      <img className="skill" src={props.img} alt={props.alt} />
      <div class="skill-text">
          <h1>{props.heading}</h1>
          <p>{props.txt}</p>
      </div>
    </div>
  );
}

export default Skill;
