<template>
  <div>
  <b-col cols=12 class="header-banner"></b-col>
  <b-container class="placeholder">
    <b-row>
      
    </b-row>
    <b-row>
      <b-col id="intro" cols="12">

        <h1 class="title">Fancy a chat?</h1>
        <p class="bio-text">If you like what you have seen and would discuss the potential of hiring me for work, please get in touch via any of the methods below.</p>

      </b-col>
      <b-col cols="12" md="4">
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        
      <ul class="contact-list">
        <li class="contact-method" id="email">e-mail</li>
        <li class="contact-method" id="telephone">telephone</li>
      </ul>

      </b-col>
      <b-col cols="12" md="4">
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>

.placeholder{padding: 0; text-align: left; border-top: solid 1px #ebebeb}
img {display: block; margin: 0 auto; overflow: hidden; max-width: 100%; max-height: 15rem;}
#intro{ margin: 5% auto; display: flex; align-items: flex-end; justify-content: center;}
.bio-text{width: 90%; max-width:550px; padding-left: 5%;}
.title {font-family: 'Abril Fatface', cursive; font-size: 4rem;}

.container{padding: 0;}
.header-banner{height: 30vh;max-height: 300px; background-image: url('../assets/contact-banner.jpg'); background-position: center; background-size: cover; font-size: 3.75rem; display: flex; align-items: center; justify-content: center; color: #2c3e50; font-family: 'Abril Fatface', cursive; opacity: 0.75;}

@media only screen and (max-width: 768px) {
  
  .placeholder{padding: 0; text-align: center;}

}



</style>
