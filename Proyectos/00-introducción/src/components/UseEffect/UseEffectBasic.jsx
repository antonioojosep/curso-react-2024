import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectBasic = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0)

    function handlerClick() {
        setCounter(counter + 1);
    }

    function handlerClick2() {
        setCounter2(counter2 + 1);
    }
    // los efectos van aqui, UseEffect

    // useEffect(() => {
    //   // primera variante sin dependencias
    //   // se ejecuta cuando se pinta el componente y cuando se modifica cualquier estado
    //   // esta variante es muy peligrosa mejor no utilizar
    //   console.log("Estoy dentro del efecto UseEffect");
    //   }
    // )

    // useEffect(() => {
    //     //segunda variante
    //     //solo se ejecuta una única vez y es
    //     // cuando se monta el componente porque el array
    //     // de dependecias esta vacío
    //     console.log("Estoy dentro del UseEffect v2");
    // },[]);

    useEffect(() => {
        //tercera variante
        // Se ejecuta cuando se monta el componente
        // Si en el array de dependencias coloco aquel estado que quiero
        // que cuando se modifique 
    })
    
  return (
    <div className="flex flex-col justify-center items-center bg-cyan-200 h-screen">
        <h1 className="text-xl font-bold">Contador 1: {counter}</h1>
        <h1 className="text-xl font-bold">Contador 2: {counter2}</h1>
        <button className='mx-3 p-2 bg-slate-800 text-white rounded-md'
        onClick={handlerClick}>Aumentar contador 1</button>
        <button className='mx-3 p-2 bg-slate-800 text-white rounded-md'
        onClick={handlerClick2}>Aumentar contador 2</button>
    </div>
  )
}

export default UseEffectBasic