import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { worker } from "./mocks/browser";

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
const libraries = [
  createPinia(),
  router,
  vuetify
]

if (process.env.NODE_ENV === 'development') worker.start()
libraries.forEach(library => app.use(library))
app.mount("#app");
