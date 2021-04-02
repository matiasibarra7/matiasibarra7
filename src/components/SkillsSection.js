import React from "react";
import SkillBox from './SkillBox'

function SkillsSection(props) {
  return (
    <div className="section">
      <hr className="separator"/>
      <div className="section-title centered-text">{props.title}</div>
      <div className="skills-container">
        <SkillBox img='html.png' desc='HTML'/>
        <SkillBox img='css.png' desc='CSS'/>
        <SkillBox img='js.png' desc='Javascript'/>
        <SkillBox img='react.jpg' desc='ReactJs'/>
        <SkillBox img='node.png' desc='NodeJs'/>
        <SkillBox img='mysql.png' desc='MySQL'/>
      </div>
    </div>
  );
};

export default SkillsSection;