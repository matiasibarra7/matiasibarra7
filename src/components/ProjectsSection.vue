<script setup lang="ts">
import { defineProps } from 'vue'
import ProjectCard from './ProjectCard.vue'

const props = defineProps<{ title: string, projectDescFF: string, projectDescBF: string, projectDescMN: string, projectTitleSA: string, projectDescSA: string, }>()

</script>

<template>
  <div class="section shading">
    <hr class="separator"/>
    <div class="section-title centered-text">{{ props.title }}</div>
    <div class="projects-container">
      <ProjectCard 
        pageUrl='https://matiasibarra7.github.io/final-fantasy-heroes/'
        pageImg='ff-heroes.png'
        title='Final Fantasy Heroes'
        :description="props.projectDescFF"
      />

      <ProjectCard 
        pageUrl='https://matiasibarra7.github.io/phone-book-firebase/'
        pageImg='book-phone.png'
        title='Book Phone'
        :description="props.projectDescBF"
      />

      <ProjectCard 
        pageUrl='https://github.com/matiasibarra7/grupo_12_middo-naito'
        pageImg='middo.png'
        title='Middo Naito E-Commerce'
        :description="props.projectDescMN"
      />

      <ProjectCard 
        pageUrl='https://matiasibarra7.github.io/college-correlaties-utn-isi/'
        pageImg='sim-isi.png'
        :title="props.projectTitleSA"
        :description="props.projectDescSA"
      />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
