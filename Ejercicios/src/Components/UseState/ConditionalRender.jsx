import React from 'react'

function ConditionalRender({condition}) {


  return (
    condition? <p>Verdadero</p> : <p>Falso</p>
  )
}

export default ConditionalRender