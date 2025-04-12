export default {
  state: {
    products: [],
    productSelected: {},
    loading: {
      fetch: false,
      get: false,
      edit: false,
      new: false,
      delete: false,
    },
    error: {
      fetch: '',
      get: '',
      edit: '',
      new: '',
      delete: '',
    },
  },

  mutations: {
    setLoading(state, { type, value }) {
      state.loading[type] = value
    },

    setError(state, { type, value }) {
      state.error[type] = value
    },

    getProducts(state, products) {
      state.products = products
    },

    getProduct(state, product) {
      state.productSelected = product
    },

    editProduct(state, product) {
      const editProductIndex = state.products.findIndex((pr) => pr.id == product.id)
      state.products[editProductIndex] = product
    },

    createProduct(state, newProduct) {
      state.products.push(newProduct)
    },

    deleteProduct(state, { id }) {
      state.products = state.products.filter((product) => product.id !== id)
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        commit('setLoading', { type: 'fetch', value: true })
        commit('setError', { type: 'fetch', value: '' })

        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error('Unable to fetch products. Please try again later.')

        const data = await res.json()
        commit('getProducts', data)
      } catch (err) {
        commit('setError', {
          type: 'fetch',
          value: err.message || 'An unexpected error occurred. Please try again.',
        })
      } finally {
        commit('setLoading', { type: 'fetch', value: false })
      }
    },

    async getProduct({ commit }, id) {
      try {
        commit('setLoading', { type: 'get', value: true })
        commit('setError', { type: 'get', value: '' })

        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!res.ok) throw new Error('Product not found.')

        const text = await res.text()
        const data = text ? JSON.parse(text) : null
        if (!data) throw new Error('This product is no longer available or has been removed.')
        commit('getProduct', data)
      } catch (err) {
        commit('setError', {
          type: 'get',
          value: err.message || 'An unexpected error occurred. Please try again.',
        })
      } finally {
        commit('setLoading', { type: 'get', value: false })
      }
    },

    async editProduct({ commit }, editProduct) {
      try {
        commit('setLoading', { type: 'edit', value: true })
        commit('setError', { type: 'edit', value: '' })

        const res = await fetch(`https://fakestoreapi.com/products/${editProduct.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editProduct),
        })
        if (!res.ok) throw new Error('Failed to edit product. Please try again.')

        const data = await res.json()
        commit('editProduct', data)
      } catch (err) {
        commit('setError', {
          type: 'edit',
          value: err.message || 'An unexpected error occurred. Please try again.',
        })
      } finally {
        commit('setLoading', { type: 'edit', value: false })
      }
    },

    async createProduct({ commit }, newProduct) {
      try {
        commit('setLoading', { type: 'new', value: true })
        commit('setError', { type: 'new', value: '' })

        const res = await fetch('https://fakestoreapi.com/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        })
        if (!res.ok) throw new Error('Failed to create product. Please try again.')

        const data = await res.json()
        commit('createProduct', data)
      } catch (err) {
        commit('setError', {
          type: 'new',
          value: err.message || 'An unexpected error occurred. Please try again.',
        })
      } finally {
        commit('setLoading', { type: 'new', value: false })
      }
    },

    async deleteProduct({ commit }, id) {
      try {
        commit('setLoading', { type: 'delete', value: true })
        commit('setError', { type: 'delete', value: '' })

        const res = await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' })
        if (!res.ok) throw new Error('Failed to delete product. Please try again.')

        const data = await res.json()
        commit('deleteProduct', data)
      } catch (err) {
        commit('setError', {
          type: 'delete',
          value: err.message || 'An unexpected error occurred. Please try again.',
        })
      } finally {
        commit('setLoading', { type: 'delete', value: false })
      }
    },
  },
}
