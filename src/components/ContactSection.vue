<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ title: string }>()

</script>

<template>
  <div class="section shading">
    <hr class="separator"/>
    <div class="section-title centered-text">{{ props.title }}</div>
    <div class="contact-container">
      <a href="https://drive.google.com/file/d/1Dk_bFqoBb_uz-i42vTEE4jjDsLfTXpBY/view?usp=sharing" target="_blank" rel="noreferrer" title="CV" class="link-unstyle cv-container">
        <i class="far fa-file"></i>
      </a>
      <a href="https://github.com/matiasibarra7" target="_blank" rel="noreferrer" title="Github"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/ibarra-nahuel-matias" target="_blank" rel="noreferrer" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
