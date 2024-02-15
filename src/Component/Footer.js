import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

function Footer() {
  return (
    <div>
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/services" className="nav-link px-2 text-body-secondary">Services</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
      <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2024 AltraVision, Inc</p>
  </footer>
</div>
    </div>
  )
}

export default Footer
