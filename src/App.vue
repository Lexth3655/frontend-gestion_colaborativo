<template>
  <div id="app">
    <!-- Navbar Futurista -->
    <nav class="navbar">
      <div class="navbar-brand">Gestión Colaborativa</div>
      <ul class="navbar-menu">
        <!-- Menú de Proyectos con submenú -->
        <li class="navbar-item">
          <a href="#" class="navbar-link">Proyectos</a>
          <ul class="dropdown">
            <li><router-link to="/projects/create" class="dropdown-link">Crear Proyecto</router-link></li>
            <li><router-link to="/projects/list" class="dropdown-link">Listado de Proyectos</router-link></li>
            <li><router-link to="/projects/assign-users" class="dropdown-link">Asignación de Usuarios</router-link></li>
          </ul>
        </li>



        <!-- Menú de Configuración con submenú -->
        <li class="navbar-item">
          <a href="#" class="navbar-link">Configuración</a>
          <ul class="dropdown">
            <li><router-link to="/settings/users" class="dropdown-link">Usuarios</router-link></li>
            <li><router-link to="/settings/roles" class="dropdown-link">Roles y Permisos</router-link></li>
          </ul>
        </li>

        <!-- Menú de Recursos -->
        <li class="navbar-item">
          <router-link to="/resources" class="navbar-link">Recursos</router-link>
        </li>

        <!-- Menú de Informes -->
        <li class="navbar-item">
          <router-link to="/reports" class="navbar-link">Informes</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* Mantener los mismos estilos futuristas */
#app {
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  background-color: #1a1a2e;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0f0f1e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
}

.navbar-brand {
  font-size: 1.8em;
  color: #00d1ff;
  text-shadow: 0 0 10px #00d1ff;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-item {
  position: relative;
}

.navbar-link {
  color: #00d1ff;
  text-decoration: none;
  font-size: 1.1em;
  padding: 5px 10px;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.navbar-link:hover {
  color: #ff00d4;
  text-shadow: 0 0 8px #ff00d4, 0 0 15px #ff00d4;
}

.dropdown {
  display: none;
  position: absolute;
  top: 35px;
  left: 0;
  background-color: #1f1f3d;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  padding: 10px;
}

.dropdown-link {
  color: #00d1ff;
  text-decoration: none;
  display: block;
  padding: 8px 15px;
  font-size: 0.95em;
  transition: color 0.3s ease, background 0.3s ease;
}

.dropdown-link:hover {
  color: #ff00d4;
  background: rgba(0, 0, 0, 0.3);
}

.navbar-item:hover .dropdown {
  display: block;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
