import React from "react";

function LanguagesSection(props) {
  return (
    <div className="section shading">
      <hr className="separator"/>
      <div className="section-title centered-text">{props.title}</div>
      <div className="languages-container">
          <div className="language shading">

            <div className="flag-container">
              <img className="flag" src={`./images/languages/english.svg`} alt='english' />
            </div>
            
            <div className="language-description">
              <span className="title-languague">{props.langEn}</span>
              <p style={{margin:"0 0 0.5rem"}}>{props.langLvl}</p>
              <a href="https://www.efset.org/cert/ei7dgP" target="_blank" rel="noreferrer" style={{textDecoration:"none", fontWeight: "bold", color:"var(--font-color)"}}>{props.langCred} <i className="fas fa-external-link-alt"></i></a>
            </div>

          </div>
          <div className="language shading">

            <div className="flag-container">
              <img className="flag" src={`./images/languages/spanish.jpg`} alt='spanish' />
            </div>

            <div className="language-description">
              <span className="title-languague">{props.langEs}</span>
              <p style={{margin:"0 0 0.5rem"}}>{props.langEsLvl}</p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default LanguagesSection;