<script setup lang="ts">
  import SkillBox from './SkillBox.vue';


  const props = defineProps<{ title: string }>()

</script>

<template>
  <div class="section shading">
    <hr class="separator"/>
    <div class="section-title centered-text">{{ props.title }}</div>
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
</template>

<style scoped>
</style>
