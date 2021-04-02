import React, { useState, useEffect } from "react";
import BioSection from "./BioSection";
import ContactSection from "./ContactSection";
import LangSection from "./LangSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import script from "../script"

/* languages option */
import i18next from 'i18next'
import captions from '../captions'

function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentLang, setCurrentLang] = useState('spa')
  const [loadingLang, setLoadingLang] = useState(true)

  const changeLanguage = () => {
    if (currentLang === 'eng') {
      i18next.changeLanguage('es')
      .then((t) => {
        t('key'); // -> same as i18next.t
        setCurrentLang("spa")
      });
    } else {
      i18next.changeLanguage('en')
      .then((t) => {
        t('key'); // -> same as i18next.t
        setCurrentLang("eng")
      });
    }
  }

  const initI18next = () => {
    i18next.init({
      lng: 'es',
      debug: true,
      resources: {
        es: {
          translation: captions.spa
        },
        en: {
          translation: captions.eng
        }
      }
    }).then(function(t) {
      /* console.log("cargó con éxito, nae"); */
      setLoadingLang(false)
    });
  }

  useEffect(() => {
    if (loadingLang) {
      initI18next()
    }
  }, [loadingLang])

  


  const changeTheme = () => {
    
    setDarkMode(script.changeColors(darkMode))
    
  }   

  return (
    <main className="transi-color">

        <span className="float-button change-lang-icon shading" onClick={changeLanguage} title={currentLang==="spa"? "Cambiar idioma" : "Change language"}><i className="fas fa-language"></i></span>

        <span className="float-button darkmode-icon shading" onClick={changeTheme} title={darkMode? "Lights on!" : "Lights out!"}><i className="far fa-lightbulb"></i></span>
        
        <hr className="separator"/>
        <h1 className="centered-text title">Matías Ibarra</h1>

        <BioSection title={i18next.t('bioTitle')} bio1={i18next.t('bio1')} bio2={i18next.t('bio2')} bio3={i18next.t('bio3')} />

        <SkillsSection title={i18next.t('skillsTitle')} />

        <LangSection title={i18next.t('langTitle')} langEn={i18next.t('langEnTitle')} langLvl={i18next.t('langLvl')} langCred={i18next.t('langCred')} 
          langEs={i18next.t('langEsTitle')} langEsLvl={i18next.t('langEsLvl')} />

        <ProjectsSection title={i18next.t('projectsTitle')} projectDescFF={i18next.t('projectDescFF')} projectDescBF={i18next.t('projectDescBF')}  
          projectDescMN={i18next.t('projectDescMN')} projectTitleSA={i18next.t('projectTitleSA')} projectDescSA={i18next.t('projectDescSA')}/>

        <ContactSection title={i18next.t('contactTitle')} />
        
        <hr className="separator"/>

    </main>
  );
};

export default Component;