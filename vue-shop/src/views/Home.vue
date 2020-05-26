<template>
  <div class="home">
       <Navbar></Navbar>
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero
  }
};
</script>
