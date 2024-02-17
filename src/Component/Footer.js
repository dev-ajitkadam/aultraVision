import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="container-fluid footer">
        <footer className="py-3 text-light">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link px-2 text-white">Services</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-white">Contact</Link></li>
          </ul>
          <p className="text-center text-white">© 2024 AltraVision, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
