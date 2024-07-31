<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
import Home from './pages/home.vue';
import Login from './pages/login.vue';

export default {
  components: {
    Login
  }
};
</script>
