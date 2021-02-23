<template>
  <div>
    <div cols="12" v-for="project in getData($route.params.id)" :key="project.id">
      <h3> {{ project.name }} </h3>
      <div>
        <img :src="project.image" />
     </div>
    </div>
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