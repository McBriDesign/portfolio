<template>
  <div class="footer-bar">
    <p>All rights reserved 2021</p>
    <nav class="quick-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{width:100%;font-family:"Open Sans",cursive;text-decoration:none;position:static;bottom:0;display:flex;align-items:center;justify-content:space-around;color:#242424;padding:0;margin:0;min-height:16rem;background:#ebebeb; margin-top: 3%;}
.logo{font-size:2rem}
nav{width:30%}
nav a{margin:0 5%}
a{text-decoration:none}
a:visited{color:#242424}
</style>
