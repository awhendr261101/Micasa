import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    loading: false,
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getLoading(state) {
      return state.loading;
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);  // Set loading to true before fetching
      try {
        const response = await axios.get('https://micasa.onrender.com/products');
        const products = response.data;
        if (Array.isArray(products)) {
          commit('setProducts', products);
        } else {
          console.error('Invalid response data');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        commit('setLoading', false);  // Set loading to false after fetching
      }
    }
  }
});
