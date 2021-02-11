<template>
  <div class="footer-bar">
    <b-container>
    <b-row>
       <b-col cols="12" sm="4">
        Kieran McBride &copy;2021
      </b-col>
      <b-col cols="12" sm="8" class="quick-link">
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">My Work</router-link>
        <router-link to="/contact">Get in touch</router-link>
      </b-col>
    </b-row>
    </b-container>
    
    
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{width:100%;font-family:"Open Sans",cursive;text-decoration:none;bottom:0;display:flex;align-items:center;justify-content:space-around;color:#2c3e50;padding:0;margin:0;min-height:16rem;background:#ebebeb; margin-top: 3%;}
.logo{font-size:2rem}
nav{width:30%}
nav a{margin:0 5%}
a{text-decoration:none}
a:visited{color:#2c3e50}
.quick-link {width: 100%; display: inline-flex; justify-content: flex-end;}
.quick-link a {margin-left: 5%;}
a.router-link-exact-active.router-link-active {font-weight: normal;text-decoration: none;}
</style>
