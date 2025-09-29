const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
    // Simulación de usuarios válidos
    const mockUsers = [
      { email: "admin@demo.com", password: "admin123", role: "admin", id: 1 },
      { email: "docente@demo.com", password: "docente123", role: "docente", id: 2 },
      { email: "alumno@demo.com", password: "alumno123", role: "alumno", id: 3 }
    ];

    const user = mockUsers.find(
      u => u.email === loginData.email && u.password === loginData.password
    );

    if (!user) throw new Error("Credenciales inválidas");

    // Simular token y guardar en localStorage
    const token = "fake-token-" + user.role;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userId", user.id);

    switch (user.role) {
      case "admin":
        window.location.href = "/admin";
        break;
      case "docente":
        window.location.href = "/docente";
        break;
      default:
        window.location.href = "/chats";
    }
  } catch (err) {
    setError(err.message || "Error al iniciar sesión");
  } finally {
    setIsLoading(false);
  }
};
