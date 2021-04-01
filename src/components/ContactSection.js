import React from "react";

function ContactSection() {
  return (
    <div className="section">
      <hr className="separator"/>
      <div className="section-title centered-text">Contacto</div>
      <div className="contact-container">
          <a href="https://drive.google.com/file/d/1JL-RWqG253OW_JknypJ5iZdIvTUrymZk/view?usp=sharing" target="_blank" rel="noreferrer" title="LinkedIn" className="link-unstyle cv-container">
            <i className="far fa-file"></i>
          </a>
          <a href="https://github.com/matiasibarra7" target="_blank" rel="noreferrer" title="Github"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/ibarra-nahuel-matias" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default ContactSection;