<script setup>
import { defineProps } from 'vue'

const { errorMessage } = defineProps({
  errorMessage: { type: String },
})
</script>

<!-------------- Content -------------->
<template>
  <p class="error">{{ errorMessage }}</p>
</template>

<!-------------- Styles -------------->
<style scoped>
.error {
  font-size: 20px;
  text-align: center;
  color: #f22;
  font-weight: 500;
}
</style>
