<script setup>
import { defineProps } from 'vue'

import { useProductForm } from '@/composables/useProductForm.js'

const { product, isNew } = defineProps(['product', 'isNew'])

const { title, image, category, description, price, rating, handleSubmit } = useProductForm(
  product,
  isNew,
)
</script>

<!-------------- Content -------------->
<template>
  <form class="form" @submit="handleSubmit">
    <div class="input-box">
      <label for="title" class="label"> Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title..."
        class="input"
        v-model="title"
        required
      />
    </div>
    <div class="input-box">
      <label for="category" class="label"> Category: </label>
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Category..."
        class="input"
        v-model="category"
        required
      />
    </div>
    <div class="input-box">
      <label for="description" class="label"> Description: </label>
      <textarea
        name="description"
        id="description"
        placeholder="description..."
        class="input"
        rows="3"
        v-model="description"
        required
      ></textarea>
    </div>
    <div class="input-box">
      <label for="img" class="label mb-1"> Image Url: </label>
      <input
        type="url"
        name="image"
        id="image"
        placeholder="image url"
        class="input"
        v-model="image"
        required
      />
    </div>
    <div class="input-box">
      <label for="price" class="label"> Price: </label>
      <div>
        <input
          type="number"
          name="price"
          id="price"
          placeholder=""
          class="input"
          v-model="price"
          min="0"
          step="0.01"
          required
        />
        <span>USD </span>
      </div>
    </div>
    <div class="input-box">
      <label for="rating" class="label"> Rating: </label>
      <div>
        <input
          type="number"
          name="count"
          id="count"
          min="0"
          placeholder="Rating count"
          class="input"
          v-model="rating.count"
          required
        />
        <input
          type="number"
          name="rate"
          id="rate"
          placeholder="Rating rate"
          class="input"
          min="0"
          max="5"
          step="0.1"
          v-model="rating.rate"
          required
        />
      </div>
    </div>

    <div class="input-box">
      <button type="submit" class="btn-primary">{{ isNew ? 'Create' : 'Update' }}</button>
    </div>
  </form>
</template>

<!-------------- Styles -------------->
<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  row-gap: 12px;

  @media screen and (min-width: 700px) {
    width: 50%;
  }

  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 4px;

    &:last-child {
      margin-top: 16px;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 4px;

      & > span {
        font-weight: 600;
      }
    }

    .label {
      font-size: 14px;
    }

    .input {
      width: 100%;
      font-size: 16px;
      padding: 6px 10px;
      outline: none;
      border: 1px solid #333;
      border-radius: 4px;
    }
  }
}
</style>
