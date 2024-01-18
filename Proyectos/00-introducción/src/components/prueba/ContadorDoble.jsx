import React, { useState } from 'react'
const initialState = {
    antonio : 0,
    ana : 0,
};

const ContadorDoble = () => {
    const [friends, setFriends] = useState(initialState);

    function handleIncrementAntonio() {
        setFriends({ ...friends,antonio: friends.antonio+1});
    }

    function handleIncrementAna() {
        setFriends({ ...friends,ana: friends.ana+1});
    }
  return (
    <>
    <div>
        <span> Antonio tiene : {friends.antonio}</span>
        <button onClick={handleIncrementAntonio}>Aumentamos +1 amigo</button>
    </div>

    <div>
        <span> Ana tiene : {friends.ana}</span>
        <button onClick={handleIncrementAna}>Aumentamos +1 amigo</button>
    </div>
    </>
  )
}

export default ContadorDoble