<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  color: white;
  font-family: Helvetica;
}
main {
  padding-top: 46px;
  background-color: #2c2f33;
  /* height: 100vh; */
}

body {
  overflow-y: hidden;
  background-color: #1e2124;
}
</style>
