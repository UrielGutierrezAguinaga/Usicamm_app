// InicioSesion.js
import React from "react";
import acceso from "../Imagenes/acceso.png"; // imagen

export default function InicioSesion() {
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
      {/* imagen de inicio de sesión */}
      <img
        src={acceso} 
        alt="Logo institucional"
        style={{ marginBottom: "20px", borderRadius: "4px", maxWidth: "100%" }}
      />

      {/* Usuario */}
      <input
        type="text"
        placeholder="Usuario"
        style={{
          display: "block",
          width: "90%",
          margin: "10px auto",
          padding: "14px",
          fontSize: "16px",
          border: "1px solid rgba(255, 255, 255, 1)",   // dorado institucional
          borderRadius: "4px",
          color: "white",
          fontWeight: "bold"
        }}
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        style={{
          display: "block",
          width: "90%",
          margin: "10px auto",
          padding: "14px",
          fontSize: "16px",
          border: "1px solid rgba(255, 255, 255, 1)",   // dorado institucional
          borderRadius: "4px",
          color: "white",
          fontWeight: "bold"
        }}
      />

      {/* Botones */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        <button style={{
          flex: 1,
          marginRight: "10px",
          padding: "14px",
          fontSize: "18px",
          border: "none",  
          borderRadius: "4px",
          background: "rgb(105,28,50)",             // fondo transparente
          color: "rgb(255,255,255)",              // texto dorado
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Acerca de
        </button>
        <button style={{
          flex: 1,
          marginLeft: "10px",
          padding: "14px",
          fontSize: "18px",
          border: "none",
          borderRadius: "4px",
          background: "rgb(105,28,50)",           // vino institucional
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