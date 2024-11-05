import React, { useState } from 'react'

const Player = ({ name, symbol }) => {
    const [ isEditing, setIsEditing ] = useState(false);

    const onClick = function(){
        setIsEditing(true);
    }

    const onSave = function(){
        setIsEditing(false);
    }

  return (
    <li>
        <span className="player">
            {isEditing ? (<input type="text" required value={name}></input>) : (<span className="player-name">{name}</span>)}
            <span className="player-symbol">{symbol}</span>
        </span>
        { isEditing ? (<button onClick={onSave}>SAVE</button>) : (<button onClick={onClick}>EDIT</button>)}
    </li>
  )
}

export default Player