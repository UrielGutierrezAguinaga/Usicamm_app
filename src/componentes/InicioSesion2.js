// src/componentes/InicioSesion.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import acceso from "../Imagenes/acceso.png";

const API_BASE = "http://100.107.118.36:5000"; // cambia esta IP si usas otra red o puerto

export default function InicioSesion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const respuesta = await axios.post(`${API_BASE}/login`, {
        username,
        password,
      });

      if (respuesta.data.mensaje === "Login exitoso") {
        setMensaje("✅ Login exitoso");

        // Redirige al inicio después de 1.2 segundos
        setTimeout(() => {
          navigate("/Principal"); // Esto te lleva a <App /> => <Principal />
        }, 1200);
      } else {
        setMensaje(" Credenciales incorrectas");
      }
    } catch (error) {
      setMensaje("Error de red o servidor no disponible.");
    }
  };

  return (
    <div style={{
      width: "350px",
      margin: "160px auto",
      padding: "20px",
      borderRadius: "8px",
      background: "rgb(16,49,43)",
      textAlign: "center",
      color: "white",
      fontFamily: "Montserrat, sans-serif"
    }}>
      <img
        src={acceso}
        alt="Logo institucional"
        style={{ marginBottom: "20px", borderRadius: "4px", maxWidth: "100%" }}
      />

      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          display: "block",
          width: "90%",
          margin: "10px auto",
          padding: "14px",
          fontSize: "16px",
          border: "1px solid rgba(255, 255, 255, 1)",
          borderRadius: "4px",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "transparent"
        }}
      />

      <input                                                                                   InicioSesion.js                                                                                              
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          width: "90%",
          margin: "10px auto",
          padding: "14px",
          fontSize: "16px",
          border: "1px solid rgba(255, 255, 255, 1)",
          borderRadius: "4px",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "transparent"
        }}
      />

      {mensaje && (
        <p style={{ marginTop: "10px", fontWeight: "bold", color: "rgb(221,201,163)" }}>
          {mensaje}
        </p>
      )}

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        <button style={{
          flex: 1,
          marginRight: "10px",
          padding: "14px",
          fontSize: "18px",
          border: "none",
          borderRadius: "4px",
          background: "rgb(105,28,50)",
          color: "rgb(255,255,255)",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Acerca de
        </button>

        <button onClick={handleLogin} style={{
          flex: 1,
          marginLeft: "10px",
          padding: "14px",
          fontSize: "18px",
          border: "none",
          borderRadius: "4px",
          background: "rgb(105,28,50)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Entrar
        </button>
      </div>
    </div>
  );
}
