<template>
  <div class="placeholder" cols="12">
    <b-col
      v-b-hover="handleHover"
      v-for="project in projects"
      :key="project.id"
      class="project-tile"
      fluid="sm"
      sm="6"
      md="4"
    >
      <router-link
        :to="{
          name: 'portfolio',
          params: { id: project.id }
        }"
      >
        <b-card
          v-if="isHovered"
          overlay
          :title="project.name"
          :sub-title="project.type"
          :img-src="project.tile"
          img-alt="this is the project image"
          img-top
          tag="article"
          class="project-tile hover"
        >
        </b-card>

        <b-card
          v-else
          overlay
          :img-src="project.tile"
          img-alt="this is the project image"
          img-top
          tag="article"
          class="project-tile"
        >
        </b-card>
      </router-link>
    </b-col>
  </div>
</template>

<script>
import json from "@/json/projects.json";

export default {
  data() {
    return {
      projects: json,
      isHovered: false
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    }
  }
};
</script>

<style scoped>
.card-title,
.card-subtitle {
  color: #ffffff !important;
  font-weight: mormal !important;
  opacity: 1 !important;
}
.card-img-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  vertical-align: center;
  background-color: #2c3e50;
  opacity: 0;
}
.card-img-overlay:hover {
  opacity: 0.85;
}
.placeholder {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.project-tile {
  margin-bottom: 2.5%;
}
.primary-btn {
  margin-top: 3.5%;
  margin-bottom: 3%;
}
</style>
