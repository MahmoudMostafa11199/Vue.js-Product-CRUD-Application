<script setup>
import { defineProps, computed } from 'vue'

const { rating } = defineProps({
  rating: { type: Number },
})

const fullStars = computed(() => Math.floor(rating))
const hasHalfStar = computed(() => rating - fullStars.value >= 0.5)
</script>

<template>
  <template v-for="i in 5" :key="i">
    <li class="rate-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        :class="{ fill: i <= rating }"
      >
        <path
          d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"
        />
      </svg>

      <svg
        v-if="hasHalfStar && i === Math.ceil(rating)"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        class="half-star"
        :style="{ clipPath: 'inset(0 40% 0 0)' }"
      >
        <path
          d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z"
        />
      </svg>
    </li>
  </template>
</template>

<style scoped lang="scss">
.rate-item {
  fill: #9ca3af;
  position: relative;

  & .fill,
  .half-star {
    fill: #facc15;
  }

  & .half-star {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
