<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product/new">Create Product</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 24px 10px;

  & nav {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }

    & a {
      padding: 4px 16px;
      border-right: 1px solid var(--color-border);
      color: var(--color-text);

      &.router-link-exact-active {
        color: hsla(160, 100%, 37%, 1);
      }

      &:last-of-type {
        border: 0;
      }
    }
  }
}
</style>
