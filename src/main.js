import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

// Import our custom CSS
import './assets/estilos.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).use(bootstrap).use(store).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')