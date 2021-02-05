<template>
<div class="nav-bar">
    <div class="logo">
    <router-link to="/">
        <img src="@/assets/km-icon.png"/>
         <h1>Kieran McBride</h1>
    </router-link> 
    </div>
    
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/portfolio">Portfolio</router-link> |
        <router-link to="/contact">Contact</router-link>  
    </nav>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar{width:100%;display:flex;align-items:center;justify-content:space-evenly;color:#242424;padding:0;margin:0;;font:#fff 1em sans-serif;min-height:10rem}
.logo {display: flex; width: 40%;}
.logo a {display: flex; align-items: center;}
.logo h1{font-family:'Open Sans',cursive; font-weight:100; font-size:1.75rem; align-items: center; display: inline-flex;} 
.logo img{ padding-right: 5%; width: 45px; height: 45px; display: inline-flex;}
nav{font-family:'Open Sans',cursive;text-decoration:none;width:30%}
nav a{margin:0 5%;}
a{text-decoration: none;}
a:visited{color:#242424}
</style>
