<template>
<div class="nav-bar">
    <router-link to="/"><div class="logo">Kieran McBride</div></router-link>
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
.nav-bar{width:100%;display:flex;align-items:center;justify-content:space-around;color:#242424;padding:0;margin:0;;font:#fff 1em sans-serif;min-height:6rem}
.logo{font-family:'Open Sans',cursive;font-size:2rem}
nav{font-family:'Open Sans',cursive;text-decoration:none;width:30%}
nav a{margin:0 5%;}
a{text-decoration: none;}
a:visited{color:#242424}
</style>
