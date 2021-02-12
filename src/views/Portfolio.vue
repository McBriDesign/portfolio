<template>
  <div id="portfolio-container">

    <b-container>
      <b-row align-v="center">
       
        <project-card v-for="project in projectList" :key="project.ID" :image="project.image" :name="project.name" :info="project.info"></project-card>
        
      </b-row>
    </b-container>

  </div>
</template>


<script>

  import ProjectCard from '../components/ProjectCard.vue'

  export default {
    name: "portfolio",
    components: { "project-card": ProjectCard },
    mounted(){
      this.fetchData();
    },
    data(){
      return{
        projectList: []
      }
    },
    methods:{
      async  fetchData(){
        const res = await fetch("projects.json");
        const projects = await res.json();
        this.projectList = projects;
      }
    }
  };

</script>

