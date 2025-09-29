import { toast } from "react-toastify";

const STORAGE_KEY = "grupos";

export const GroupService = {
  async register(name, docenteId) {
    try {
      const grupos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      // Validar si ya existe un grupo con el mismo nombre y docente
      const existe = grupos.some(g => g.nombre === name && g.docenteId === docenteId);
      if (existe) throw new Error("Ya existe un grupo con ese nombre para el docente");

      const nuevoGrupo = {
        id: Date.now().toString(),
        nombre: name,
        docenteId,
        creadoEn: new Date().toISOString()
      };

      grupos.push(nuevoGrupo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(grupos));

      toast.success("Grupo Registrado Exitosamente");
      return nuevoGrupo;
    } catch (error) {
      toast.error(error.message || "Error al registrar el grupo");
      console.error("Error al registrar grupo:", error);
    }
  },

  async getAll() {
    try {
      const grupos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      return grupos;
    } catch (error) {
      toast.error("Error al obtener los grupos");
      throw new Error("Error al obtener los grupos");
    }
  },

  async update(id, data) {
    try {
      const grupos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const index = grupos.findIndex(g => g.id === id);
      if (index === -1) throw new Error("Grupo no encontrado");

      grupos[index] = { ...grupos[index], ...data, actualizadoEn: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(grupos));

      toast.success("Grupo actualizado exitosamente");
      return grupos[index];
    } catch (error) {
      toast.error(error.message || "Error al actualizar el grupo");
      throw new Error("Error al actualizar el grupo");
    }
  },

  async delete(id) {
    try {
      const grupos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const nuevosGrupos = grupos.filter(g => g.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosGrupos));

      toast.success("Grupo Eliminado Exitosamente");
    } catch (error) {
      toast.error("Error al eliminar el grupo");
      throw new Error("Error al eliminar el grupo");
    }
  }
};
