import React from "react";

function LanguagesSection() {
  return (
    <div className="section">
      <hr className="separator"/>
      <div className="section-title centered-text">Idiomas</div>
      <div className="languages-container">
          <div className="language">

            <div className="flag-container">
              <img className="flag" src={`./images/languages/english.svg`} alt='english' />
            </div>
            
            <div className="language-description">
              <span className="title-languague">English</span>
              <p style={{margin:"0 0 0.5rem"}}>Level (CEFR) - B1 Intermediate</p>
              <a href="https://www.efset.org/cert/ei7dgP" target="_blank" rel="noreferrer" style={{textDecoration:"none", fontWeight: "bold", color:"var(--font-color)"}}>Ver credencial <i className="fas fa-external-link-alt"></i></a>
            </div>

          </div>
          <div className="language">

            <div className="flag-container">
              <img className="flag" src={`./matiasibarra7/images/languages/spanish.jpg`} alt='spanish' />
            </div>

            <div className="language-description">
              <span className="title-languague">Español</span>
              <p style={{margin:"0 0 0.5rem"}}>Nivel - Nativo</p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default LanguagesSection;