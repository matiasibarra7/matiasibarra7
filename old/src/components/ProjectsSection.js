import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsSection(props) {
  return (
    <div className="section shading">
      <hr className="separator"/>
      <div className="section-title centered-text">{props.title}</div>
      <div className="projects-container">
        <ProjectCard 
          pageUrl='https://matiasibarra7.github.io/final-fantasy-heroes/'
          pageImg='ff-heroes.png'
          title='Final Fantasy Heroes'
          description={props.projectDescFF}
        />

        <ProjectCard 
          pageUrl='https://matiasibarra7.github.io/phone-book-firebase/'
          pageImg='book-phone.png'
          title='Book Phone'
          description={props.projectDescBF}
        />

        <ProjectCard 
          pageUrl='https://github.com/matiasibarra7/grupo_12_middo-naito'
          pageImg='middo.png'
          title='Middo Naito E-Commerce'
          description={props.projectDescMN}
        />

        <ProjectCard 
          pageUrl='https://matiasibarra7.github.io/college-correlaties-utn-isi/'
          pageImg='sim-isi.png'
          title={props.projectTitleSA}
          description={props.projectDescSA}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;