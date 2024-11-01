<template>
    <div class="container">
      <h1>Crear Nuevo Usuario</h1>
      <form @submit.prevent="createUser">
        <div class="mb-3">
          <label for="name">Nombre:</label>
          <input type="text" v-model="user.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email">Email:</label>
          <input type="email" v-model="user.email" class="form-control" required />
        </div>
        <!-- Agregar más campos según sea necesario -->
        <button type="submit" class="btn btn-success">Crear Usuario</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
        },
      };
    },
    methods: {
      createUser() {
        // Lógica para crear el usuario, por ejemplo:
        console.log('Creando usuario:', this.user);
        // Aquí podrías hacer una llamada a la API para crear el usuario.
      },
    },
  };
  </script>
  