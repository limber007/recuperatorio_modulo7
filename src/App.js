import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dictionary from './screens/Dictionary/Dictionary';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginForm from './LoginForm';
import NotFound from './components/NotFound';  // Asegúrate de que este archivo exista

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />  {/* Manejo de rutas 404 */}
      </Routes>
    </div>
  );
}

export default App;
