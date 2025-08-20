import React, { Component } from 'react';
import Catalogo from '../componentes/sheet modulo de apoyo al docente.csv'; // Importa el archivo CSV
import './lectura.css'; // Importa el archivo CSS
import styled from 'styled-components';
import ComponenteImpresion from './ComponenteImpresion'

const fondo = "rgb(16,49,43)";
const vino = "rgb(105,28,50)";
const dorado = "rgb(221,201,163)";

const ContenedorBoton = styled.div`
  display: flex;
  justify-content: flex-start; /* 👈 lo manda a la izquierda */
  margin-bottom: 16px;         /* opcional: espacio abajo */
`;

const Btn = styled.button`
  text-align: left;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 16px;
  border: none;
  background: ${vino};
  color: white;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,.35);
  opacity: ${p => (p.disabled ? .6 : 1)};
  pointer-events: ${p => (p.disabled ? "none" : "auto")};
  transition: transform .06s, opacity .15s;
  &:active { transform: translateY(1px); }

`;
 
const ContenedorTitulo = styled.div`  
  align-items: center; /* Centra verticalmente los elementos */
  justify-content: flex-start;
  margin-left: 35%; /* Espacio del 3.5% a la izquierda */
  margin-top: 20px; /* Puedes ajustar el valor según sea necesario */
  margin-bottom: 20px; /* Puedes ajustar el valor según sea necesario */
 
  @media (max-width: 768px) {
    margin-left: 0; /* Elimina el margen izquierdo en pantallas pequeñas */
    width: 100%; /* Ocupa todo el ancho del contenedor en pantallas pequeñas */
    
    & > img {
        width: 30%; /* Ajusta el ancho de la imagen al 30% del contenedor */
        margin-left: 25%; /* Agrega un margen a la izquierda de la imagen en pantallas pequeñas */
    }
  }
`;

const TituloCentrado = styled.h1`
  /* Importa la fuente Montserrat desde Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  font-family: 'Montserrat', sans-serif;
  color: white;
  margin-top:1%;
  margin-bottom: 1%; 
`;

class Lectura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterText1: '', // Estado para filtrar la "Columna 1"
      hiddenColumns: {
        4: true, 5: true, 6: true, 7: true, 8: true, 9: true,  
        11: true, 12: true, 13: true, 14: true, 15: true, 16: true, 17: true, 18: true, 19: true, 20: true,
        21: true, 22: true, 23: true, 24: true, 25: true, 26: true
      }, // Estado para las columnas ocultas
      itemsToShow: 50 // Número inicial de elementos a mostrar
    };
  }
  handleBack = () => {
    this.setState({ selectedItem: null });
  }
  

  handleFilterTextChange1 = (event) => {
    const filterText1 = event.target.value;
    this.setState({ filterText1 });

    if (filterText1) {
      // Accede al contenido del archivo CSV importado cuando se ingresa el filtro
      fetch(Catalogo)
        .then((response) => response.text())
        .then((data) => {
          const lines = data.split('\n');
          const items = [];
          for (let i = 0; i < lines.length; i++) {
            if (lines[i]) {
              const rowData = lines[i].split('*,').map((item) => item.replace(/\*/g, '')); // Divide los datos por el carácter '*' y elimina '*'
              items.push(rowData); // Agrega el arreglo de datos a items
            }
          }
          const filteredData = items.filter(item =>
            item.length >= 2 &&
            item[0].toLowerCase().includes(filterText1.toLowerCase())   // DEFINICIÓN DE COLUMNA A BUSCAR
          );
          this.setState({ data: filteredData, itemsToShow: 50 }); // Reinicia itemsToShow cuando se aplica un filtro
        })
        .catch((error) => {
          console.error("Error al cargar la Base de Datos:", error);
        });
    } else {
      this.setState({ data: [], itemsToShow: 50 });
    }
  }

  toggleColumns = (colIndices) => {
    this.setState(prevState => {
      const hiddenColumns = { ...prevState.hiddenColumns };
      colIndices.forEach(index => {
        hiddenColumns[index] = !hiddenColumns[index];
      });
      return { hiddenColumns };
    });
  }

  loadMore = () => {
    this.setState((prevState) => ({
      itemsToShow: prevState.itemsToShow + 10
    }));
  }

  render() {
    const { data, filterText1, hiddenColumns, itemsToShow, selectedItem } = this.state;

    // Si hay un item seleccionado, muestra el componente de impresión
    if (selectedItem) {
      return <ComponenteImpresion item={selectedItem} onBack={this.handleBack} />;
    }

    const displayedData = data.slice(0, itemsToShow);
  const onRegresar = () => {
    window.history.back(); //  página anterior
  };

    return (
      <div>
   
         <ContenedorBoton>
            <Btn onClick={onRegresar}>⬅ Regresar</Btn>
        </ContenedorBoton>
       
        <ContenedorTitulo>
          <TituloCentrado>EDUCACIÓN BÁSICA 2023</TituloCentrado>
        </ContenedorTitulo>

        <div>
          <div className="filter-container">
            <div>
              <h3>Filtrar por Clave Única de Registro:</h3>
              <input
                type="text"
                placeholder="Ingrese la Clave Única de Registro"
                value={filterText1}
                onChange={this.handleFilterTextChange1}
              />
            </div>
          </div>
        </div>
       
        <div className="table-container">
          {!filterText1 && (
            <h3 className='mensaje'>Ingresa una Clave Única de Registro de Población</h3>
          )}
          {filterText1 && data.length === 0 && (
            <h3 className='mensaje'>No se encontró ningún Clave Única de Registro de Población ...</h3>
          )}
          {filterText1 && data.length > 0 && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th className={hiddenColumns[0] ? 'hidden' : ''}>CLAVE ÚNICA DE POBLACIÓN</th>
                    <th className={hiddenColumns[1] ? 'hidden' : ''}>ENTIDAD</th>
                    <th className={hiddenColumns[2] ? 'hidden' : ''}>NOMBRE DEL ASPIRANTE</th>
                    <th className={hiddenColumns[3] ? 'hidden' : ''}>TIPO DE VALORACIÓN</th>
                    <th className={hiddenColumns[4] ? 'hidden' : ''}>MUNICIPIO</th>
                    <th className={hiddenColumns[5] ? 'hidden' : ''}>TIPO DE EVALUCACIÓN</th>
                    <th className={hiddenColumns[6] ? 'hidden' : ''}>FORM_LDOC</th>
                    <th className={hiddenColumns[7] ? 'hidden' : ''}>FORM_PDOC</th>
                    <th className={hiddenColumns[8] ? 'hidden' : ''}>PROMEDIO</th>
                    <th className={hiddenColumns[9] ? 'hidden' : ''}>H_CURSOS</th>
                    <th className={hiddenColumns[10] ? 'hidden' : ''}>TIPO DE INSTITUCIÓN</th>
                    <th className={hiddenColumns[11] ? 'hidden' : ''}>TIPO_SOS</th>
                    <th className={hiddenColumns[12] ? 'hidden' : ''}>PRAC_DOC</th>
                    <th className={hiddenColumns[13] ? 'hidden' : ''}>EJE_DOC</th>
                    <th className={hiddenColumns[14] ? 'hidden' : ''}>CENNI</th>
                    <th className={hiddenColumns[15] ? 'hidden' : ''}>CONSTANCIA</th>
                    <th className={hiddenColumns[16] ? 'hidden' : ''}>PROMEDIO</th>
                    <th className={hiddenColumns[17] ? 'hidden' : ''}>P_PROM</th>
                    <th className={hiddenColumns[18] ? 'hidden' : ''}>H_CURSOS</th>
                    <th className={hiddenColumns[19] ? 'hidden' : ''}>P_HCURSOS</th>
                    <th className={hiddenColumns[20] ? 'hidden' : ''}>PRAC_DOC</th>
                    <th className={hiddenColumns[21] ? 'hidden' : ''}>EJE_DOC</th>    
                    <th className={hiddenColumns[22] ? 'hidden' : ''}>P_ED</th>
                    <th className={hiddenColumns[23] ? 'hidden' : ''}>CONSTANCIA</th>
                    <th className={hiddenColumns[24] ? 'hidden' : ''}>P_ACA</th>
                    <th className={hiddenColumns[25] ? 'hidden' : ''}>P_FIN</th>
                    <th className={hiddenColumns[26] ? 'hidden' : ''}>POS_ORDEN</th>
                    <th></th>
                     
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map((item, index) => (
                    <tr key={index}>
                      <td>{item[0]}</td>
                      <td className={hiddenColumns[1] ? 'hidden' : ''}>{item[1]}</td>
                      <td className={hiddenColumns[2] ? 'hidden' : ''}>{item[2]}</td>
                      <td className={hiddenColumns[3] ? 'hidden' : ''}>{item[3]}</td>
                      <td className={hiddenColumns[4] ? 'hidden' : ''}>{item[4]}</td>
                      <td className={hiddenColumns[5] ? 'hidden' : ''}>{item[5]}</td>
                      <td className={hiddenColumns[6] ? 'hidden' : ''}>{item[6]}</td>
                      <td className={hiddenColumns[7] ? 'hidden' : ''}>{item[7]}</td>
                      <td className={hiddenColumns[8] ? 'hidden' : ''}>{item[8]}</td>
                      <td className={hiddenColumns[9] ? 'hidden' : ''}>{item[9]}</td>
                      <td className={hiddenColumns[10] ? 'hidden' : ''}>{item[10]}</td>
                      <td className={hiddenColumns[11] ? 'hidden' : ''}>{item[11]}</td>
                      <td className={hiddenColumns[12] ? 'hidden' : ''}>{item[12]}</td>
                      <td className={hiddenColumns[13] ? 'hidden' : ''}>{item[13]}</td>
                      <td className={hiddenColumns[14] ? 'hidden' : ''}>{item[14]}</td>
                      <td className={hiddenColumns[15] ? 'hidden' : ''}>{item[15]}</td>
                      <td className={hiddenColumns[16] ? 'hidden' : ''}>{item[16]}</td>
                      <td className={hiddenColumns[17] ? 'hidden' : ''}>{item[17]}</td>
                      <td className={hiddenColumns[18] ? 'hidden' : ''}>{item[18]}</td>
                      <td className={hiddenColumns[19] ? 'hidden' : ''}>{item[19]}</td>
                      <td className={hiddenColumns[20] ? 'hidden' : ''}>{item[20]}</td>
                      <td className={hiddenColumns[21] ? 'hidden' : ''}>{item[21]}</td>
                      <td className={hiddenColumns[22] ? 'hidden' : ''}>{item[22]}</td>
                      <td className={hiddenColumns[23] ? 'hidden' : ''}>{item[23]}</td>
                      <td className={hiddenColumns[24] ? 'hidden' : ''}>{item[24]}</td>
                      <td className={hiddenColumns[25] ? 'hidden' : ''}>{item[25]}</td>
                      <td className={hiddenColumns[26] ? 'hidden' : ''}>{item[26]}</td>
                      
                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        <button 
                          onClick={() => this.setState({ selectedItem: item })}
                          style={{
                             
                            backgroundColor: 'rgb(221, 201, 163)', 
                            color: 'white', 
                            border: 'none', 
                            padding: '8px 15px', 
                            borderRadius: '5px', 
                            cursor: 'pointer',
                            fontFamily: "'Montserrat', sans-serif", 
                            fontSize: '16px',
                            marginTop: '15px',
                            transition: 'background-color 0.3s ease',
                          }}
                        >
                          Reporte
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {itemsToShow < data.length && (
                <button onClick={this.loadMore}
                style={{
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
                }}
                >Cargar más</button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Lectura;
