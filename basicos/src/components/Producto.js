import React from 'react';

const Producto=({producto1, carrito, agregarProducto, productos})=>{

    //Esto para evitar estar ecribiendo producto1.propiedad (producto1.nombre etc)
    const {nombre, precio, id}=producto1

    //Agregar producto al carrito
    const seleccionarProducto= id => {
        const producto=productos.filter(producto1=> producto1.id===id)[0];

        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    return (//Aqui no se pueden ingresar condicionales normales, si se pueden ingresar pero con if ternario
        <div>
            <h2>{id}</h2>
            <h2>{nombre}</h2>
            <h2>{precio}</h2>
            <button
                type="button"
                onClick={() => seleccionarProducto(id)}
            >Comprar</button>
        </div>
    );
}

export default Producto;