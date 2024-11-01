<template>
    <div class="container">
      <h1>Perfil de Usuario</h1>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <!-- Agregar más detalles según sea necesario -->
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
          id: '',
          name: '',
          email: '',
        },
      };
    },
    created() {
      this.loadUserProfile();
    },
    methods: {
      async loadUserProfile() {
        // Cargar los datos del usuario usando el ID de las props
        console.log('Cargar perfil de usuario con ID:', this.id);
        // Aquí podrías hacer una llamada a la API para obtener los datos del perfil del usuario.
      },
    },
  };
  </script>
  