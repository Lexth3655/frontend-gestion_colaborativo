<template>
    <div class="container">
      <h1>Gestión de Usuarios</h1>
      <div class="mb-3">
        <input type="text" v-model="filter" placeholder="Filtrar por usuario" class="form-control" />
        <select v-model="selectedRole" class="form-control mt-2">
          <option value="">Filtrar por rol</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
        </select>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role.name }}</td>
            <td>
              <button class="btn btn-primary" @click="editUser(user)">Modificar</button>
              <button class="btn btn-danger" @click="deleteUser(user.id)">Eliminar</button>
              <button class="btn btn-info" @click="viewProfile(user)">Ver</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success mt-3" @click="createUser">Crear Usuario</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        roles: [],
        filter: '',
        selectedRole: ''
      };
    },
    computed: {
      filteredUsers() {
        return this.users.filter(user => {
          const matchesFilter = user.name.toLowerCase().includes(this.filter.toLowerCase());
          const matchesRole = this.selectedRole ? user.role.id === this.selectedRole : true;
          return matchesFilter && matchesRole;
        });
      }
    },
    methods: {
      async loadUsers() {
        try {
          const response = await fetch('TU_API_ENDPOINT/users'); // Cambia por la URL de la API para obtener usuarios
          this.users = await response.json();
        } catch (error) {
          console.error('Error al cargar usuarios:', error);
        }
      },
      async loadRoles() {
        try {
          const response = await fetch('TU_API_ENDPOINT/roles'); // Cambia por la URL de la API para obtener roles
          this.roles = await response.json();
        } catch (error) {
          console.error('Error al cargar roles:', error);
        }
      },
      createUser() {
        this.$router.push({ name: 'CreateUser' });
      },
      editUser(user) {
        this.$router.push({ name: 'EditUser', params: { id: user.id } });
      },
      deleteUser(userId) {
        // Llamada a la API para eliminar el usuario
        console.log('Eliminar usuario con ID:', userId);
        // Puedes implementar una confirmación con SweetAlert2 antes de eliminar el usuario
      },
      viewProfile(user) {
        this.$router.push({ name: 'UserProfile', params: { id: user.id } });
      }
    },
    created() {
      this.loadUsers();
      this.loadRoles();
    }
  };
  </script>
  
  <style scoped>
  .table {
    margin-top: 20px;
  }
  </style>
  