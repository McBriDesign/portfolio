<template>
  <b-container class="placeholder">
    <b-row no-gutters id="section-bio">
      <b-col cols="12" md="5" lg="4" xl="4">
        <img id="bio-img" src="/assets/images/bio-img.png" />
      </b-col>
      <b-col id="bio" cols="12" md="6" lg="7" xl="7">
        <h1 class="title">Hi, I'm Kieran</h1>
        <p class="bio-text">
          An intuitive developer, passionate about delivering the best products
          with a balance of usability and aesthetic. An undergraduate degree
          with honours focusing in front and back end web technologies has been
          further developed through six years industry experience, managing
          projects for established brands and experimenting cutting edge
          technologies.
        </p>

        <b-button class="primary-btn" to="/portfolio" variant="dark"
          >Check out my work</b-button
        >

        <!--<h3 class="quote"><span class="marks">"</span>Code should be read more than it is written.<span class="marks">"</span></h3>-->
      </b-col>
    </b-row>

    <!-- SKILLS 
    <b-row no-gutters class="skills" align-v="center">
      <div class="skill-item"><img src="/assets/images/vue.png"></div>
      <div class="skill-item"><img src="/assets/images/git.png"></div>
      <div class="skill-item"><img src="/assets/images/webpack.png"></div>
      <div class="skill-item"><img src="/assets/images/figma.png"></div>
      <div class="skill-item"><img src="/assets/images/laravel.png"></div>      
    </b-row>
    -->
  </b-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
#section-bio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
}

.placeholder {
  padding: 0;
  text-align: left;
}
img {
  display: block;
  margin: 0 auto;
}
.bio-text {
  font-family: "Open Sans", sans-serif;
}
.quote {
  color: #dbdbdb;
  padding-top: 8%;
  font-size: 3rem;
}
.skills {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
}
.skill-item {
  margin: 1% 0.5%;
  width: 15%;
  min-height: 10vh;
}
.skill-item img {
  width: 100%;
}
#bio-img {
  width: 100%;
}

.primary-btn {
  margin: 3% 0;
}

@media only screen and (min-width: 560px) and (max-width: 769px) {
  .placeholder {
    padding: 0;
    text-align: center;
  }
  .quote {
    display: none;
  }
  #bio {
    padding: 2.5% 5%;
  }
  #bio-img {
    width: 80%;
  }
  .skills {
    margin: 0 1%;
  }
  .skill-item {
    width: 33%;
  }
  .header-content {
    padding: 5% 0;
  }
}

@media only screen and (max-width: 560px) {
  #bio {
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 2.75rem;
  }
  .bio-text {
    width: 85%;
  }
  .placeholder {
    padding: 0;
    text-align: center;
  }
  .quote {
    display: none;
  }
  .skills {
    margin: 0 1%;
  }
  .skill-item {
    width: 33%;
  }
  #bio-img {
    width: 80%;
  }
}
</style>
