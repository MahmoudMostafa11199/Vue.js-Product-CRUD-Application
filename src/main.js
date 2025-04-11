import { createApp } from 'vue'
import Toast from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router/index.js'
import store from './stores/index.js'
import './assets/main.css'

const options = {
  position: 'top-center',
  newestOnTop: true,
  maxToasts: 5,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  closeOnClick: true,
  transition: 'bounce',
  hideProgressBar: false,
  toastOptions: {
    success: { autoClose: 3000 },
    error: { autoClose: 5000 },
  },
}

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Toast, options)
app.mount('#app')
