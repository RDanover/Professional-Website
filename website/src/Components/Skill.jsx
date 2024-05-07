import React from 'react';
const Skill = (props) => {
  return (
    <div className="skill">
      <img className="skill" src={props.img} alt={props.alt} />
    </div>
  );
}

export default Skill;
