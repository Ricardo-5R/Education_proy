import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaGraduationCap,
  FaCalendarAlt,
  FaUsers,
  FaBook,
  FaChartBar,
  FaCog,
  FaComments,
} from "react-icons/fa";
import "../stylescomponents/sidebar.css";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Validar si hay sesión activa y si el usuario es docente
  if (!user || !user.docente) return null;

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Panel Docente</h3>
      </div>

      <div className="sidebar">
        <ul className="sidebar-menu">
          {/* Actividades */}
          <li className="sidebar-item">
            <Link to="/actividades" className="sidebar-link">
              <div className="sidebar-icon">
                <FaClipboardList />
              </div>
              <div className="sidebar-text">Actividades</div>
            </Link>
          </li>

          {/* Clases */}
          <li className="sidebar-item">
            <Link to="/clases" className="sidebar-link">
              <div className="sidebar-icon">
                <FaGraduationCap />
              </div>
              <div className="sidebar-text">Clases</div>
            </Link>
          </li>

          {/* Chats */}
          <li className="sidebar-item">
            <Link to="/chats" className="sidebar-link">
              <div className="sidebar-icon">
                <FaComments />
              </div>
              <div className="sidebar-text">Chats</div>
            </Link>
          </li>

          {/* Estudiantes */}
          <li className="sidebar-item">
            <Link to="/estudiantes" className="sidebar-link">
              <div className="sidebar-icon">
                <FaUsers />
              </div>
              <div className="sidebar-text">Estudiantes</div>
            </Link>
          </li>

          {/* Grupos */}
          <li className="sidebar-item">
            <Link to="/grupos" className="sidebar-link">
              <div className="sidebar-icon">
                <FaBook />
              </div>
              <div className="sidebar-text">Grupos</div>
            </Link>
          </li>

          {/* Publicaciones */}
          <li className="sidebar-item">
            <Link to="/publicaciones" className="sidebar-link">
              <div className="sidebar-icon">
                <FaChartBar />
              </div>
              <div className="sidebar-text">Publicaciones</div>
            </Link>
          </li>

          {/* Configuración */}
          <li className="sidebar-item">
            <Link to="/configuracion" className="sidebar-link">
              <div className="sidebar-icon">
                <FaCog />
              </div>
              <div className="sidebar-text">Configuración</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
