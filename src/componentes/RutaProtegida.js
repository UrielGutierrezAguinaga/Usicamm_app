// src/componentes/RutaProtegida.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  const sesionActiva = localStorage.getItem('usuarioAutenticado') === 'true';

  return sesionActiva ? children : <Navigate to="/InicioSesion" />;
};

export default RutaProtegida;