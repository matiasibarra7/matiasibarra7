import React from "react";
import BioSection from "./BioSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

function Component() {
  return (
    <main>
        <hr style={{border:"0"}}/>
        <h1 className="centered-text title">Matías Ibarra</h1>

        <BioSection />

        <SkillsSection />

        <ProjectsSection />
        
    </main>
  );
};

export default Component;