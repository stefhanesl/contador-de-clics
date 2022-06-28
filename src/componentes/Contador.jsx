import React from 'react';
import '../hojas-de-estilo/contador.css'

const Contador = ( props ) => {
    return (
        <div className='contador'>
            { props.numClics }
        </div>
    );
}

export default Contador;
