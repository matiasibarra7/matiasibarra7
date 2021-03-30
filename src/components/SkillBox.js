import React from "react";

function SkillBox(props) {
  return (
    <div className="skill-box">
      <img style={{width:"100%"}} src={`./images/${props.img}`} alt={props.desc}/>
    </div>
  );
};

export default SkillBox;