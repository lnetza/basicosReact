import React,{Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //listado de productos
  const [productos, guardarProductos] = useState([
    {id:1, nombre:'react', precio:23},
    {id:2, nombre:'vuejs', precio:54},
    {id:3, nombre:'angular', precio:67},
    {id:4, nombre:'.NET', precio:78},
  ]);

  //State carrito de compras
  const [carrito, agregarProducto]=useState([]);

  /*Obtenemos fecha */
  const fecha=new Date().getFullYear();

  /*Fragment para no crear código html de más*/
  return (
    <Fragment> 

      <Header
        titulo='esto es un titulo'
        titulo2='titulo 2'
      />
      <h1>Lista de productos</h1>
      
      {productos.map(producto =>(
        <Producto
          //props 
          key={producto.id}
          producto1={producto}
          carrito={carrito}
          productos={productos}
          //funciones
          agregarProducto={agregarProducto}

        />
      ))}

      <Carrito
        carrito={carrito}
      />

      <Footer
        fecha1={fecha}
      />
    </Fragment>
  );
}

export default App;
