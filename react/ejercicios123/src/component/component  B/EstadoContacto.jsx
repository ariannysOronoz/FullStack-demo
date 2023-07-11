import React from 'react';

const EstadoContacto = ({ conectado, swithConectado }) => {
    const handleSubmit = (event) => {
        swithConectado(!conectado)
        event.preventDefault();
    };
    
    return (
        <div>
            Estado : { conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }
            <button onClick={handleSubmit}> SWITH </button>
        </div>
    )
};



export default EstadoContacto;
