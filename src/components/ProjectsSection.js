import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <div className="section">
      <hr className="separator"/>
      <div className="section-title centered-text">Proyectos</div>
      <div className="projects-container">
        <ProjectCard 
          pageUrl='https://matiasibarra7.github.io/final-fantasy-heroes/'
          pageImg='ff-heroes.png'
          title='Final Fantasy Heroes'
          description='Proyecto realizado con React para prácticar en el consumo de api y hooks de estado y efecto. 
          Permite buscar a un personaje de saga Final Fantasy y ver sobre él.'
        />

        <ProjectCard 
          pageUrl='https://matiasibarra7.github.io/phone-book-firebase/'
          pageImg='book-phone.png'
          title='Book Phone'
          description='Proyecto realizado con React y Firebase para su persistencia. 
          Admite un registro y login de usuario, carga y edición de contactos y modificación de perfil de usuario con actualización de imagen.'
        />

        <ProjectCard 
          pageUrl='https://github.com/matiasibarra7/grupo_12_middo-naito'
          pageImg='middo.png'
          title='Middo Naito E-Commerce'
          description='Projecto grupal realizado como trabajo integrador en el curso FullStack de Digital House. E-commerce realizado en con Node,
          Express, EJS y MySQL.'
        />

        <ProjectCard 
          pageUrl='https://matiasibarra7.github.io/college-correlaties-utn-isi/'
          pageImg='sim-isi.png'
          title='Simulador académico ISI'
          description='Single page en React con carga dinámica de situación académica utilizando el plan de estudio la carrera Ingeniería en Sistemas de Información, UTN-FRRe'
        />
      </div>
    </div>
  );
};

export default ProjectsSection;