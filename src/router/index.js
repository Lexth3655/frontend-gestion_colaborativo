import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Projects from '../views/ProjectList.vue';
import CreateProject from '../views/CreateProject.vue';
import UserAssignment from '../views/UserAssignment.vue';
import UserManagement from '../views/UserManagement.vue';
import RoleManagement from '../views/RoleManagement.vue';
import Resources from '../views/ResourceManagement.vue';
import Reports from '../views/ReportOverview.vue';
import BlankLayout from '../layouts/BlankLayout.vue'; // Nuevo layout ya vere que pongo
import CreateUser from '../views/CreateUser.vue';
import EditUser from '../views/EditUser.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },

  // Modulo de Proyectos con submenu, fron
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    children: [
      { path: 'create', name: 'CreateProject', component: CreateProject },
      { path: 'list', name: 'ProjectList', component: Projects },
      { path: 'assign-users', name: 'UserAssignment', component: UserAssignment }
    ]
  },

  // Configuracion con submenu para Usuarios y Roles
  {
    path: '/settings',
    name: 'Settings',
    component: BlankLayout, // Usa el nuevo layout vacio
    children: [
      { path: 'users', name: 'UserManagement', component: UserManagement },
      { path: 'roles', name: 'RoleManagement', component: RoleManagement },
    ]
  },

  // Rutas para Usuarios (CRUD, para implementar api)
  {
    path: '/users',
    name: 'UserSection',
    component: BlankLayout, // Layout en blanco para la sección de usuarios, aun no me aparece nada :ccc
    children: [
      { path: '', name: 'UserManagement', component: UserManagement }, // Lista de usuarios
      { path: 'create', name: 'CreateUser', component: CreateUser },    // Crear usuario
      { path: ':id/edit', name: 'EditUser', component: EditUser, props: true },  // Editar usuario
      { path: ':id', name: 'UserProfile', component: UserProfile, props: true }  // Perfil de usuario
    ]
  },

  // Recursos y Reportes
  { path: '/resources', name: 'Resources', component: Resources },
  { path: '/reports', name: 'Reports', component: Reports },

  // Acerca de eso de ultimo 
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
