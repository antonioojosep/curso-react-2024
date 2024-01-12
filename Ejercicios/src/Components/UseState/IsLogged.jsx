// Ejercicio 1
import React from 'react'

const isLoogedIn = true;

function IsLogged() {
  return (
    isLoogedIn? <p>Bienvenido</p> : <p>Por favor, inicia sesión</p>
    )
}

export default IsLogged