// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './LoginForm.css';

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email inválido');
      return;
    }
    if (password !== 'mod7ReactUSIP') {
      setError('Password incorrecto');
      return;
    }

    dispatch({
      type: 'SET_CREDENTIALS',
      payload: { user, email, password }
    });

    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setUser('');       // Limpiar campos del formulario
    setEmail('');      // Limpiar campos del formulario
    setPassword('');   // Limpiar campos del formulario
    setShowModal(false); // Cerrar el modal
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ flexGrow: 1 }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{ marginLeft: '10px' }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button type="submit">Login</button>
          <a href="#" onClick={handleLogout}>Logout</a>
        </div>
        {error && <div className="error">{error}</div>}
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>¿Estás seguro de que quieres cerrar sesión?</p>
            <button onClick={confirmLogout}>Presionar para salir!!!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
