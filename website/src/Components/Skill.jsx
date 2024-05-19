import React from 'react';
const Skill = (props) => {
  return (
    <div className="skill">
      <img className="skill" src={props.img} alt={props.alt} id={props.id}/>
      <div class="skill-text">
          <p>{props.txt}</p>
      </div>
    </div>
  );
}

export default Skill;
