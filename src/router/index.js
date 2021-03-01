import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/ProjectSingle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import( "../views/Portfolio.vue")
  },
  {
    path: "/portfolio/:id",
    name: "portfolio",
    component: Project,
    props: true
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
    import( "../views/Contact.vue")
  },


];

const router = new VueRouter({
  routes
});

export default router;
