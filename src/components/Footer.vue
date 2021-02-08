<template>
  <div class="footer-bar">
    <b-container>
    <b-row>
      <b-col cols="12" class="quick-link">
        <router-link to="/contact">Get in touch...</router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="6">
        <p class="tel">+44 (0)790 683 6833</p>
      </b-col>
      <b-col cols="12" md="6">
        <p class="email" mailto="mr.kieran.mcbride@googlemail.com">mr.kieran.mcbride@gmail.com</p>
      </b-col>
    </b-row>
    </b-container>
    
    
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{width:100%;font-family:"Open Sans",cursive;text-decoration:none;bottom:0;display:flex;align-items:center;justify-content:space-around;color:#242424;padding:0;margin:0;min-height:16rem;background:#ebebeb; margin-top: 3%;}
.logo{font-size:2rem}
nav{width:30%}
nav a{margin:0 5%}
a{text-decoration:none}
a:visited{color:#242424}
.quick-link {width: 100%;}
.tel, .email { display: inline-flex;}

a.router-link-exact-active.router-link-active {font-weight: normal;text-decoration: none;}
</style>
