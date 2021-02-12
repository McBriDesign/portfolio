<template>

        <b-col cols="6" md="4">
          <b-card
            :title="name"
            :sub-title="info"
            :img-src="image"
            img-alt="this is the project image"
            img-top
            tag="article"
            class="project-tile">

            <b-button class="primary-btn" variant="dark">See More</b-button>
          </b-card>
        </b-col>

</template>

<script>
    export default {
        props:["name","image","info"],
    }
</script>

<style scoped>
.project-tile[data-v-4b3f916e]{margin-bottom:10%;border-radius:0;font-family:'Open Sans',sans-serif;border:none}
.project-tile img[data-v-4b3f916e]{height:21.5rem;border-radius:0}
</style>