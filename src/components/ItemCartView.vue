<template>
  <div class="itemContainer">
    <img :src="itemData.imgURL" />
    <div>
      <h1>{{ itemData.name }}</h1>
      <div class="priceqty">
        <p>Price: {{ itemData.price }}</p>
        <div>
          <button style="color: black" @click="decQtyA(ndx)">-</button>
          <input
            class="qtyInput"
            type="text"
            v-model="test"
            @keypress="validate(event)"
            @blur="changeQtyA(ndx)"
          />
          <button style="color: black" @click="addQtyA(ndx)">+</button>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <button id="x" @click="removeItem(ndx)">x</button>
      Php {{ itemData.price * itemData.quantity }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ItemCartView",
  props: ["itemData", "ndx"],
  data() {
    return {
      test: this.itemData.quantity,
    };
  },
  methods: {
    ...mapActions(["addQty", "decQty", "removeItem", "changeQty"]),
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
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    },
    decQtyA(ndx) {
      if (this.decQty(ndx)) {
        this.test = this.itemData.quantity;
      }
    },
    addQtyA(ndx) {
      if (this.addQty(ndx)) {
        this.test = this.itemData.quantity;
      }
    },
    changeQtyA(ndx) {
      if (this.changeQty([ndx, this.test])) {
        this.test = this.itemData.quantity;
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;
  margin: 0 25px;
}

div.itemContainer {
  background-color: #36393e;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 15px auto;
  /* margin: auto; */
  /* height: 200px; */
  /* width: 50%; */
  width: 600px;
  padding: 25px 0;
  color: white;
  border-radius: 10px;
}

.priceqty {
  display: flex;
  justify-content: space-between;
}
.qtyInput {
  width: 50px;
  text-align: center;
}

#x {
  width: 25px;
  height: 25px;
  border-radius: 50px;
  position: absolute;
  background: #ed4245;
  color: white;
  top: -10px;
  right: -10px;
  border: 0;
}

#x:hover {
  cursor: pointer;
}

input {
  color: black;
}
</style>