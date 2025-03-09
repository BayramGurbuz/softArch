import React from 'react';
import '../ui/styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        {/* Logo */}
      </div>
      <div>
        <a href="/products">Products</a>
        <a href="/solutions">Solutions</a>
        <a href="/community">Community</a>
        <a href="/resources">Resources</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="profile-icon">
        {/* Profil ikonu */}
      </div>
    </nav>
  );
}

export default Navbar;