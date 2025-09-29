import { Card, Button } from "react-bootstrap";
import {
  FaClock,
  FaDownload,
  FaThumbsUp,
  FaComment,
  FaBookmark,
  FaFileAlt,
  FaEraser
} from "react-icons/fa";
import "../stylescomponents/postlist.css";

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="empty-posts">
        <div className="empty-icon">📝</div>
        <h3>No hay publicaciones aún</h3>
        <p>Crea tu primera publicación para compartir con tus estudiantes</p>
      </div>
    );
  }

  return (
    <div className="posts-list">
      {posts.map((post, index) => (
        <Card key={index} className="post-item">
          <Card.Body className="post-body">
            <div className="post-header">
              <div className="post-author">
                <img
                  src={
                    post.author?.avatar ||
                    "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  }
                  alt="Author"
                  className="author-avatar"
                />
                <div className="author-info">
                  <h5 className="author-name">
                    {post.author?.name || "Profesor"}
                  </h5>
                  <div className="post-meta">
                    <FaClock className="meta-icon" />
                    <span className="post-date">
                      {new Date(post.createdAt || post.date).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-options">
                <Button variant="link" className="options-btn">
                  <FaBookmark />
                </Button>
              </div>
            </div>

            <div className="post-content">
              <p className="post-text">{post.text}</p>

              {/* Mostrar archivos simulados */}
              {post.attachments && post.attachments.length > 0 && (
                <div className="download-container">
                  {post.attachments.map((file, i) => (
                    <div key={i} className="download-btn">
                      <FaFileAlt className="file-icon" />
                      <span className="file-name">{file.name}</span>
                      <FaDownload className="download-icon" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="post-actions">
              <Button variant="link" className="action-btn">
                <FaThumbsUp className="action-icon" />
                <span className="action-text">Me gusta</span>
              </Button>
              <Button variant="link" className="action-btn">
                <FaComment className="action-icon" />
                <span className="action-text">Comentar</span>
              </Button>
              <Button variant="link" className="action-btn">
                <FaEraser className="action-icon" />
                <span className="action-text">Borrar</span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
