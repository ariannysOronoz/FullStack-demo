import { useState } from "react";


export const ContactoState = (contacto) => {

    const [getNombre, setNombre] =  useState(contacto.nombre);
    const [getApellido, setApellido] = useState(contacto.apellido);
    const [getEmail, setEmail] = useState(contacto.email);
    const [getConectado, setConectado ] = useState(contacto.conectado);
    
    const metodosDeAcceso = {
		nombre : [getNombre, setNombre],
		apellido: [getApellido, setApellido],
		conectado: [getConectado, setConectado],
		email: [getEmail, setEmail],
	}

    return metodosDeAcceso;
};