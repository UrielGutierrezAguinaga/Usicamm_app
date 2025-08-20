import React from 'react';
import styled from 'styled-components';
import imagen from '../Imagenes/Logotipos SEP_USICAMM_COLOR.png';
import imagen2 from '../Imagenes/admi5.png';

const ImagenTitulo = styled.img`
width: 30%; /* La imagen es un 30% más pequeña */
height: auto;
margin-left: 30px; /* Puedes ajustar el valor según sea necesario */

@media (max-width: 768px) {
        width: 80%; /* Ajusta el ancho de la imagen para pantallas pequeñas */
        margin: 10px auto; /* Ajusta el margen para centrar la imagen en la parte superior */
}

@media print {
    position: absolute;
            top: 0;
            left: 0;
    width: 35%; 
    height: 9%;  
    padding: 10px;     
}
`;

const ImagenTitulo2 = styled.img`
width: 5%; /* La imagen es un 30% más pequeña */
height: auto;
background-attachment: fixed; /* Hace que la imagen de fondo se quede fija */
margin-left: 3%;
@media (max-width: 768px) {
        width: 80%; /* Ajusta el ancho de la imagen para pantallas pequeñas */
        margin: 10px auto; /* Ajusta el margen para centrar la imagen en la parte superior */
}
        
@media print {
    position: absolute;
             top: 0;
            right: 0;
    width: 15%; 
    height: 8%;       
}
`;

const ContenedorTitulo = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 1.5%; /* Espacio del 10% a la izquierda */
margin-top:-26%;

`;

const TituloCentrado = styled.h1`
    /* Importa la fuente Montserrat desde Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    font-family: 'Montserrat', sans-serif;

    color: white;
    margin-top:1%;
    
    margin-left: 4%; /* Espacio del 10% a la izquierda */
    /* Aplica la fuente a otros elementos según sea necesario */

   @media print {
     visibility: hidden;

}
`;


const Navegador = () => {
return ( 
    <>
     <ContenedorTitulo>
            <ImagenTitulo src={imagen} alt="Ejemplo" />
           <TituloCentrado>Modulo de apoyo al servidor DGA v1.0.</TituloCentrado> 
            <ImagenTitulo2 src={imagen2} alt="Ejemplo" />
            
        </ContenedorTitulo>
    
    </>
    
 );
}

export default Navegador;


