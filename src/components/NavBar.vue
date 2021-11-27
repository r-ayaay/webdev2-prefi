<template>
  <nav>
    <ul>
      <li><a href="#/">Home</a></li>
      <!-- <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li> -->
      <li style="float: right">
        <a href="#/cart">Cart: {{ cart.count }}</a>
      </li>
      <li style="float: right">
        <a href="#" onclick="return false;" @click="resetCartState"
          >Reset Cart</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  components: {},
  computed: mapGetters(["cart"]),
  methods: {
    ...mapActions(["resetCartState"]),
  },
};
</script>
<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1e2124;
}
li {
  float: left;
}
li a {
  /* height: 50px; */
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover:not(.active) {
  background-color: #4b5358;
}
.active {
  background-color: #04aa6d;
}
</style>