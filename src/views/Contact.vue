<template>
  <div>
  
  <b-container class="placeholder">
    <b-col cols=12 class="header-banner"></b-col>
    <b-row>
      <b-col class="intro" cols="12" lg="6">
        <h1 class="title">Fancy a chat?</h1>
      </b-col>
      <b-col class="intro" cols="12" lg="6">
        <p class="bio-text">If you like what you have seen and would discuss the potential of hiring me for work, please get in touch via any of the methods below.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="contact" cols="12" lg="6">
        <span class="contact-method"> Tel: +44 (0)790 683 6833</span>
      </b-col>
      <b-col class="contact" cols="12" lg=6>
        <span class="contact-method"><a href="mailto:mr.kieran.mcbride@googlemail.com"> E-mail: mr.kieran.mcbride@googlemail.com</a></span>
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


.placeholder{ font-family: 'Open Sans', sans-serif; padding: 0; text-align: left;}
img {display: block; margin: 0 auto; overflow: hidden; max-width: 100%; max-height: 15rem;}
.intro{ margin-bottom: 5%; display: flex; align-items: flex-end; justify-content: center;}
.bio-text{width: 90%; max-width:550px;}
.title {font-family: 'Abril Fatface', cursive; font-size: 4rem;}
a {color: #242424; width: 100%;}
.contact{display: flex; justify-content: space-evenly;}
.contact-method{text-align: center; width: 100%;  border: solid 1px #2c3e50; padding: 8% 0; }


@media only screen and (max-width: 991px) {
  
  .placeholder{padding: 0; text-align: center;}
  .contact-method{text-align: center; align-content: center; width: 90%;  border: solid 1px #2c3e50; padding: 3% 0; margin-bottom: 5%;}

}

.header-banner{height: 30vh;max-height: 300px; background-image: url('../assets/contact-banner.jpg'); background-position: center; background-size: cover; font-size: 3.75rem; display: flex; align-items: center; justify-content: center; color: #2c3e50; font-family: 'Abril Fatface', cursive; opacity: 0.75; margin-bottom: 5%;}

</style>
