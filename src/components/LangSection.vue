<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ title: string, langEn: string, langLvl: string, langEs: string, langEsLvl: string, langCred: string }>()

</script>

<template>
  <div class="section shading">
    <hr class="separator" />
    <div class="section-title centered-text">{{ props.title }}</div>
    <div class="languages-container">
      <div class="language shading">

        <div class="flag-container">
          <img class="flag" :src="`./images/languages/english.svg`" alt='english' />
        </div>

        <div class="language-description">
          <span class="title-languague">{{ props.langEn }}</span>
          <p style="margin: 0 0 0.5rem ">{{ props.langLvl }}</p>
          <a href="https://www.efset.org/cert/TxmHQG"
            style="text-decoration: none; font-weight: bold; color: var(--font-color)" target="_blank" rel="noreferrer">
            {{ props.langCred }} <i class="fas fa-external-link-alt"></i>
          </a>
        </div>

      </div>
      <div class="language shading">

        <div class="flag-container">
          <img class="flag" :src="`./images/languages/spanish.jpg`" alt='spanish' />
        </div>

        <div class="language-description">
          <span class="title-languague">{{ props.langEs }}</span>
          <p style="margin: 0 0 0.5rem">{{ props.langEsLvl }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
