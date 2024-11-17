import React, { useState } from 'react';
import './Stats.css';
import StatItem from './StatItem/StatItem';
import EditSaveButton from '../EditSaveButton/EditSaveButton';

/**
 * Компонент Stats отображает и позволяет редактировать характеристики игрока.
 *
 * @param {Object} props - Входные данные для компонента.
 * @param {Object} props.playerData - Данные игрока, включая текущие характеристики.
 * @param {Function} props.updatePlayerData - Функция для обновления данных игрока.
 */
function Stats(props) {
  // Локальное состояние характеристик для управления изменениями
  const [stats, setStats] = useState(props.playerData.stats);

  // Состояние режима редактирования
  const [isEditing, setIsEditing] = useState(false);


  /**
   * Обновляет значение характеристики.
   *
   * @param {number} index - Индекс изменяемой характеристики.
   * @param {number} newValue - Новое значение характеристики.
   */
  const handleInputChange = (index, newValue) => {
    const updatedStats = stats.map((stat, i) => 
      i === index ? {...stat, value: newValue} : stat
    );
    setStats(updatedStats);
  }

  /**
   * Переключает режим редактирования.
   * При выходе из режима редактирования сохраняет изменения в `playerData`.
   */
  const toggleEditing = () => {
    if (isEditing) {
      props.updatePlayerData({...props.playerData, stats})
    }
    setIsEditing(!isEditing);
  }

  return (
    <div className='stats'>
      <ul className='statsList'>
        {stats.map((stat, index) => (
          <StatItem key={stat.id} 
                    statName={stat.shortName} 
                    statValue={stat.value}
                    index={index}
                    isEditing={isEditing}
                    onChange={handleInputChange} 
          />
        ))}
      </ul>
      <EditSaveButton onClick={toggleEditing} isEditing={isEditing} />
    </div>
  )
}

export default Stats