import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://micasa.onrender.com/products')
        const products = response.data
        if (Array.isArray(products)) {
          commit('setProducts', products)
        } else {
          console.error('Invalid response data')
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
  }
})