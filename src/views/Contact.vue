<template>
  <div class="contact">

    <HelloWorld msg="Get in touch" />
    <img src="@/assets/contact.png"/>


    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
