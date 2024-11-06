<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2>Iniciar sesión</h2>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Ingrese su correo"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Ingrese su contraseña"
          required
        />
      </div>
      <button type="submit" class="login-button">Ingresar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.email && this.password) {
        // Aquí  manejar la lógica de inicio de sesión (petición al backend, etc.)
        alert("Inicio de sesión exitoso!");
      } else {
        alert("Por favor, completa todos los campos.");
      }
    },
  },
};
</script>

<style scoped>
/* Fondo y contenedor principal */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  font-family: Arial, sans-serif;
}

/* Estilos del formulario */
.login-form {
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  width: 350px;
  backdrop-filter: blur(10px);
  text-align: center;
  color: #ffffff;
  transition: transform 0.3s;
}

.login-form:hover {
  transform: scale(1.05);
}

.login-form h2 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #e0e0e0;
}

/* Estilos de los grupos de entrada */
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  font-size: 0.9rem;
  color: #b0bec5;
  display: block;
  margin-bottom: 0.3rem;
}

.form-group input {
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transition: background 0.3s;
}

.form-group input::placeholder {
  color: #b0bec5;
}

.form-group input:focus {
  background: rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid #4dd0e1;
}

/* Estilo del botón */
.login-button {
  width: 100%;
  padding: 0.75rem;
  background: #4dd0e1;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-weight: bold;
}

.login-button:hover {
  background: #00bcd4;
  transform: scale(1.05);
}

.login-button:active {
  transform: scale(0.98);
}
</style>
