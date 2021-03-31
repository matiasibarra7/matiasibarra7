import React from "react";

function BioSection() {
  return (
    <div className="section bio-section">
        <hr className="separator"/>

        <div className="section-title centered-text">Perfil Profesional</div>
        <figure style={{margin: "0"}}>
          <div></div>
          <img src="./images/young-mati.jpg" alt="Ibarra"/>
        </figure>
    
        <div className="content">
          <p>Full Stack Developer con especial afinidad al lado Front-end. <br/> <br/>
          Comencé mi formación como estudiante de Ingeniería en Sistemas en UTN y mi primera experiencia en desarrollo fue en el puesto de Front-end Developer durante 6 meses.
          Luego, fui seleccionado y obtuve una beca para el curso de Programación Web Full Stack, dictado por Digital House. <br/> <br/>
          Hoy continúo con el desarrollo de mi formación mediante cursos online y estoy a la búsqueda de oportunidades para poder alcanzar y demostrar la totalidad de mi potencial.</p>
        </div>
    </div>
  );
};

export default BioSection;