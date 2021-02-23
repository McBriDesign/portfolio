<template>

<div class="placeholder" cols="12">

<b-col v-for="project in projects" :key="project.id" cols="6" md="4">
    <router-link
        :to="{
            name: 'portfolio',
            params: { id: project.id }
            }"
            >
          <b-card
            :title="project.name"
            :sub-title="project.info"
            :img-src="project.image"
            img-alt="this is the project image"
            img-top
            tag="article"
            class="project-tile">

            <b-button class="primary-btn" variant="dark">See More</b-button>
          </b-card>
    </router-link>
</b-col>

</div>
  
</template>

<script>

import json from '@/json/projects.json'

export default {
    data() {
        return {
            projects: json
        }
    }

}
</script>

<style scoped>

    .placeholder{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

</style>

