import { Link } from "react-router-dom";
import './Footer.css'


export const Footer = () => {
  return (
<div className="container-fluid">
    <footer className="bg-dark text-light py-2 px-4 animate__animated animate__fadeInUp">
      
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Kodigo Music</h5>
            <p>Tu plataforma de música digital favorita. Escucha, explora y disfruta.</p>
          </div>
          <div className="col-md-3 col-sm-3 col-6">
            <h6>Enlaces rápidos</h6>
            <ul className="list-unstyled">
              <li><Link to="/home" className="text-light">Inicio</Link></li>
              <li><Link to="/library" className="text-light">Library</Link></li>
              <li><Link to="/contact" className="text-light">Contacto</Link></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-3 col-6">
            <h6>Síguenos</h6>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="https://facebook.com" className="text-light">
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://twitter.com" className="text-light">
                  <i className="bi bi-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://instagram.com" className="text-light">
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-secondary mt-1">
          <p className="mb-0">&copy; 2024 Kodigo Music. Todos los derechos reservados.</p>
        </div>

    </footer>
    </div>

  );
};
