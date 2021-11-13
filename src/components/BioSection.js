import React from "react";

function BioSection(props) {
  return (
    <div className="section bio-section shading">
        <hr className="separator"/>

        <div className="section-title centered-text">{props.title}</div>
        <figure style={{margin: "0"}}>
          <div></div>
          <img src="./images/young-mati.jpg" alt="Ibarra" className="shading"/>
        </figure>
    
        <div className="content">
          <p>
            {props.bio1}  <br/><br/>
            {props.bio2} <a href="https://drive.google.com/file/d/1z9y4GgKCccH3WelB53xbHlc_Cn_fesx-/view?usp=sharing" target="_blank"><i className="fas fa-external-link-alt" style={{ fontSize: '0.9rem' }}></i></a>.  <br/><br/>
            {props.bio3}
          </p>
        </div>
    </div>
  );
};

export default BioSection;