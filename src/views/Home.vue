<template>
  <b-container class="placeholder">
    <b-row>
      <b-col cols="12" md="4">
        <img src="@/assets/bio-img.png">
      </b-col>
      <b-col id="bio" cols="12" sm="12" md="8">
        <h1 class="title">Hi, I'm Kieran</h1>
        <p class="bio-text">An intuitive developer, passionate about delivering the best products with a balance of usability and aesthetic. An undergraduate degree with honours focusing in front and back end web technologies has been further developed through six years industry experience, managing projects for established brands and experimenting cutting edge technologies.</p>

        <b-button class="primary-btn" to="/portfolio" variant="dark">Check out my work</b-button>

        <h3 class="quote"><span class="marks">"</span>Code should be read more than it is written.<span class="marks">"</span></h3>
      </b-col>
    </b-row>
    <b-row class="skills" align-v="center">
      <div class="skill-item"><img src="@/assets/vue.png"></div>
      <div class="skill-item"><img src="@/assets/git.png"></div>
      <div class="skill-item"><img src="@/assets/webpack.png"></div>
      <div class="skill-item"><img src="@/assets/figma.png"></div>
      <div class="skill-item"><img src="@/assets/laravel.png"></div>      
    </b-row>

  </b-container>
</template>

<script>

export default {
  name: "Home",
  components: {}
};

</script>

<style scoped>

.placeholder{padding:0;text-align:left}
img{display:block;margin:0 auto}
#bio{padding:4% 10%}
.bio-text{font-family: 'Open Sans', sans-serif; margin-bottom: 2.5rem;}
.title,.quote{font-family:'Abril Fatface',cursive;}
.title{font-size:4rem}
.quote{color:#dbdbdb;padding-top:8%;font-size: 3rem;}
.skills{display:flex;justify-content:space-around; margin-top: 5%;}
.skill-item{margin:1% .5%;width:15%;min-height:10vh;}
.skill-item img{width: 100%;}


@media only screen and (max-width: 768px) {
.placeholder{padding:0;text-align:center} 
.quote{display:none}
.skills {margin: 0 1%;}
.skill-item{width:33%}
}

</style>