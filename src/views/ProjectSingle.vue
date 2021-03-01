<template>
  <div>
    <b-container v-for="project in getData($route.params.id)" :key="project.id">

    <div class="project-head" cols="12">
        <img :src="project.header" />
     </div>

    <b-col id="project-details">
        <b-row no-gutters>
            <b-col lg>
                <h3 class="title">{{ project.name }}</h3>
                <h3 class="sub-title">{{ project.type }}</h3>
                <h4 class="skills"> {{ project.skills }} </h4>
            </b-col>
            <b-col md>
                <p class="details">{{ project.info }}</p>
            </b-col>
        </b-row>
    </b-col>
      
      

                 <b-button to="/portfolio" class="primary-btn" variant="dark">Back To All Projects</b-button>

      
      
    </b-container>
  </div>
</template>

<script>
import json from '@/json/projects.json'

export default {
  data() {
    return {
      projects: json
    }
  },
  methods: {
    getData(id) {
      let data = this.projects
      return data.filter(item => {
        return item.id == id
    })
    }
  }
}
</script>

<style scoped>
#project-details{display: flex; text-align: left;margin: 5% auto;}
.details{margin-top: 5%;}
.container{padding: 0;}
img {max-width: 100%;}
</style>