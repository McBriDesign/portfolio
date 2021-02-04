<template>
<div class="navigation-bar">
    <div class="logo">Kieran McBride</div>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>  
    </nav>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation-bar{width:100%;display:flex;align-items:center;justify-content:space-around;color:#242424;padding:0;margin:0;background-color:#ebebeb;font:#fff 1em sans-serif;min-height:4rem}
.logo{font-family:'Open Sans',cursive;font-size:2rem}
nav{font-family:'Open Sans',cursive;text-decoration:none;width:30%}
nav a{margin:0 5%; text-decoration: none;}
nav a:visited{color:#242424}
</style>
