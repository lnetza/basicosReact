import React from 'react';
import './carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto})=>(
    <div className="carrito">
        <h2>Tu carrito de compras</h2>

        {carrito.length===0

        ?<h2>No hay elementos en el carrito</h2>
        
        : carrito.map(producto1 =>(
            <Producto
                key={producto1.id}
                producto1={producto1}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>
);

export default Carrito;