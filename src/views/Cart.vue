<template>
  <div id="cart-grid">
    <div
      style="
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 50px;
      "
    >
      <div>
        <label for="">How much do you have?</label><br />
        <input type="text" @keypress="validate(event)" v-model="userMoney" />
      </div>
      <div>
        <label for="">Coupon Code: </label><br />
        <input type="text" @input="validateCode()" v-model="couponCode" />
      </div>
      <p>{{ notif }}</p>
      <!-- <p>Discounted price is Php {{ discTotal }}</p> -->
    </div>

    <div style="background-color: #23272a" id="cart-list">
      <div v-for="(item, ndx) in cart.items" v-bind:key="ndx">
        <ItemCartView :itemData="item" :ndx="ndx" />
      </div>
    </div>
    <div id="total" style="text-align: center; background-color: #1e2124">
      TOTAL: Php {{ origTotal }}
    </div>
    <div style="text-align: right; background-color: #1e2124">
      <button id="checkout-btn" @click="checkout">CHECKOUT</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ItemCartView from "../components/ItemCartView";
export default {
  name: "Cart",
  components: {
    ItemCartView,
  },

  data() {
    return {
      userMoney: "",
      couponCode: "",
      discTotal: "",
      notif: "",
    };
  },
  computed: {
    ...mapGetters(["cart"]),

    origTotal() {
      var total = 0;
      this.cart.items.forEach((item) => {
        total = total + parseInt(item.price) * parseInt(item.quantity);
      });
      return total;
    },
  },
  methods: {
    ...mapActions(["resetCartState"]),
    checkout() {
      if (this.origTotal == 0) {
        alert("nothing to checkout");
      } else {
        var moneyInt = parseInt(this.userMoney);
        switch (this.couponCode) {
          case "menu50":
            if (moneyInt >= this.origTotal / 2) {
              alert("checkout successful");
              this.resetCartState();
            } else {
              alert("you dont have enough money");
            }
            break;
          case "menu20":
            if (moneyInt >= this.origTotal - this.origTotal * 0.2) {
              alert("checkout successful");
              this.resetCartState();
            } else {
              alert("you dont have enough money");
            }
            break;
          case "menu10":
            if (moneyInt >= this.origTotal - this.origTotal * 0.1) {
              alert("checkout successful");
              this.resetCartState();
            } else {
              alert("you dont have enough money");
            }
            break;
          case "menu200flat":
            if (moneyInt >= this.origTotal - 200) {
              alert("checkout successful");
              this.resetCartState();
            } else {
              alert("you dont have enough money");
            }
            break;
          default:
            if (this.userMoney >= this.origTotal) {
              alert("checkout successful");
              this.resetCartState();
            } else {
              alert("you dont have enough money");
            }
        }
      }
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
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    },
    validateCode() {
      switch (this.couponCode) {
        case "menu50":
          this.notif =
            "You get a 50% discount!\nYour new total is Php " +
            this.origTotal * 0.5;
          break;
        case "menu20":
          "You get a 20% discount!\nYour new total is Php " +
            this.origTotal -
            this.origTotal * 0.2;
          break;
        case "menu10":
          "You get a 10% discount!\nYour new total is Php " +
            this.origTotal -
            this.origTotal * 0.1;
          break;
        case "menu200flat":
          this.notif =
            "You get 200 less from the your total!\nYour new total is Php " +
            this.origTotal -
            200;
          break;
        default:
          this.notif = "";
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  object-fit: cover;
}

#cart-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#cart-list {
  height: 75vh;
  min-height: 450px;
  overflow-y: auto;
}

#total {
  padding-top: 7vh;
  padding-right: 30px;
  font-size: 40px;
}

#checkout-btn {
  margin-top: 7vh;
  margin-right: 30px;
  font-size: 40px;
  width: 250px;
  position: relative;
  top: -10px;
  padding: 10px 0;
  background-color: #ed4245;
  color: white;
  border: 0;
}
label {
  display: block;
  font-size: 24px;
  margin-bottom: 5px;
}
input {
  background-color: #23272a;
  border: 0;
  font-size: 36px;
  text-align: center;
}
</style>