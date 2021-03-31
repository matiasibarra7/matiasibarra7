import React from "react";

function ContactSection() {
  return (
    <div className="section">
      <hr className="separator"/>
      <div className="section-title centered-text">Contacto</div>
      <div className="contact-container">
          <a href="https://github.com/matiasibarra7" target="_blank" rel="noreferrer" title="Github"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/ibarra-nahuel-matias" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin" style={{color: "#0e76a8"}}></i></a>
      </div>
    </div>
  );
};

export default ContactSection;