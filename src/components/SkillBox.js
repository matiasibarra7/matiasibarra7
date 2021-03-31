import React from "react";

function SkillBox(props) {
  return (
    <div className="skill-box">
      <img style={{width:"100%"}} 
        src={`./matiasibarra7/images/skills/${props.img}`} 
        alt={props.desc} 
        title={props.desc} />
    </div>
  );
};

export default SkillBox;