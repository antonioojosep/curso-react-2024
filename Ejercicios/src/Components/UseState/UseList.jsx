// Ejercicio 2
import React from 'react'

const nombres = ["Antonio" , "Pepe", "Jose", "Maria", "Laura"];

const UseList = () => {

  return (
    nombres.map((nombre, index) => (
      <li key={index}>{nombre}</li>
  ))
  )
}

export default UseList;