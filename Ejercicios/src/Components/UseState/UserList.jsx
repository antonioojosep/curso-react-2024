import React, { useState } from 'react'

function UserList({array}) {

    const [listas, setListas] = useState(array)

    
  return (
    <div>
        <ul>
            {listas.map((lista, index) => <><ol><a>{index}</a>{lista}</ol></>)}
        </ul>
    </div>
  )
}

export default UserList