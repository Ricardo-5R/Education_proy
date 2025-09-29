import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsersCog,
  FaHome
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Admin.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || !user.admin) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="admin-page">
      <Container fluid className="content-container">
        <Row>
          {/* Sidebar de navegación */}
          <Col md={2} className="admin-sidebar">
            <h4 className="sidebar-title">Admin</h4>
            <ul className="sidebar-menu">
              <li>
                <Link to="/admin" className="sidebar-link">
                  <FaHome /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/registro-estudiante" className="sidebar-link">
                  <FaUserGraduate /> Estudiantes
                </Link>
              </li>
              <li>
                <Link to="/registro-docente" className="sidebar-link">
                  <FaChalkboardTeacher /> Docentes
                </Link>
              </li>
              <li>
                <Link to="/grupos" className="sidebar-link">
                  <FaUsersCog /> Grupos
                </Link>
              </li>
            </ul>
          </Col>

          {/* Panel principal */}
          <Col md={10} className="admin-main-content">
            <div className="welcome-panel">
              <h2>Bienvenido al Panel de Administración</h2>
              <p>
                Desde aquí puedes gestionar estudiantes, docentes y asignación
                de grupos.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPanel;
