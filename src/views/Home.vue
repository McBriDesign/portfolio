<template>
  <b-container class="placeholder">
    <b-row>
      <b-col cols="12" md="4">
        <b-img src="@/assets/bio-img.png"></b-img>
      </b-col>
      <b-col id="bio" cols="12" md="8">
        <h1 class="title">Hi, I'm Kieran</h1>
        <p class="bio-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis est incidunt ad quia dolore corporis at? Aut laborum, omnis laudantium inventore possimus numquam soluta recusandae maxime tempore dolorum? Possimus, blanditiis?</p>

        <b-button variant="dark">Check out my work</b-button>

        <h3 class="quote"><span class="marks">"</span>Code should be read more than it is written.<span class="marks">"</span></h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.placeholder{padding: 0; text-align: left;}
img {display: block; margin: 0 auto;}
#bio {max-width: 60%;padding:  2% 10%;}
.title, .quote {font-family: 'Abril Fatface', cursive; font-size: 4rem;}
.quote {color:#dbdbdb; padding-top: 8%;}
</style>