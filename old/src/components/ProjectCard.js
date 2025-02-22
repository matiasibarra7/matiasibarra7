import React from "react";

function ProjectCard(props) {
  return (
      <div className="card character-card transi-color shading">
        <a href={props.pageUrl} target="_blank" rel="noreferrer" className="link-unstyle">
          <div className="image-project">
            <img src={`./images/projects/${props.pageImg}`} alt={props.title} style={{ width:"100%" }}/>
          </div>
        

          <div className="description">
            <div className="title-decription centered-text">
              {props.title}
            </div>
            <div className="content">
              {props.description} 
            </div>
          </div>
        </a>
      </div>
  );
};

export default ProjectCard;