<script setup>
import HeaderView from '@/shared/HeaderView.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderView />

  <RouterView />

  <footer class="footer">
    <p>&copy;Copyright by Mahmoud Mostafa.</p>
  </footer>
</template>

<style scoped lang="scss">
main {
  min-height: 100vh;
}

.footer {
  text-align: center;
}
</style>
