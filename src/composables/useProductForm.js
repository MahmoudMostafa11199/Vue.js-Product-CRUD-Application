import { reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'

const defaultProduct = {
  title: '',
  image: '',
  category: '',
  description: '',
  price: 0,
  rating: { count: 0, rate: 0 },
}

export const useProductForm = (initialProduct = {}, isNew = true) => {
  const store = useStore()
  const safeProduct = reactive({ ...defaultProduct, ...initialProduct })

  const { title, image, category, description, price, rating } = toRefs(safeProduct)
  const error = computed(() => store.state.ProductsModule.error)

  const resetForm = () => {
    safeProduct.title = ''
    safeProduct.image = ''
    safeProduct.category = ''
    safeProduct.description = ''
    safeProduct.price = 0
    safeProduct.rating.count = 0
    safeProduct.rating.rate = 0
    // Object.assign(safeProduct, defaultProduct)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      !title.value === '' ||
      !description.value === '' ||
      !category.value === '' ||
      !price.value === '' ||
      !rating.value.rate === '' ||
      !rating.value.count === '' ||
      !image.value === ''
    ) {
      return
    }

    const productData = { ...safeProduct }

    if (isNew) {
      await store.dispatch('createProduct', productData)
      if (error.value.create) {
        toast.error(error.value.create)
      } else {
        toast.success('Product created successfully')
        resetForm()
      }
    } else {
      await store.dispatch('editProduct', productData)
      if (error.value.edit) {
        toast.error(error.value.edit)
      } else toast.success('Product edited successfully')
    }
  }

  return { title, image, category, description, price, rating, handleSubmit }
}
