import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const initialState = {
    width: window.innerWidth,
    heigh : window.innerHeight,
};
const ResizeListener = () => {
    const [windowSize, setWindowSize] = useState(initialState)

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width : window.innerWidth,
                heigh : window.innerHeight,
            })
        }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])
    
  return (
    <div className="flex flex-col justify-center items-center bg-cyan-200 h-screen">
        <p>El tamaño de mi ventana es: {windowSize.width}x{windowSize.heigh}</p>
    </div>
  )
}

export default ResizeListener;
