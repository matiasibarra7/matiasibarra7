import React from "react";

function SkillBox(props) {
  return (
    <div className="skill-box shading">
      <img style={{width:"100%"}} 
        src={`./images/skills/${props.img}`} 
        alt={props.desc} 
        title={props.desc} />
    </div>
  );
};

export default SkillBox;