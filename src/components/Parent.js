import React, { useState } from "react";
import BioSection from "./BioSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

function Component() {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () => {
    if (darkMode) {
      document.documentElement.style.setProperty('--body-bg-color', '#1C2541')
      document.documentElement.style.setProperty('--main-bg-color', '#AFC0D4')
      document.documentElement.style.setProperty('--section-bg-color', '#D7E0EA')
      document.documentElement.style.setProperty('--card-bg-color', '#BCCBDC')
      document.documentElement.style.setProperty('--font-color', 'black')

      document.documentElement.style.setProperty('--light-icon', '#222830')
      setDarkMode(false)
    } else {
      document.documentElement.style.setProperty('--body-bg-color', '#0B132B')
      document.documentElement.style.setProperty('--main-bg-color', '#182139')
      document.documentElement.style.setProperty('--section-bg-color', '#222830')
      document.documentElement.style.setProperty('--card-bg-color', '#333C48')
      document.documentElement.style.setProperty('--font-color', '#C8CBCF')
      
      document.documentElement.style.setProperty('--light-icon', '#333C48')
      setDarkMode(true)
    }
  }   

  return (
    <main className="transi-color">
        <span className="darkmode-icon" onClick={changeTheme} title="Lights Out!"><i className="far fa-lightbulb"></i></span>
        
        <hr className="separator"/>
        <h1 className="centered-text title">Matías Ibarra</h1>

        <BioSection />

        <SkillsSection />

        <ProjectsSection />

        <ContactSection />
        
        <hr className="separator"/>

    </main>
  );
};

export default Component;