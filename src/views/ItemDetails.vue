<template>
  <div style="padding-top: 25px; max-width: 50vw; margin: auto">
    <h1>{{ $route.query.name }}</h1>
    <img :src="$route.query.imgURL" alt="" />
    <br />
    <span style="display: inline-block; margin: 5px">Category: </span>
    <span
      style="display: inline-block; margin: 5px"
      v-for="(category, ndx) in $route.query.category"
      v-bind:key="ndx"
    >
      {{ category }}
    </span>
    <p style="margin: 5px; font-size: 24px; text-align: left">
      {{ $route.query.desc }}
    </p>

    <p style="font-size: 30px">Price: Php {{ $route.query.price }}</p>
    <p style="margin: 5px; font-size: 16px">
      Quantity: {{ $route.query.quantity }}
    </p>
    <div style="margin: 25px 0">
      <button
        style="
          color: black;
          font-size: 24px;
          border: 0;
          background-color: #99aab5;
          width: 50px;
        "
        @click="changeQty('SUB')"
      >
        -
      </button>
      <input
        style="
          color: black;
          font-size: 24px;
          background-color: white;
          border: 0;
          width: 100px;
        "
        @keypress="validate(event)"
        type="number"
        v-model="item.quantity"
        @blur="checkQty"
      />
      <button
        style="
          color: black;
          font-size: 24px;
          border: 0;
          background-color: #99aab5;
          width: 50px;
        "
        @click="changeQty('ADD')"
      >
        +
      </button>
    </div>
    <form @submit="onSubmit">
      <button id="additem-btn">ADD TO CART</button>
    </form>
  </div>
  <div style="height: 100vh"></div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "ItemDetails",
  data() {
    return {
      item: {
        quantity: 1,
        name: this.$route.query.name,
        price: this.$route.query.price,
        imgURL: this.$route.query.imgURL,
        maxQuantity: this.$route.query.quantity,
      },
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    changeQty(op) {
      switch (op) {
        case "SUB":
          if (this.item.quantity != 1) {
            this.item.quantity--;
          }
          break;
        case "ADD":
          if (this.item.quantity != this.$route.query.quantity) {
            this.item.quantity++;
          }
          break;
      }
    },
    onSubmit(e) {
      e.preventDefault();
      this.addToCart(this.item);
      this.$router.push("/");
    },
    validate(evt) {
      var theEvent = evt || window.event;

      // Handle paste
      if (theEvent.type === "paste") {
        key = event.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
          theEvent.preventDefault();
        }
      }
    },
    checkQty() {
      if (this.item.quantity > this.$route.query.quantity) {
        this.item.quantity = this.$route.query.quantity;
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
}

#additem-btn {
  font-size: 28px;
  width: 250px;
  position: relative;
  padding: 10px 0;
  background-color: #57f287;
  color: white;
  border: 0;
}

input {
  font-size: 24px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
