<template>
  <div id="portfolio-container">

    <b-container>
      <b-row align-v="center">
       
        <project-card></project-card>
        
      </b-row>
    </b-container>

  </div>
</template>


<script>

  import ProjectCard from '../components/ProjectCard.vue'

  export default {
    name: "portfolio",
    components: { "project-card": ProjectCard }
  };
</script>

<style lang="scss" scoped>

</style>
