import React, { useState } from 'react'

const Player = ({ name, symbol }) => {
    const [ isEditing, setIsEditing ] = useState(false);

    const onClick = function(){
        setIsEditing(!isEditing);
    }
    
  return (
    <li>
        <span className="player">
            {isEditing ? (<input type="text" required value={name}></input>) : (<span className="player-name">{name}</span>)}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={onClick}>{isEditing ? "SAVE" : "EDIT"}</button>
    </li>
  )
}

export default Player