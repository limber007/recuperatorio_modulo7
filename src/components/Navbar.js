// src/components/Navbar.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const { user, email } = useSelector((state) => state);

  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/forms">Login</a></li>
      </ul>
      {user && email ? (
        <div className="user-info">
          Bienvenido {user}: {email}
        </div>
      ) : (
        <div className="user-info">
          Bienvenido
        </div>
      )}
    </nav>
  );
};

export default Navbar;
