<template>
  <div class="transi-color" :class="{ 'dark-mode' : darkMode }">

    <span @click="changeLanguage()" class="float-button change-lang-icon shading"><i class="fas fa-language"></i></span>

    <span @click="changeColors()" :title="darkMode? 'Lights on!' : 'Lights out'!"  class="float-button darkmode-icon shading"><i class="far fa-lightbulb"></i></span>

    <hr class="separator"/>
    <h1 class="centered-text title">Matías Nahuel Ibarra</h1>

    <BioSection
      :title="t('bioTitle')"
      :bio1="t('bio1')"
      :bio2="t('bio2')"
      :bio3="t('bio3')"
    />

    <SkillsSection
      :title="t('skillsTitle')" 
    />

    <LangSection 
      :title="t('langTitle')"
      :langEn="t('langEnTitle')"
      :langLvl="t('langLvl')"
      :langCred="t('langCred')"
      :langEs="t('langEsTitle')"
      :langEsLvl="t('langEsLvl')"
    />

    <ProjectsSection
      :title="t('projectsTitle')"
      :projectDescFF="t('projectDescFF')"
      :projectDescBF="t('projectDescBF')"
      :projectDescMN="t('projectDescMN')"
      :projectTitleSA="t('projectTitleSA')"
      :projectDescSA="t('projectDescSA')"
    />

    <ContactSection 
      :title="t('contactTitle')"
    />


  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import BioSection from './components/BioSection.vue';
  import SkillsSection from './components/SkillsSection.vue';
  import LangSection from './components/LangSection.vue';
  import ProjectsSection from './components/ProjectsSection.vue';
  import ContactSection from './components/ContactSection.vue';
  import { useTranslation } from "i18next-vue";
  const { t, i18next } = useTranslation();


  const darkMode = ref(false)

  const currentLang = ref('es')

  const changeLanguage = () => {
    if (currentLang.value === 'eng') {
      i18next.changeLanguage('es')
      .then((t) => {
        t('key'); // -> same as i18next.t
        currentLang.value = "spa"
      });
    } else {
      i18next.changeLanguage('en')
      .then((t) => {
        t('key'); // -> same as i18next.t
        currentLang.value = "eng"
      });
    }
  }

  const changeColors = () => {
    darkMode.value = !darkMode.value

    if (!darkMode.value) {
      document.documentElement.style.setProperty('--body-bg-color', '#fff')
      document.documentElement.style.setProperty('--main-bg-color', '#AFC0D4')
      document.documentElement.style.setProperty('--section-bg-color', '#D7E0EA')
      document.documentElement.style.setProperty('--card-bg-color', '#BCCBDC')
      document.documentElement.style.setProperty('--font-color', 'black')

      document.documentElement.style.setProperty('--light-icon', '#222830')
    } else {
      document.documentElement.style.setProperty('--body-bg-color', '#242424')

      document.documentElement.style.setProperty('--main-bg-color', '#202020')
      document.documentElement.style.setProperty('--section-bg-color', '#313236')

      document.documentElement.style.setProperty('--card-bg-color', '#44454B')
      document.documentElement.style.setProperty('--font-color', '#C8CBCF')
      
      document.documentElement.style.setProperty('--light-icon', '#333C48')

    }
  }

 

  onMounted(() => {
  })

</script>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
