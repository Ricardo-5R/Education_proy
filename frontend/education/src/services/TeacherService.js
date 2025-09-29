import { toast } from "react-toastify";

const STORAGE_KEY = "docentes";

export const TeacherService = {
  async register(name, lastName, email, password) {
    try {
      const docentes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      // Validar si el email ya existe
      const existe = docentes.some(d => d.email === email);
      if (existe) throw new Error("El correo ya está registrado");

      const nuevoDocente = {
        id: Date.now(),
        NombreCompleto: `${name} ${lastName}`,
        email,
        password
      };

      docentes.push(nuevoDocente);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(docentes));

      toast.success("Docente registrado exitosamente");
      return nuevoDocente;
    } catch (error) {
      toast.error(error.message || "Error al registrar el docente");
      console.error("Error al registrar docente:", error);
    }
  },

  async getAll() {
    try {
      const docentes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      return docentes;
    } catch (error) {
      toast.error("Error al obtener los docentes");
      throw new Error("Error al obtener los docentes");
    }
  },

  async update(id, data) {
    try {
      const docentes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const index = docentes.findIndex(d => d.id === id);
      if (index === -1) throw new Error("Docente no encontrado");

      docentes[index] = { ...docentes[index], ...data };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(docentes));

      toast.success("Docente actualizado exitosamente");
      return docentes[index];
    } catch (error) {
      toast.error(error.message || "Error al actualizar el docente");
      throw new Error("Error al actualizar el docente");
    }
  },

  async delete(id) {
    try {
      const docentes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const nuevosDocentes = docentes.filter(d => d.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosDocentes));

      toast.success("Docente eliminado exitosamente");
    } catch (error) {
      toast.error("Error al eliminar el docente");
      throw new Error("Error al eliminar el docente");
    }
  }
};
