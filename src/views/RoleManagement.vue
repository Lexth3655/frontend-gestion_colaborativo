<template>
    <div class="container">
      <h1>Gestión de Roles y Permisos</h1>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Filtrar por nombre"
          v-model="filter"
        />
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Permisos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="role in filteredRoles" :key="role.id">
            <td>{{ role.id }}</td>
            <td>{{ role.name }}</td>
            <td>{{ role.permissions.join(', ') }}</td>
            <td>
              <button class="btn btn-primary" @click="editRole(role)">Modificar</button>
              <button class="btn btn-danger" @click="deleteRole(role.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        roles: [],
        filter: ''
      };
    },
    computed: {
      filteredRoles() {
        return this.roles.filter(role => 
          role.name.toLowerCase().includes(this.filter.toLowerCase())
        );
      }
    },
    methods: {
      async loadRoles() {
        try {
          const response = await fetch('TU_API_ENDPOINT'); // Cambia esto por la URL de tu API
          this.roles = await response.json();
        } catch (error) {
          console.error('Error al cargar roles:', error);
        }
      },
      editRole(role) {
        console.log('Editar rol:', role);
      },
      deleteRole(roleId) {
        console.log('Eliminar rol con ID:', roleId);
      }
    },
    created() {
      this.loadRoles();
    }
  };
  </script>
  
  <style scoped>
  .table {
    margin-top: 20px;
  }
  </style>
  