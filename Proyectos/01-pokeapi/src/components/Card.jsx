import React, { useState } from 'react'

export const Card = (props) => {
    const { pokemon, handleDelete } = props;
    const [isDeleting, setIsDeleting] = useState(false)
  return (
    <div className={`max-w-xs rounded overflow-hidden shadow-md bg-white m-4 flex flex-col justify-center transform ${isDeleting ? "rotateY-180 scale-0" : "rotateY-0 scale-100" } transition-transform duration-500 ease-in-out`}>
        <div className="flex flex-col w-full">
            <img src={pokemon.image} alt={pokemon.name} className='w-24 h-24 mx-auto mt-4' />
            <div className="p-4">
            <h2 className='text-xl font-bold'>{pokemon.name}</h2>
            <p>{pokemon.peso}</p>
            </div>
        </div>
    </div>
  )
}
