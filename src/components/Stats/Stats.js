import React, { useState } from 'react';
import './Stats.css';
import StatItem from './StatItem/StatItem';
import EditSaveButton from '../EditSaveButton/EditSaveButton';
import { userStatData } from '../../data/data.js';

// const userStatData = {
//   "Рефлексы" : 1,
//   "Интелект" : 7,
//   "Ловкость" : 2,
//   "Тело" : 4,
//   "Скорость" : 5,
//   "Эмпатия" : 8,
//   "Рем" : 7,
//   "Воля" : 7,
//   "Отдых" : 2,
//   "Переносимый вес" : 34,
//   "Выносливость" : 45,
//   "ПЗ" : 45,
//   "Прыжок" : 4,
//   "Бег" : 3,
//   "Устойчивость" : 4,
//   "Удача" : 2
// }



function Stats() {

  const [stats, setStats] = useState(userStatData);
  const [isEditing, setIsEditing] = useState(false);

  //Обработчик для обновления значений характеристик
  const handleInputChange = (index, newValue) => {
    const updatedStats = stats.map((stat, i) => 
      i === index ? {...stat, value: newValue} : stat
    );
    setStats(updatedStats);
  }

  //Обработчик для переключения режима редактирования
  const toggleEditing = () => {
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