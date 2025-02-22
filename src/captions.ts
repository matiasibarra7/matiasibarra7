interface Captions {
  spa: {
    bioTitle: string;
    bio1: string;
    bio2: string;
    bio3: string;
    skillsTitle: string;
    langTitle: string;
    langEnTitle: string;
    langLvl: string;
    langCred: string;
    langEsTitle: string;
    langEsLvl: string;
    projectsTitle: string;
    projectDescFF: string;
    projectDescBF: string;
    projectDescMN: string;
    projectTitleSA: string;
    projectDescSA: string;
    contactTitle: string;
  };
  eng: {
    bioTitle: string;
    bio1: string;
    bio2: string;
    bio3: string;
    skillsTitle: string;
    langTitle: string;
    langEnTitle: string;
    langLvl: string;
    langCred: string;
    langEsTitle: string;
    langEsLvl: string;
    projectsTitle: string;
    projectDescFF: string;
    projectDescBF: string;
    projectDescMN: string;
    projectTitleSA: string;
    projectDescSA: string;
    contactTitle: string;
  };
}


const captions: Captions = {
  spa: {
    bioTitle: "Perfil Profesional",
    bio1: "Front-end Developer con conocimientos de Back-end en NodeJs.",
    bio2: "Comencé mi formación profesional como estudiante de Ingeniería en Sistemas de Información en la UTN y mi primera experiencia en desarrollo web fue en el puesto de Front-end Developer durante 6 meses. Luego, fui seleccionado y obtuve una beca para el curso de Programación Web Full Stack, dictado por Digital House",
    bio3: "Hoy continúo con el desarrollo de mi formación mediante cursos online y estoy a la búsqueda de oportunidades para poder alcanzar y demostrar la totalidad de mi potencial.",
  
    skillsTitle: "Habilidades",
  
    langTitle: "Idiomas",
    langEnTitle: "Inglés",
    langLvl: "Nivel (CEFR) - C1 Advanced",
    langCred: "Ver credencial",
  
    langEsTitle: "Español",
    langEsLvl: "Nivel - Nativo",
    
    projectsTitle: "Proyectos",
    projectDescFF: "Proyecto realizado con React para prácticar en el consumo de API y hooks de estado y efecto. Permite buscar a un personaje de saga Final Fantasy y ver sobre él",
    projectDescBF: "Proyecto realizado con React y Firebase para su persistencia. Admite un registro y login de usuario, carga y edición de contactos y modificación de perfil de usuario incluyendo actualización de imagen.",
    projectDescMN: "Proyecto grupal realizado como trabajo integrador en el curso FullStack de Digital House. E-commerce realizado en con Node, Express, EJS y MySQL.",
    projectTitleSA: "Simulador académico ISI",
    projectDescSA: "Single page en React con carga dinámica de situación académica utilizando el plan de estudio la carrera Ingeniería en Sistemas de Información, UTN-FRRe",
  
    contactTitle: "Contacto"
  },

  eng: {
    bioTitle: "Professional profile",
    bio1: "Front-end Developer with knowledge of Back-end with NodeJs.",
    bio2: "I started my professional formation as an Information Systems Engineering student at UTN and my first job experience in web development was in the front-end developer position for 6 months. Later, I was selected and obtained a scholarship for the Full Stack Web Programming course, dictated by Digital House",
    bio3: "Today I continue with the development of my training through online courses and I am looking for opportunities to reach and show all my potential.",
  
    skillsTitle: "Skills",
  
    langTitle: "Languages",
    langEnTitle: "English",
    langLvl: "Level (CEFR) - C1 Advanced",
    langCred: "See credential",
  
    langEsTitle: "Spanish",
    langEsLvl: "Level - Native",
    
    projectsTitle: "Projects",
    projectDescFF: "Project made with React to practice in the use of API and state and effect hooks. Allows you search for a character from the Final Fantasy saga and see info about him.",
    projectDescBF: "Project made with React and Firebase for its persistence. Supports user registration and login, contact upload and editing, and user profile modification including image update.",
    projectDescMN: "Group project done as integrative work in the Full Stack course at Digital House. E-commerce made with Node, Express, EJS and MySQL.",
    projectTitleSA: "ISI academic simulator",
    projectDescSA: "Single page in React with dynamic load of academic situation using the study plan of the Information Systems Engineering degree, UTN-FRRe",
  
    contactTitle: "Contact"
  }
}

export {
  captions
};