
import Vuex from 'vuex';
import cart from './modules/cart'
import createPersistedState from 'vuex-persistedstate'

// create store
export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        cart
    }
})
