import React, { useState } from 'react'

function ToggleVisibility() {
    const [visible, setVisible] = useState(true)

    function handlevisible() {
        setVisible(!visible)
    }

  return (
    <div>
        {visible? <p>Texto Visible</p> : "" }
        <button onClick={handlevisible}>Pulsa para borrar</button>
    </div>
  )
}

export default ToggleVisibility