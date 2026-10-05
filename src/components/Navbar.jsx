import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          TUREVIA<span>BARBERSHOP</span>
        </a>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>

          <a href="#barbers" onClick={() => setIsMenuOpen(false)}>
            Barbers
          </a>

          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </a>

          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>

        <a href="#booking" className="booking-button">
          Book Now
        </a>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;