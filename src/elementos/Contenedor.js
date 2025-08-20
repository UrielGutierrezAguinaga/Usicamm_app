import styled from "styled-components";

const Contenedor = styled.div`
    background: rgb(16,49,43);
    width:100%;
    height:79%;
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0, 0, 0, .05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    
    margin: 10px; /* Opcional: para dar un poco de margen alrededor del contenedor */
    z-index: 100;
    @media print {
    left: 10%; /* Cambiado de 'right' a 'left' para posicionar a la izquierda */
    
        width:80%;
        height:90%;
     

`;

export default Contenedor;
