<template>
    <v-container>
      <h2 class="text-center">Gestión de Recursos</h2>
  
      <!-- Barra de carga -->
      <v-progress-linear
        v-if="isLoading"
        indeterminate
        color="primary"
        class="mb-4"
      ></v-progress-linear>
  
      <!-- Formulario para agregar recurso -->
      <v-form @submit.prevent="addResource">
        <v-text-field
          label="Nombre del Recurso"
          v-model="newResource.nombreRecurso"
          outlined
          required
        ></v-text-field>
        <v-text-field
          label="URL del Recurso"
          v-model="newResource.url"
          type="url"
          outlined
          required
        ></v-text-field>
        <v-select
          label="Tipo de Recurso"
          v-model="newResource.tipoRecurso"
          :items="['documento', 'enlace', 'imagen']"
          outlined
          required
        ></v-select>
        <v-btn color="primary" type="submit" class="mt-3">Agregar Recurso</v-btn>
      </v-form>
  
      <!-- Mensaje de error -->
      <v-alert
        v-if="errorMessage"
        type="error"
        dismissible
        class="mt-3"
      >
        {{ errorMessage }}
      </v-alert>
  
      <!-- Lista de recursos -->
      <v-list v-if="resources.length > 0" class="mt-5">
        <v-list-item
          v-for="resource in resources"
          :key="resource.id"
          class="mb-2"
          two-line
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ resource.nombreRecurso }} ({{ resource.tipoRecurso }})
            </v-list-item-title>
            <v-list-item-subtitle>
              <a :href="resource.url" target="_blank">{{ resource.url }}</a>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-actions>
            <v-btn @click="showEditDialog(resource)" icon color="blue">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click="deleteResource(resource.id)" icon color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-actions>
        </v-list-item>
      </v-list>
      <v-alert v-else type="info" class="mt-3">
        No hay recursos asociados a esta tarea.
      </v-alert>
  
      <!-- Diálogo de edición -->
      <v-dialog v-model="editDialogVisible" persistent max-width="500px">
        <v-card>
          <v-card-title>Editar Recurso</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="updateResource">
              <v-text-field
                label="Nombre del Recurso"
                v-model="editResource.nombreRecurso"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="URL del Recurso"
                v-model="editResource.url"
                type="url"
                outlined
                required
              ></v-text-field>
              <v-select
                label="Tipo de Recurso"
                v-model="editResource.tipoRecurso"
                :items="['documento', 'enlace', 'imagen']"
                outlined
                required
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="updateResource">Guardar</v-btn>
            <v-btn text @click="closeEditDialog">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  import resourcesService from "@/services/resourcesService";
  
  export default {
    data() {
      return {
        resources: [], // Lista de recursos
        newResource: {
          nombreRecurso: "",
          url: "",
          tipoRecurso: "documento",
        },
        editResource: {}, // Datos del recurso en edición
        tareaId: 1, // ID de la tarea
        errorMessage: "", // Mensaje de error
        editDialogVisible: false, // Estado del diálogo de edición
        isLoading: false, // Indica si hay una operación en progreso
      };
    },
    methods: {
      async fetchResources() {
        this.isLoading = true;
        this.errorMessage = "";
        try {
          const response = await resourcesService.getResourcesByTask(this.tareaId);
          this.resources = response.data;
        } catch (error) {
          this.errorMessage = "Error al obtener los recursos.";
        } finally {
          this.isLoading = false;
        }
      },
      async addResource() {
        this.errorMessage = ""; // Resetear mensajes de error
        if (!this.validateFields(this.newResource)) return;
  
        this.isLoading = true;
        try {
          await resourcesService.addResourceToTask(this.tareaId, this.newResource);
          this.newResource = { nombreRecurso: "", url: "", tipoRecurso: "documento" };
          this.fetchResources();
        } catch (error) {
          this.errorMessage = "Error al agregar el recurso.";
        } finally {
          this.isLoading = false;
        }
      },
      async deleteResource(resourceId) {
        if (!confirm("¿Estás seguro de eliminar este recurso?")) return;
  
        this.isLoading = true;
        try {
          await resourcesService.deleteResource(resourceId);
          this.fetchResources();
        } catch (error) {
          this.errorMessage = "Error al eliminar el recurso.";
        } finally {
          this.isLoading = false;
        }
      },
      async updateResource() {
        this.errorMessage = ""; // Resetear mensajes de error
        if (!this.validateFields(this.editResource)) return;
  
        this.isLoading = true;
        try {
          await resourcesService.updateResource(this.editResource.id, this.editResource);
          this.closeEditDialog();
          this.fetchResources();
        } catch (error) {
          this.errorMessage = "Error al actualizar el recurso.";
        } finally {
          this.isLoading = false;
        }
      },
      showEditDialog(resource) {
        this.editResource = { ...resource };
        this.editDialogVisible = true;
      },
      closeEditDialog() {
        this.editDialogVisible = false;
        this.editResource = {};
      },
      validateFields(resource) {
        if (!resource.nombreRecurso.trim() || !resource.url.trim()) {
          this.errorMessage = "Todos los campos son obligatorios.";
          return false;
        }
        const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
        if (!urlRegex.test(resource.url)) {
          this.errorMessage = "La URL no es válida.";
          return false;
        }
        return true;
      },
    },
    mounted() {
      this.fetchResources(); // Cargar los recursos al montar el componente
    },
  };
  </script>
  