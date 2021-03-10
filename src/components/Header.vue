<template>
  <b-container class="header-content">
    <b-row no-gutters align-v="center">
      <b-col cols="12" md="6">
        <div class="logo">
          <router-link to="/">
            <img src="/assets/images/km-icon.png" />
            <h1 class="text-logo">kieran mcbride | web developer</h1>
          </router-link>
        </div>
      </b-col>
      <b-col cols="12" md="6">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/portfolio">Portfolio</router-link> |
          <router-link to="/contact">Contact</router-link>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script></script>

<style scoped>
a {
  color: #242424;
}

.header-content {
  padding: 3% 0;
}
.nav-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #242424;
  padding: 0;
  margin: 0;
  font: #fff 1em sans-serif;
  min-height: 10rem;
}
.logo a {
  display: flex;
  align-items: center;
  width: 100%;
}
.logo h1 {
  font-family: "Open Sans", cursive;
  font-weight: 100;
  font-size: 1.25rem;
  align-items: center;
  display: inline-flex;
  margin: 0;
}
.logo img {
  margin-right: 2.5%;
  width: 30px;
  height: 30px;
  display: inline-flex;
}
nav {
  font-family: "Open Sans", cursive;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
}
nav a {
  margin: 0 5%;
}
a {
  text-decoration: none;
}
a:visited {
  color: #242424;
}

@media only screen and (max-width: 767px) {
  .logo .text-logo {
    display: none;
  }
  .logo a {
    display: flex;
    justify-content: center;
    padding: 3% 0;
  }
  nav {
    justify-content: center;
    padding: 3% 0;
  }
}
</style>
