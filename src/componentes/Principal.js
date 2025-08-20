// Principal.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import imgProceso from '../Imagenes/libro.png';
import imgHerr    from '../Imagenes/herramienta.png';
import imgDocs    from '../Imagenes/documentos.png';
const ContenedorTitulo = styled.div`
  align-items: center;
  justify-content: flex-start;
  margin-left: 40%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    & > img {
      width: 30%;
      margin-left: 25%;
    }
  }
`;

const TituloCentrado = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  font-family: 'Montserrat', sans-serif;
  color: white;
`;

// colores
const fondo = 'rgb(16,49,43)';
const vino = 'rgb(105,28,50)';

const Wrapper = styled.div`
  background: ${fondo};
  color: white;
  font-family: 'Montserrat', sans-serif;
  min-height: calc(100vh - 120px);
`;

const Grid = styled.div`
  padding: 90px 40px 90px;  /* vamos colocando la serie de elementos abajo */
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 40px;
  justify-content: center;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 320px);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
  
  margin-bottom: 20px;
`;

const TituloCard = styled.h3`
  margin: 18px 0 10px;
  font-weight: 700;
`;

const Btn = styled.button`
  width: 70%;
  padding: 14px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: ${vino};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform .06s ease, opacity .15s ease;
  margin-top: 12px;

  &:active { transform: translateY(1px); }
  &:hover { opacity: .9; }
`;

export default function Principal() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ContenedorTitulo>
        
        <TituloCentrado>  Selección de actividades</TituloCentrado>
      </ContenedorTitulo>

      <Grid>
        {/* Tarjeta 1 */}
        <Card>
          <Img src={imgProceso} alt="Consultar proceso de participantes" />
          <TituloCard>Consultar proceso de participantes</TituloCard>
          <Btn onClick={() => navigate('/EleccionEducacion')}>Entrar</Btn>
        </Card>

        {/* Tarjeta 2 */}
        <Card>
          <Img src={imgHerr} alt="Consultar de Herramientas digitales PKJ" />
          <TituloCard>Consultar de Herramientas digitales PKJ</TituloCard>
          <Btn onClick={() => navigate('/Herramientas')}>Entrar</Btn>
        </Card>

        {/* Tarjeta 3 */}
        <Card>
          <Img src={imgDocs} alt="Consultar documentos de la DGA" />
          <TituloCard>Consultar documentos de la DGA</TituloCard>
          <Btn onClick={() => navigate('/documentos')}>Entrar</Btn>
        </Card>
      </Grid>
    </Wrapper>
  );
}