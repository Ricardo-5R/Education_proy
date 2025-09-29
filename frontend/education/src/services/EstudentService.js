import { toast } from "react-toastify";

const STORAGE_KEY = "estudiantes";

export const EstudentService = {
  async register(name, lastName, email, password) {
    try {
      const estudiantes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      // Validar si el email ya existe
      const existe = estudiantes.some(e => e.email === email);
      if (existe) throw new Error("El correo ya está registrado");

      const nuevoEstudiante = {
        id: Date.now().toString(),
        NombreCompleto: `${name} ${lastName}`,
        email,
        password,
        creadoEn: new Date().toISOString()
      };

      estudiantes.push(nuevoEstudiante);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estudiantes));

      toast.success("Estudiante Registrado Exitosamente");
      return nuevoEstudiante;
    } catch (error) {
      toast.error(error.message || "Error al registrar el estudiante");
      console.error("Error al registrar estudiante:", error);
    }
  },

  async getAll() {
    try {
      const estudiantes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      return estudiantes;
    } catch (error) {
      toast.error("Error al obtener los estudiantes");
      throw new Error("Error al obtener los estudiantes");
    }
  },

  async update(id, data) {
    try {
      const estudiantes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const index = estudiantes.findIndex(e => e.id === id);
      if (index === -1) throw new Error("Estudiante no encontrado");

      estudiantes[index] = { ...estudiantes[index], ...data, actualizadoEn: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estudiantes));

      toast.success("Estudiante actualizado exitosamente");
      return estudiantes[index];
    } catch (error) {
      toast.error(error.message || "Error al actualizar el estudiante");
      throw new Error("Error al actualizar el estudiante");
    }
  },

  async delete(id) {
    try {
      const estudiantes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const nuevosEstudiantes = estudiantes.filter(e => e.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosEstudiantes));

      toast.success("Estudiante Eliminado Exitosamente");
    } catch (error) {
      toast.error("Error al eliminar el estudiante");
      throw new Error("Error al eliminar el estudiante");
    }
  }
};
