<script setup lang="ts">
import { defineProps } from 'vue'
import SkillBox from './SkillBox.vue';

const props = defineProps<{ 
  titleLang: string, 
  titleSkills: string, 
  langEn: string, 
  langLvl: string, 
  langEs: string, 
  langEsLvl: string, 
  langCred: string 
}>()

</script>

<template>
  <div>

    <div class="section shading">
      <hr class="separator"/>
      <div class="section-title centered-text">{{ props.titleSkills }}</div>
      <div class="skills-container">
        <SkillBox img='html.png' desc='HTML'/>
        <SkillBox img='css.png' desc='CSS'/>
        <SkillBox img='js.png' desc='Javascript'/>
        <SkillBox img='vue.png' desc='VueJs'/>
        <SkillBox img='react.jpg' desc='ReactJs'/>
        <SkillBox img='node.png' desc='NodeJs'/>
        <SkillBox img='mysql.png' desc='MySQL'/>
      </div>
    </div>

    <div class="section shading">

      <hr class="separator" />
      <div class="section-title centered-text">{{ props.titleLang }}</div>

      <div class="languages-container">
        <div class="language shading">

          <span class="custom-lang-icon">EN</span>

          <div class="language-description">
            <span class="title-languague">{{ props.langEn }}</span>
            <p style="margin: 0 ">
              {{ props.langLvl }}
              <a 
                href="https://www.efset.org/cert/TxmHQG" 
                class="shiny"
                style="text-decoration: none;;" target="_blank" rel="noreferrer"
              >
                {{ props.langCred }} <i class="fas fa-external-link-alt"></i>
              </a>
            </p>
          </div>

        </div>
        <div class="language shading">

          <span class="custom-lang-icon">ES</span>

          <div class="language-description">
            <span class="title-languague">{{ props.langEs }}</span>
            <p style="margin: 0">{{ props.langEsLvl }}</p>
          </div>

        </div>
      </div>
    </div>




  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.custom-lang-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  padding: 6px;
  margin: auto 0;

  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  border-radius: 6px;
  box-shadow: 1px 1px 1px #858585;
  background: linear-gradient(0deg, #4e608e, #bdc8e0);
  /* border: 2px solid #455886; */
}

.languages-container {
  display: flex;
  flex-wrap: wrap;
}

.language {
  display: flex;
  width: 100%;
  margin: 1rem auto;
  min-height: auto;
  padding: 1rem;

  border-radius: 5px;
  background-color: var(--card-bg-color);
}

.language-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: 0 1rem;
}

.title-languague {
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.1rem;
}

@media (min-width: 768px) {
  .language {
    width: calc(50% - 2rem);
    margin: 1rem auto;
  }

  /* .custom-lang-icon {
    font-size: 2rem;
    height: 4rem;
    width: 4rem;
  } */
}

</style>
