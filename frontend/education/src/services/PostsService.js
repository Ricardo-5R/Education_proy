const STORAGE_KEY = "publicaciones";

export default class PostsService {
  static async create(postData, attachments = [], token) {
    try {
      const publicaciones = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      const nuevaPublicacion = {
        id: Date.now().toString(),
        ...postData,
        attachments: attachments.map((file, i) => ({
          name: file.name || `archivo_${i}`,
          size: file.size || 0,
          type: file.type || "application/octet-stream"
        })),
        createdAt: new Date().toISOString(),
        token
      };

      publicaciones.push(nuevaPublicacion);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(publicaciones));

      return nuevaPublicacion;
    } catch (error) {
      throw new Error("Error al crear la publicación");
    }
  }

  static async update(postId, postData, token) {
    try {
      const publicaciones = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const index = publicaciones.findIndex(p => p.id === postId);
      if (index === -1) throw new Error("Publicación no encontrada");

      publicaciones[index] = {
        ...publicaciones[index],
        ...postData,
        updatedAt: new Date().toISOString()
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(publicaciones));
      return publicaciones[index];
    } catch (error) {
      throw new Error("Error al actualizar la publicación");
    }
  }

  static async delete(postId, token) {
    try {
      const publicaciones = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const nuevas = publicaciones.filter(p => p.id !== postId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevas));
      return { message: "Publicación eliminada" };
    } catch (error) {
      throw new Error("Error al eliminar la publicación");
    }
  }

  static async getForGroup(groupId, token) {
    try {
      const publicaciones = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      return publicaciones.filter(p => p.groupId === groupId);
    } catch (error) {
      throw new Error("Error al obtener publicaciones del grupo");
    }
  }

  static async getByTeacher(teacherId, token) {
    try {
      const publicaciones = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      return publicaciones.filter(p => p.teacherId === teacherId);
    } catch (error) {
      throw new Error("Error al obtener publicaciones del docente");
    }
  }

  static async getById(postId, token) {
    try {
      const publicaciones = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const post = publicaciones.find(p => p.id === postId);
      if (!post) throw new Error("Publicación no encontrada");
      return post;
    } catch (error) {
      throw new Error("Error al obtener la publicación");
    }
  }
}
