import React from 'react';
import PropTypes from 'prop-types';
import  { Contacto }  from '../../class/Contacto';
import EstadoContacto from '../component  B/EstadoContacto';


const ContactoComponent = ({ contacto }) => {
  return (
    <div>
      <h2> Nombre: { contacto.nombre } </h2>
      <h3> Apellido: { contacto.apellido } </h3>
      <h4> Email: { contacto.email } </h4>
      <EstadoContacto conectado = { contacto.conectado[0] } swithConectado = {contacto.conectado[1]} /> 
    </div>
  );
};



ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;


