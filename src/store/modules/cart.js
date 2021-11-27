
const state = {
    cart: {
        count: 0,
        items: []
    }
};

const getters = {
    cart: (state) => state.cart,
};

const actions = {
    addToCart({ commit }, item) {
        commit('addToCart', item);
    },
    resetCartState({ commit }) {
        commit('resetCartState');
    },
    addQty({ commit }, ndx) {
        commit('addQty', ndx);
    },
    decQty({ commit }, ndx) {
        commit('decQty', ndx);
    },
    changeQty({ commit }, arr) {

        commit('changeQty', arr);
    },
    removeItem({ commit }, ndx) {
        commit('removeItem', ndx);
    },
};

const mutations = {
    addToCart: (state, item) => {
        state.cart.count++;
        state.cart.items.push(item);
    },
    resetCartState: (state) => {
        state.cart.count = 0;
        state.cart.items = [];
    },
    addQty: (state, ndx) => {
        if (state.cart.items[ndx].quantity < state.cart.items[ndx].maxQuantity) {
            state.cart.items[ndx].quantity++;
            return 1;
        }

    },
    decQty: (state, ndx) => {
        if (state.cart.items[ndx].quantity > 1) {
            state.cart.items[ndx].quantity--;
            return 1;
        }
    },
    changeQty: (state, arr) => {
        if (parseInt(arr[1]) > state.cart.items[arr[0]].maxQuantity) {
            state.cart.items[arr[0]].quantity = state.cart.items[arr[0]].maxQuantity;
        }
        else {
            state.cart.items[arr[0]].quantity = arr[1];
        }
    },
    removeItem: (state, ndx) => {
        state.cart.items.splice(ndx, 1);
        state.cart.count--;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};