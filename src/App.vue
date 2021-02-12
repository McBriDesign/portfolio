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
body {
  margin: 0;
}

.primary-btn{  border-radius: 0; font-family: 'Open Sans', sans-serif; background-color: #2c3e50; opacity: 0.95;}
.primary-btn:hover{opacity: 1; background-color: #242424;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active.router-link-active {
    font-weight: bolder;
    text-decoration: underline;
    text-underline-position: under;
}

</style>
