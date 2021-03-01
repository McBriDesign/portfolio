<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

export default {
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent
  }
};
</script>

<style>
body{margin:0; text-align: center; font-family:'Open Sans',sans-serif; font-weight: bold; -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.primary-btn{margin: 0 auto; border-radius:0;background-color:#2c3e50;opacity:.95}
.primary-btn:hover{opacity:1;background-color:#242424}
nav a.router-link-exact-active.router-link-active{font-weight:bolder;text-decoration:underline;text-underline-position:under}
.title,.quote{font-family:'Abril Fatface',cursive;}
.title{font-size:3.5em; color:#2c3e50}
a:hover {text-decoration: none;}
</style>
