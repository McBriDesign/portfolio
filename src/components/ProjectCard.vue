<template>

        <b-col cols="12" md="4">
          <b-card
            :title="name"
            img-src="https://picsum.photos/600/300/?image=2"
            img-alt="this is the project image"
            img-top
            tag="article"
            style=""
            class="mb-2">
            <b-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus itaque cumque est ab corporis sit ut libero numquam cupiditate omnis nemo enim, mollitia nostrum suscipit quod atque sunt dolorum repudiandae.
            </b-card-text>
            <b-button variant="dark">See More</b-button>
          </b-card>
        </b-col>

</template>

<script>
    export default {
        props:["name"]
    }
    
</script>

<style lang="scss" scoped>

</style>