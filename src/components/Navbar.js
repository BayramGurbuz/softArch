import React, { useState } from 'react';
import '../ui/styles.css';

function Navbar() {
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    // Çıkış yapma işlemleri
    console.log('Çıkış yapıldı');
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="user-icon" onClick={toggleLogout}>
        <i className="fas fa-user-circle"></i>
        {showLogout && (
          <div className="logout-button" onClick={handleLogout}>
            Çıkış Yap
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;