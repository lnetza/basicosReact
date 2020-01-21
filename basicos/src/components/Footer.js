import React from 'react';

 /*Function expresion*/
 /*Aplicamos destructuring para no poner props.fecha solo 
 pasamos fecha */
const Footer = ({fecha1})=> (
        <footer>
            <p>Todos los derechos reservados{fecha1}</p>
        </footer>
);


export default Footer;   