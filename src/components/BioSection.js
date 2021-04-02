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
            {props.bio2}  <br/><br/>
            {props.bio3}
          </p>
        </div>
    </div>
  );
};

export default BioSection;