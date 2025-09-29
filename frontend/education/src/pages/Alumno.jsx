"use client";

import { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import NavbarAlumno from "../components/alumnoNavbar";
import SidebarAlumno from "../components/alumnoSidebar";
import PostListEstudiante from "../components/alumnoPostform";
import Contacts from "../components/Contacts";
import "../styles/Alumno.css";

const Estudiante = () => {
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Simulación inicial de publicaciones si no hay datos en localStorage
    const publicacionesSimuladas = [
      {
        id: 1,
        text: "Estimados estudiantes, les comparto el material para la próxima clase. Por favor revisen el documento adjunto y vengan preparados con preguntas.",
        attachments: [],
        createdAt: new Date().toISOString(),
        author: {
          name: "Profesor Martínez",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
        },
        comments: [
          {
            id: 1,
            text: "Gracias profesor, revisaré el material hoy mismo.",
            author: "Ana García",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            date: new Date().toISOString()
          }
        ]
      },
      {
        id: 2,
        text: "Recuerden que la entrega del proyecto final es el próximo viernes. Si tienen dudas, pueden escribirme por el chat o preguntar en la próxima clase.",
        attachments: [],
        createdAt: new Date().toISOString(),
        author: {
          name: "Profesor Martínez",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
        },
        comments: []
      }
    ];

    setPosts(publicacionesSimuladas);
  }, []);

  const addComment = (postId, commentText) => {
    const nuevoComentario = {
      id: Date.now(),
      text: commentText,
      author: user?.email || "Estudiante",
      avatar: user?.avatar || "https://randomuser.me/api/portraits/men/32.jpg",
      date: new Date().toISOString()
    };

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, nuevoComentario] }
          : post
      )
    );
  };

  if (!user || !user.alumno) {
    return (
      <div className="unauthorized-message">
        <h2>Acceso no autorizado</h2>
        <p>Esta vista está reservada para usuarios con rol estudiante.</p>
      </div>
    );
  }

  return (
    <div className="estudiante-page">
      <NavbarAlumno />
      <Container fluid className="content-container">
        <div className="content-wrapper">
          {/* Sidebar Izquierdo - Opciones */}
          <Col md={3} className="sidebar-left-col">
            <SidebarAlumno />
          </Col>

          {/* Sección central - Lista de publicaciones */}
          <Col md={6} className="posts-section-col">
            <div className="posts-content">
              <PostListEstudiante posts={posts} addComment={addComment} />
            </div>
          </Col>

          {/* Sidebar Derecho - Contactos */}
          <Col md={3} className="sidebar-right-col">
            <Contacts />
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Estudiante;
