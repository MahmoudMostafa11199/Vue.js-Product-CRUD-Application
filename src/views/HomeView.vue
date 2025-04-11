<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import ProductCard from '@/components/ProductCard.vue'
import SpinnerLoading from '@/components/SpinnerLoading.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const store = useStore()

const products = computed(() => store.state.ProductsModule.products)
const isLoading = computed(() => store.state.ProductsModule.loading.fetch)
const error = computed(() => store.state.ProductsModule.error.fetch)

onMounted(async () => {
  await store.dispatch('fetchProducts')
})
</script>

<template>
  <main class="home">
    <section>
      <h2>All Products</h2>

      <div class="container">
        <SpinnerLoading v-if="isLoading" />

        <ErrorMessage v-if="fetchError" :errorMessage="fetchError" />

        <div class="products" v-if="!isLoading && !error">
          <template v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </template>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
}
</style>
