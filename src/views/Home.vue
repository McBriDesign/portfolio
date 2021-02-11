<template>
  <b-container class="placeholder">
    <b-row>
      <b-col cols="12" md="4">
        <b-img src="@/assets/bio-img.png"></b-img>
      </b-col>
      <b-col id="bio" cols="12" sm="12" md="8">
        <h1 class="title">Hi, I'm Kieran</h1>
        <p class="bio-text">An intuitive-natured developer, passionate about delivering the best products with a balance of usability and aesthetic. A university education in front and back end web technologies has been further developed through 6 years industry experience, managing projects for established brands and experimenting cutting edge technologies.</p>

        <b-button to="/portfolio" variant="dark">Check out my work</b-button>

        <h3 class="quote"><span class="marks">"</span>Code should be read more than it is written.<span class="marks">"</span></h3>
      </b-col>
    </b-row>
    <b-row id="skills" align-v="center">
      <div class="skill-item">&nbsp;</div>
      <div class="skill-item">&nbsp;</div>
      <div class="skill-item">&nbsp;</div>
      <div class="skill-item">&nbsp;</div>
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
#bio {padding:  2% 10%;}
.title, .quote {font-family: 'Abril Fatface', cursive; font-size: 4rem;}
.quote {color:#dbdbdb; padding-top: 8%;}


#skills{
      display: flex;
    justify-content: space-around;
}
.skill-item{margin: 0 0.5%;
    background: grey;
    width: 23%;
    min-height: 10vh;
}


@media only screen and (max-width: 768px) {
  
  .placeholder{padding: 0; text-align: center;}
  .quote{display: none;}

}

</style>