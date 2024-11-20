import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/Comentarios";

export default {
  // Obtener comentarios por tarea
  getCommentsByTask(tareaId) {
    return axios.get(`${API_BASE_URL}/ObtenerComentariosPorTarea`, {
      params: { tareaId },
    });
  },
  // Agregar un comentario a una tarea
  addCommentToTask(tareaId, usuarioId, contenido) {
    return axios.post(
      `${API_BASE_URL}/AgregarComentarioATarea`,
      contenido,
      {
        params: { tareaId, usuarioId },
        headers: { "Content-Type": "application/json" },
      }
    );
  },
  // Actualizar un comentario
  updateComment(id, nuevoContenido) {
    return axios.put(`${API_BASE_URL}/ActualizarComentario`, nuevoContenido, {
      params: { id },
      headers: { "Content-Type": "application/json" },
    });
  },
  // Eliminar un comentario
  deleteComment(id) {
    return axios.delete(`${API_BASE_URL}/EliminarComentario`, {
      params: { id },
    });
  },
};
