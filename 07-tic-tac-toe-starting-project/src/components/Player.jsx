import React, { useState } from 'react'

const Player = ({ initialName, symbol }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const onClick = () => {
        setIsEditing(editing => !editing);
    }

    const onChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
      <li>
          <span className="player">
              {isEditing ? (<input type="text" required value={playerName} onChange={onChange}></input>) : (<span className="player-name">{playerName}</span>)}
              <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={onClick}>{isEditing ? "SAVE" : "EDIT"}</button>
      </li>
    )
}

export default Player