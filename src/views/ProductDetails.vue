<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'

import RatingStar from '@/components/RatingStar.vue'
import SpinnerLoading from '@/components/SpinnerLoading.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const product = computed(() => store.state.ProductsModule.productSelected)
const isLoading = computed(() => store.state.ProductsModule.loading.get)
const error = computed(() => store.state.ProductsModule.error)

const id = route.params.id

const handleEditProduct = () => {
  router.push(`/product/edit/${id}`)
}

const handleDeleteProduct = async () => {
  if (window.confirm('Are you sure you want to delete this product?')) {
    await store.dispatch('deleteProduct', id)
    if (!error.value.delete) {
      toast.success('Product deleted successfully')
      setTimeout(() => {
        router.push('/')
      }, 1000)
    } else toast.error(error.value.delete)
  }
}

onMounted(async () => {
  await store.dispatch('getProduct', id)
})
</script>

<!-------------- Content -------------->
<template>
  <main>
    <section>
      <h2>Product Details #{{ id }}</h2>

      <div class="container">
        <SpinnerLoading v-if="isLoading" />

        <ErrorMessage v-if="error.get" :errorMessage="error.get" />

        <div class="product-details" v-if="!isLoading && !error.get">
          <div class="product-details__img-box">
            <img :src="product.image" :alt="product.title" class="product-details__img" />
          </div>

          <div class="product-details__text-box">
            <span class="product-details__category">
              {{ product.category }}
            </span>
            <h3 class="product-details__title">
              {{ product.title }}
            </h3>
            <p class="product-details__description">
              {{ product.description }}
            </p>
            <div class="product-details__info">
              <p class="product-details__price">${{ product.price }}</p>
              <div class="product-details__rating">
                <ul class="product-details__rating-rate">
                  <RatingStar :rating="product.rating?.rate" />
                </ul>

                <span className="product-details__rating-count"
                  >({{ product.rating?.count }} Reviews)</span
                >
              </div>
            </div>
            <div class="buttons">
              <button class="btn-primary" @click="handleEditProduct">Update</button>
              <button class="btn-primary delete" @click="handleDeleteProduct">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<!-------------- Style -------------->
<style scoped lang="scss">
.product-details {
  background-color: #fff;
  color: #000;
  padding: 28px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  column-gap: 18px;
  row-gap: 28px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  &__img-box {
    @media screen and (min-width: 640px) {
      flex-basis: 50%;
    }
    @media screen and (min-width: 768px) {
      flex-basis: 33.3333%;
    }
  }

  &__text-box {
    flex-basis: 65%;
  }

  &__img {
    width: 100%;
    height: 360px;
    object-fit: contain;
  }

  &__category {
    display: inline-block;
    font-size: 14px;
    margin-bottom: 20px;
    padding: 6px 14px;
    border-radius: 10px;
    background-color: #016001;
    color: #eee;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 14px;
    margin-bottom: 12px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
  }

  &__price {
    color: #a70000;
    align-self: self-end;
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;

    &-rate {
      display: flex;
      align-items: center;
      list-style: none;
    }

    /* &-count {
      margin-top: 10px;
    } */
  }

  .buttons {
    display: flex;
    gap: 12px;
  }
}
</style>
