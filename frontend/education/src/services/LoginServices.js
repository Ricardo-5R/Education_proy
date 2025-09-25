// src/services/LoginService.js

const usuariosSimulados = [
  { email: "admin@demo.com", password: "admin123", alumno: false, docente: false },
  { email: "docente@demo.com", password: "docente123", alumno: false, docente: true },
  { email: "alumno@demo.com", password: "alumno123", alumno: true, docente: false }
];

export const LoginService = {
  async login(email, password) {
    const user = usuariosSimulados.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("Credenciales inválidas");

    const token = "fake-token-" + Date.now();
    return { token, user };
  },

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return { success: true };
  },

  async validateToken() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token || !user) return null;
    return { token, user };
  }
};
