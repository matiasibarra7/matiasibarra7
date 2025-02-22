<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps<{ bio1: string, bio2: string, bio3: string, title: string }>()

</script>

<template>
  <div class="section bio-section shading">
    <hr class="separator"/>

    <div class="section-title centered-text">{{ props.title }}</div>
    <figure style="margin: 0;"> 
      <img src="/images/mid-mati-light.jpg" alt="Matías ibarra foto" class="shading"/>
      <img src="/images/mid-mati.jpg" alt="Matías ibarra foto" class="shading dark" />
    </figure>

    <div class="content">
      <p>
        {{ props.bio1 }}  <br/><br/>
        {{ props.bio2 }} <a href="https://drive.google.com/file/d/1z9y4GgKCccH3WelB53xbHlc_Cn_fesx-/view?usp=sharing" target="_blank" rel="noreferrer"><i class="fas fa-external-link-alt" style="font-size: 0.9rem"></i></a>.  <br/><br/>
        {{ props.bio3 }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
  .bio-section {
    figure {
      position: relative;
      .dark {
        position: absolute;
        opacity: 0;
        transition: opacity 0.5s ease-out;
      }
    }
    .read-the-docs {
      color: #888;
    }
  }

  .dark-mode .bio-section figure .dark {
    opacity: 1;
  }
</style>
