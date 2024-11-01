<template>
    <div class="container">
      <h1>Editar Usuario</h1>
      <form @submit.prevent="updateUser">
        <div class="mb-3">
          <label for="name">Nombre:</label>
          <input type="text" v-model="user.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email">Email:</label>
          <input type="email" v-model="user.email" class="form-control" required />
        </div>
        <!-- Agregar más campos según sea necesario -->
        <button type="submit" class="btn btn-primary">Actualizar Usuario</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        user: {
          name: '',
          email: '',
        },
      };
    },
    created() {
      this.loadUser();
    },
    methods: {
      async loadUser() {
        // Cargar los datos del usuario usando el ID de las props, por ejemplo:
        console.log('Cargar usuario con ID:', this.id);
        // Aquí podrías hacer una llamada a la API para obtener los datos del usuario.
      },
      updateUser() {
        // Lógica para actualizar el usuario
        console.log('Actualizar usuario:', this.user);
        // Aquí podrías hacer una llamada a la API para actualizar los datos del usuario.
      },
    },
  };
  </script>
  