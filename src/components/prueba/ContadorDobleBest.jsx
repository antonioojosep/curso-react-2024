import React, { useState } from 'react'
const initialState = {
    antonio : 0,
    ana : 0,
};

const ContadorDobleBest = () => {
    const [friends, setFriends] = useState(initialState);

    function handleIncrement(friendName) {
        setFriends({ ...friends,[friendName]: friends.friendName + 1});
    }
  return (
    <>
    <div>
        <span> Antonio tiene : {friends.antonio}</span>
        <button onClick={() => handleIncrement("antonio")}>Aumentamos +1 amigo</button>
    </div>

    <div>
        <span> Ana tiene : {friends.ana}</span>
        <button onClick={() => handleIncrement("ana")}>Aumentamos +1 amigo</button>
    </div>
    </>
  )
}

export default ContadorDobleBest