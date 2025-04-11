<script setup>
import { defineProps } from 'vue'

const { product } = defineProps({ product: { type: Object } })
</script>

<!-- Content -->
<template>
  <div class="product flex-1/2 sm:flex-1/3 md:flex-1/4 lg:flex-1/5">
    <RouterLink :to="`/productDetails/${product.id}`" class="product__link"></RouterLink>
    <img :src="product.image" :alt="product.title" class="product__img" />
    <h3 class="product__title">{{ product.title }}</h3>
    <p class="product__price">${{ product.price }}</p>
  </div>
</template>

<!-- Style -->
<style scoped lang="scss">
.product {
  height: auto;
  border: 2px solid #333;
  border-radius: 6px;
  padding: 10px;
  background-color: #fff;
  color: #000;

  flex: 1 0 20%;
  position: relative;

  @media (max-width: 1024px) {
    flex: 1 0 25%;
  }

  @media (max-width: 768px) {
    flex: 1 0 33.3333%;
  }

  @media (max-width: 540px) {
    flex: 1 0 50%;
  }

  &__img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    margin-bottom: 12px;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  &__price {
    font-size: 14px;
    color: red;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
}
</style>
