<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ title: string, description: string, pageUrl: string, pageImg: string }>()

</script>

<template>
  <div class="card character-card transi-color shading">
    <a :href="props.pageUrl" target="_blank" rel="noreferrer" class="link-unstyle">
      <div class="image-project">
        <img :src="`./images/projects/${props.pageImg}`" :alt="props.title" style="width: 100%" />
      </div>
    

      <div class="description">
        <div class="title-decription centered-text">
          {{ props.title }}
        </div>
        <div class="content">
          {{ props.description }} 
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
