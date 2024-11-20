import axios from "axios";

//const API_BASE_URL = "http://localhost:5000/api/Recursos";

export default {
  // Obtener recursos por tarea
  getResourcesByTask(tareaId) {
    return axios.get('${API_BASE_URL}/ObtenerRecursosPorTarea/${tareaId}');
  },
  // Agregar un recurso a una tarea
  addResourceToTask(tareaId, recurso) {
    return axios.post('${API_BASE_URL}/AgregarRecursoATarea?tareaId=${tareaId}', recurso, {
      headers: { "Content-Type": "application/json" },
    });
  },
  // Actualizar un recurso
  updateResource(id, recurso) {
    return axios.put('${API_BASE_URL}/ActualizarRecurso/${id}', recurso, {
      headers: { "Content-Type": "application/json" },
    });
  },
  // Eliminar un recurso
  deleteResource(id) {
    return axios.delete('${API_BASE_URL}/EliminarRecurso/${id}');
  },
};
