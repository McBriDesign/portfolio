<template>
  <div class="footer-bar">
    <b-container>
    <b-row no-gutters>
      <b-col cols="12" lg="8" class="quick-link">
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">My Work</router-link>
        <router-link to="/contact">Get in touch</router-link>
      </b-col>
       <b-col cols="12" lg="4">
        <p>Kieran McBride &copy;2021</p>
      </b-col>
    </b-row>
    </b-container>
    
    
  </div>
</template>

<script></script>

<style scoped>
a {color: #242424;}
.footer-bar{width:100%;font-family:"Open Sans",cursive;text-decoration:none; position: absolute; bottom:0;display:flex;align-items:center;justify-content:space-around;color:#2c3e50;padding:0;margin:0;min-height:250px;background:#ebebeb; margin-top: 3%; padding-top: 1.25%;}
.logo{font-size:2rem}
nav{width:30%}
nav a{margin:0 5%}
a{text-decoration:none}
a:visited{color:#2c3e50}
.quick-link {width: 100%; display: inline-flex; justify-content: flex-start;}
.quick-link a {margin-left: 5%;}
a.router-link-exact-active.router-link-active {font-weight: bolder; text-decoration: none;}

@media only screen and (max-width: 991px) {
  
  .quick-link {justify-content: center;}
  .quick-link a {margin: 5%;}

}


</style>
