import React from "react";

function BioSection() {
  return (
    <div className="section">
        <div className="section-title centered-text">Full Stack Developer</div>
        <div className="profile-pic-container">
          <img src="/images/mati.jpg" alt="" style={{width:"100%"}}/>
        </div>
        <div>
          <p>¡Hola! Soy Full Stack Developer con especial afinidad al lado Front-end.</p>

          <p>Comencé mi formación como estudiante de Ingeniería en Sistemas en UTN y mi primera experiencia en desarrollo fue en el puesto de Front-end Developer en Optiagro.
          Fui seleccionado y obtuve una beca para el curso de Programación Web Full Stack, dictado por Digital House.</p>

          <p>Continúo con el desarrollo de mi formación mediante cursos online y estoy a la búsqueda de oportunidades para poder alcanzar mi máximo potencial.</p>
        </div>
    </div>
  );
};

export default BioSection;