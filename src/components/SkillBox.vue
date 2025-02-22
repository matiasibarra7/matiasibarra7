<script setup lang="ts">


  const props = defineProps<{ img: string, desc: string }>()

</script>

<template>
  <div class="skill-box shading">
    <img style="width: 100%;"
      :src="`./images/skills/${props.img}`" 
      :alt="props.desc" 
      :title="props.desc"
    />
  </div>
</template>

<style scoped>
</style>
