import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from'./elementos/Contenedor';
import Navegador from './elementos/Navegador';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lectura from './componentes/lectura';
import InicioSesion from './componentes/InicioSesion';
import Herramientas from './componentes/Herramientas';
import Documentos from './componentes/Documentos';
import Principal2 from './componentes/Principal2';
import { Helmet } from 'react-helmet';
import favicon from './Imagenes/favicon.ico'
WebFont.load({
  google:{
    //Montserrat:wght@400;500;700 
    families:['Montserrat:400,500,700', 'sans-serif']
  }
});



const Index = () => {
  return ( 
    <>
    <Helmet>
      <link rel='shortcut icon' href={favicon} type='image/x-icon' />
      <title>Modulo de apoyo al servidor DGA1.0.</title>
    </Helmet>

    <BrowserRouter>
      <Contenedor>
      
          <Routes>
            <Route path='/InicioSesion' element={<InicioSesion/>}/>
            <Route path='/Herramientas' element={<Herramientas/>}/>
            <Route path='/Documentos' element={<Documentos/>}/>
            <Route path='/EleccionEducacion' element={<Principal2/>}/>
            <Route path='/Lectura' element={<Lectura/>}/>
            <Route path='/' element={<App/>}/>
          </Routes>
          
        
       
      </Contenedor>
  

    </BrowserRouter>
    <Navegador />
    </>
    
    
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

 
 