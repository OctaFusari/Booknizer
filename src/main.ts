/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import "./styles/style.css";

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

/* import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import home from "./components/home.vue";
import profilo from "./components/profilo.vue";
import libro from "./components/libro.vue"; */

/* const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: home, name: "home" },
    { path: "/profilo", component: profilo, name: "profilo" },
    { path: "/libro", component: libro, name: "libro" },
  ],
}) */

const app = createApp(App);

registerPlugins(app);
/* app.use(router); */
app.mount("#app");
