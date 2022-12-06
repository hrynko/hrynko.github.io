import '@fontsource/merriweather-sans/400.css'
import '@fontsource/merriweather/400.css'
import '@fontsource/merriweather/900.css'

import '~/styles/index.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}
