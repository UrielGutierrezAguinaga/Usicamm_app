import React from 'react';
import './mediaprint.css'; // Importa el archivo CSS

const ComponenteImpresion = ({ item, onBack }) => {
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="reporte-container" style={{ color: 'white', padding: '10px', border: '1px solid rgb(221,201,163)', margin: '15px', borderRadius: '8px', fontSize:'93%'}}>
      <h1 style={{ margin: '10px', textAlign: 'center' }}>Reporte de Datos del Participante</h1>
      <div style={{ color: 'white', padding: '10px', border: '1px solid rgb(221,201,163)', margin: '10px', borderRadius: '8px', fontSize:'93%'}}>
          <p style={{marginLeft:'42%'}}><strong>Proceso de Cita</strong></p>
          <br /> <p><strong>CURP:</strong> {item[0]}</p>
          <br /><p><strong>Entidad Federativa:</strong> {item[1]}</p>
          <br /><p><strong>Nombre del Participante:</strong> {item[2]}</p>
          <br /><p><strong>Tipo de Valoración:</strong> {item[3]}</p>
          <br /><p><strong>Municipio:</strong> {item[4]}</p>
          <br /><p><strong>Tipo de Evaluación:</strong> {item[5]}</p>
      </div>
      <div style={{ color: 'white', padding: '10px', border: '1px solid rgb(221,201,163)', margin: '10px', borderRadius: '8px', fontSize:'93%'}}>
          <p style={{marginLeft:'42%'}}><strong>Proceso de Registro</strong></p>    
          <br /><p><strong>Formación docente pedagógica(Licenciatura):</strong> {item[6]}</p>
          <br /><p><strong>Formación docente pedagógica(Especialidad):</strong> {item[7]}</p>
          <br /><p><strong>Promedio:</strong> {item[8]}</p>
          <br /><p><strong>Horas de cursos extracurriculares:</strong> {item[9]}</p>
          <br /><p><strong>Tipo de Institución:</strong> {item[10]}</p>
          <br /><p><strong>Tipo de sostenimiento de la institución:</strong> {item[11]}</p>
          <br /><p><strong>Experiencia docente:</strong> {item[12]}</p>
          <br /><p><strong>Meses de ejercicio de la docencia:</strong> {item[13]}</p>
          <br /><p><strong>CENNI:</strong> {item[14]}</p>
      </div>
      <div style={{ color: 'white', padding: '10px', border: '1px solid rgb(221,201,163)', margin: '10px', borderRadius: '8px', fontSize:'93%'}}>
          <p style={{marginLeft:'42%'}}><strong>Proceso de Lista nominal</strong></p>
          <br /><p><strong>Constancia:</strong> {item[15]}</p>
          <br /><p><strong>Puntaje de promedio:</strong> {item[16]}</p>
          <br /><p><strong>Horas de cursos extracurriculares:</strong> {item[17]}</p>
          <br /><p><strong>Puntaje de cursos extracurriculares:</strong> {item[18]}</p>
          <br /><p><strong>Puntaje de experiencia docente:</strong> {item[19]}</p>
          <br /><p><strong>Constancia:</strong> {item[20]}</p>
          <br /><p><strong>Puntaje de apreciación de conocimientos:</strong> {item[21]}</p>
          <br /><p><strong>Puntaje final:</strong> {item[22]}</p>
          <br /><p><strong>Posición de ordenamiento:</strong> {item[23]}</p>    
      </div>
      <div style={{ color: 'white', padding: '10px', border: '1px solid rgb(221,201,163)', margin: '10px', borderRadius: '8px', fontSize:'93%'}}>
          <p style={{marginLeft:'42%'}}><strong>Proceso de Asignación</strong></p>
          <br /><p><strong>Asignación:</strong> {item[30]}</p>
          <br /><p><strong>Tipo de vacante:</strong> {item[31]}</p>
          <br /><p><strong>Código de Nombramiento:</strong> {item[32]}</p>
          <br /><p><strong>Clave de la plaza:</strong> {item[33]}</p> 
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={onBack} style={{
          backgroundColor: 'rgb(105, 28, 50)', 
          color: 'white', 
          border: 'none', 
          padding: '8px 15px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: '16px',
          marginTop: '15px',
          transition: 'background-color 0.3s ease',
          marginRight: '10px', // Espacio entre botones
        }}>
          Volver
        </button>
        <button onClick={handlePrint} style={{
          backgroundColor: 'rgb(105, 28, 50)', 
          color: 'white', 
          border: 'none', 
          padding: '8px 15px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: '16px',
          marginTop: '15px',
          transition: 'background-color 0.3s ease',
        }}>
          Imprimir
        </button>
        <h1 className="leyenda">Copia sin validez oficial, solo informativa para el Aspirante</h1>
      </div>
      
    </div>
 
);
};

export default ComponenteImpresion;
