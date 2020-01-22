import React from 'react';

const Producto=({producto1, carrito, agregarProducto, productos})=>{

    //Esto para evitar estar ecribiendo producto1.propiedad (producto1.nombre etc)
    const {nombre, precio, id}=producto1

    //Agregar producto al carrito
    const seleccionarProducto= id => {
        const producto=productos.filter(producto1 => producto1.id===id)[0];

        agregarProducto([
            ...carrito, //RestOperator clona un objeto o un arreglo
            producto
        ]);
    }

    //Elimina un producto del carrito
    const eliminarProducto = id =>{

        //Se filtran los que son diferentes al id que se pasa, una vez echo esto; pasa los elementos al nuevo array
            const productos = carrito.filter(producto1 => producto1.id !== id);
        //Colocar los elemento o productos filtrados en el state
        agregarProducto(productos)
    }

    return (//Aqui no se pueden ingresar condicionales normales, si se pueden ingresar pero con if ternario
        <div>
            <h2>{id}</h2>
            <h2>{nombre}</h2>
            <h2>{precio}</h2>

            {productos
            ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >Comprar</button>

                )
            :
                (
                    <button
                        type="button"
                        onClick={ () => eliminarProducto(id)}
                    >Eliminar</button>
                )
            }   
            
        </div>
    );
}

export default Producto;