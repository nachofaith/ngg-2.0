import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuPrincipal from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderHome from './components/SliderHome';
import ProductosOferta from './components/Ofertas';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuPrincipal />
    <SliderHome />
    <br />
    <br />
    <ProductosOferta />
    <br />
    <Footer/>


  </React.StrictMode>,
)
