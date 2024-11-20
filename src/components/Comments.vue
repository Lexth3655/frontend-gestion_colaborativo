<template>
    <div class="comments">
      <h2>Comentarios</h2>
  
      <!-- Formulario para agregar comentario -->
      <form @submit.prevent="addComment">
        <div>
          <textarea v-model="newComment" placeholder="Escribe un comentario"></textarea>
        </div>
        <button type="submit">Agregar Comentario</button>
      </form>
  
      <!-- Lista de comentarios -->
      <div v-if="comments.length != 0" class="comment-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <p><strong>{{ comment.usuario.nombre }}:</strong> {{ comment.contenido }}</p>
          <div>
            <button @click="editComment(comment.id, comment.contenido)">Editar</button>
            <button @click="deleteComment(comment.id)">Eliminar</button>
          </div>
        </div>
      </div>
  
      <div v-else>
        <p>No hay comentarios aún.</p>
      </div>
    </div>
  </template>
  
  <script>
  import commentsService from "/services/commentsService";
  
  export default {
    data() {
      return {
        comments: [], // Lista de comentarios
        newComment: "", // Nuevo comentario
        tareaId: 1, // ID de la tarea 
        usuarioId: 2, // ID del usuario 
      };
    },
    methods: {
      async fetchComments() {
        try {
          const response = await commentsService.getCommentsByTask(this.tareaId);
          this.comments = response.data;
        } catch (error) {
          console.error("Error al obtener comentarios:", error);
        }
      },
      async addComment() {
        if (!this.newComment.trim()) {
          alert("El comentario no puede estar vacío.");
          return;
        }
  
        try {
          await commentsService.addCommentToTask(this.tareaId, this.usuarioId, this.newComment);
          this.newComment = "";
          this.fetchComments(); // Recarga los comentarios
        } catch (error) {
          console.error("Error al agregar el comentario:", error);
        }
      },
      async editComment(commentId, currentContent) {
        const newContent = prompt("Edita tu comentario:", currentContent);
        if (newContent === null || newContent.trim() === "") {
          return; // Cancelado o vacío
        }
  
        try {
          await commentsService.updateComment(commentId, newContent);
          this.fetchComments(); // Recarga los comentarios
        } catch (error) {
          console.error("Error al actualizar el comentario:", error);
        }
      },
      async deleteComment(commentId) {
        if (!confirm("¿Estás seguro de eliminar este comentario?")) {
          return;
        }
  
        try {
          await commentsService.deleteComment(commentId);
          this.fetchComments(); // Recarga los comentarios
        } catch (error) {
          console.error("Error al eliminar el comentario:", error);
        }
      },
    },
    mounted() {
      this.fetchComments(); // Cargar los comentarios al montar el componente
    },
  };
  </script>
  
  <style scoped>
  .comments {
    padding: 20px;
  }
  .comment-list {
    margin-top: 20px;
  }
  .comment-item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    min-height: 60px;
    margin-bottom: 10px;
    padding: 10px;
  }
  button {
    margin-right: 10px;
    padding: 5px 10px;
  }
  </style>
  