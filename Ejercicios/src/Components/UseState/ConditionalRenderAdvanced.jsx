import React, { useState } from 'react'

export const ConditionalRenderAdvanced = (props) => {
    const {isLoggedIn, userRole} = props;

    function handlecondition() {
        
        if (isLoggedIn && userRole==="admin") {
            return(<>
            <h1>Bienvenido</h1>
            <h2>Privilegios de administrador</h2></>)
        }
        else if (isLoggedIn ) {
              return( <h1>Bienvenido</h1> )
        }
         else {
           return( <h1>Inicia Sesión</h1>)
        }
    }

  return (
    handlecondition()
    
  )
}
