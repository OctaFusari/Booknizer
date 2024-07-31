<!-- src/pages/Login.vue -->
<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Accedi</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Login',
    setup() {
      const email = ref('');
      const password = ref('');
      const router = useRouter(); // Ottieni l'istanza del router
  
      const handleSubmit = () => {
        // Simula una verifica di login
        if (email.value && password.value) {
          // Reindirizza alla pagina home dopo il login
          router.push('/'); // Cambia il percorso in base alla tua configurazione
        } else {
          alert('Please enter email and password');
        }
      };
  
      return { email, password, handleSubmit };
    }
  });
  </script>
  
  <style scoped>
  /* Stili per il login */
  </style>
  