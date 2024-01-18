import React from 'react'
import { useState } from 'react';

const Titulo = (props) => {
    return (
        <h2 className="text-xl2 font-bold">{props.children}</h2>
    )
}

const Card = (props) => {
    //Este es el componente hijo
    const {title, description, bgcolor, setCount} = props;
    return (
        <div className={`p-4 rounded-md shadow-md ${bgcolor}`}>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='mt-2'>{description}</p>
            <p className='mt-2'><Titulo>Soy el titulo</Titulo></p>
        </div>
    )
}

function ComponenteProps() {
    const [count, setCount] = useState(0);
    // Este es el componente Padre
  return (
    <div 
    className='flex flex-col justify-center 
    items-center h-screen 
    bg-slate-400 gap-4'>
        <h1 className="text-xl font-bold">El count vale: {count}</h1>
        <Card title="Tarjeta1" description="Contenido de la tarjeta1" bgcolor="bg-green-200" setCount={setCount}>xxxxx</Card>
        <Card title="Tarjeta2" description="Contenido de la tarjeta1" bgcolor="bg-green-600"/>
        <Card title="Tarjeta3" description="Contenido de la tarjeta1" bgcolor="bg-red-200"/>

    </div>
  )
}

export default ComponenteProps;