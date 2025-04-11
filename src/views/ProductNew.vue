<script setup>
import FormData from '@/components/FormData.vue'
</script>

<template>
  <main>
    <section>
      <h2>Create Product</h2>

      <div class="container">
        <FormData :isNew="true" />
      </div>
    </section>
  </main>
</template>
