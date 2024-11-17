import React from 'react';
import './PlayerInfo.css';

function PlayerInfo(props) {
  return (
    <div className="player-info">
      <h2 className="player-info__title">{props.playerData.characterName}</h2>
      <ul className="player-info__list">
        <li><strong>Игрок:</strong> {props.playerData.playerName}</li>
        <li><strong>Раса:</strong> {props.playerData.race}</li>
        <li><strong>Профессия:</strong> {props.playerData.profession}</li>
        <li><strong>Определяющий навык:</strong> {props.playerData.definingSkill}</li>
      </ul>
    </div>
  );
}

export default PlayerInfo;
