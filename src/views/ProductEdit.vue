<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import FormData from '@/components/FormData.vue'
import SpinnerLoading from '@/components/SpinnerLoading.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const route = useRoute()
const store = useStore()
const id = route.params.id

const productSelected = computed(() => store.state.ProductsModule.productSelected)
const isLoading = computed(() => store.state.ProductsModule.loading.get)
const error = computed(() => store.state.ProductsModule.error.get)

onMounted(async () => {
  await store.dispatch('getProduct', id)
})
</script>

<!-------------- Content -------------->
<template>
  <main>
    <section>
      <h2>Product Edit #{{ id }}</h2>

      <div class="container">
        <SpinnerLoading v-if="isLoading" />

        <ErrorMessage :errorMessage="error" v-if="error" />

        <FormData :product="productSelected" :isNew="false" v-if="!isLoading && !error" />
      </div>
    </section>
  </main>
</template>
