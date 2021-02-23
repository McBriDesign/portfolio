<template>
  <div id="portfolio-container">

    <b-container>
      <b-row align-v="center">
       
        <ProjectCollection/>

      </b-row>
    </b-container>

  </div>
</template>


<script>

  import ProjectCollection from '../components/ProjectCollection.vue';

  export default {
    name: "portfolio",
    components: { ProjectCollection },
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

