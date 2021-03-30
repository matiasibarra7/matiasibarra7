import React from "react";

function ProjectCard(props) {
  return (
      <div className="card character-card">
        <a href={props.pageUrl} target="_blank" rel="noreferrer">
          <div className="image-project">
            <img src={`/images/${props.pageImg}`} alt={props.title} style={{ width:"100%" }}/>
          </div>
        </a>

        <div className="description">
          <div className="title-decription centered-text">
            {props.title}
          </div>
          <div className="content">
            {props.description} 
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;