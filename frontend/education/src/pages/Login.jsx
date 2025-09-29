const handleSignUp = async (e) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
    const existingUsers = JSON.parse(localStorage.getItem("mockUsers")) || [];

    const alreadyExists = existingUsers.some(u => u.email === formData.email);
    if (alreadyExists) throw new Error("Este correo ya está registrado");

    const newUser = {
      ...formData,
      id: Date.now(),
      group
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("mockUsers", JSON.stringify(updatedUsers));

    setIsSignUp(false);
    alert("Registro exitoso! Ahora puedes iniciar sesión.");
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
    const storedUsers = JSON.parse(localStorage.getItem("mockUsers")) || [];

    const user = storedUsers.find(
      u => u.email === loginData.email && u.password === loginData.password
    );

    if (!user) throw new Error("Credenciales inválidas");

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
