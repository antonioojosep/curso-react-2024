import React, { useState } from 'react'

const initialState = 0;
const Contador = () => {

    const [counter, setCounter] = useState(initialState);

    //---Declaracion de funciones-------------

    function handleIncrement(value) {
        setCounter(counter + value);

        // forma segura

        setCounter((prevCounter) => prevCounter + value);
    }

    function handleDecrement(value) {
        setCounter(counter - value);
    }

  return (
    <>
    <h1>Ejemplo de contador en React</h1>
    <h2>El contenedor vale {counter}</h2>
    <button onClick={() => handleIncrement(5)}>Incrementar Contador</button>
    <button onClick={() => handleDecrement(5)}>Decrementar Contador</button>
    </>
  )
}

export default Contador;