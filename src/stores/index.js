import { createStore } from 'vuex'
import ProductsModule from './product/useProductStore.js'

export default createStore({
  modules: {
    ProductsModule,
  },
})
