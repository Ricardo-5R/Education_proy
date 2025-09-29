"use client";
import {
  FaClipboardList,
  FaGraduationCap,
  FaChartBar,
  FaComments,
  FaHome
} from "react-icons/fa";
import "../stylescomponents/sidebar.css";

const SidebarAlumno = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Validar si hay sesión activa y si el usuario es alumno
  if (!user || !user.alumno) return null;

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Panel Estudiante</h3>
      </div>

      <div className="sidebar">
        <ul className="sidebar-menu">
          {/* Inicio */}
          <li className="sidebar-item active">
            <div
              onClick={() => handleNavigation("/alumno")}
              className="sidebar-link"
            >
              <div className="sidebar-icon">
                <FaHome />
              </div>
              <div className="sidebar-text">Inicio</div>
            </div>
          </li>

          {/* Actividades */}
          <li className="sidebar-item">
            <div
              onClick={() => handleNavigation("/actividades-estudiante")}
              className="sidebar-link"
            >
              <div className="sidebar-icon">
                <FaClipboardList />
              </div>
              <div className="sidebar-text">Actividades</div>
            </div>
          </li>

          {/* Clases */}
          <li className="sidebar-item">
            <div
              onClick={() => handleNavigation("/clases-estudiante")}
              className="sidebar-link"
            >
              <div className="sidebar-icon">
                <FaGraduationCap />
              </div>
              <div className="sidebar-text">Clases</div>
            </div>
          </li>

          {/* Chats */}
          <li className="sidebar-item">
            <div
              onClick={() => handleNavigation("/chats-estudiante")}
              className="sidebar-link"
            >
              <div className="sidebar-icon">
                <FaComments />
              </div>
              <div className="sidebar-text">Chats</div>
            </div>
          </li>

          {/* Calificaciones */}
          <li className="sidebar-item">
            <div
              onClick={() => handleNavigation("/calificaciones-estudiante")}
              className="sidebar-link"
            >
              <div className="sidebar-icon">
                <FaChartBar />
              </div>
              <div className="sidebar-text">Calificaciones</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAlumno;
