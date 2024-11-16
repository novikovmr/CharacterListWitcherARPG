import React, { useState } from 'react';
import './Stats.css';
import StatItem from './StatItem/StatItem';
import EditSaveButton from '../EditSaveButton/EditSaveButton';

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

const userStatData = [
  {id: "stat1", name: "Рефлексы", shortName: "Реф", value: 1},
  {id: "stat2", name: "Интелект", shortName: "Инт", value: 7},
  {id: "stat3", name: "Ловкость", shortName: "Лов", value: 2},
  {id: "stat4", name: "Тело", shortName: "Тел", value: 4},
  {id: "stat5", name: "Скорость", shortName: "Скр", value: 5},
  {id: "stat6", name: "Эмпатия", shortName: "Эмп", value: 8},
  {id: "stat7", name: "Рем", shortName: "Рем", value: 7},
  {id: "stat8", name: "Воля", shortName: "Вол", value: 7},
  {id: "stat9", name: "Отдых", shortName: "Отд", value: 2},
  {id: "stat10", name: "Переносимый вес", shortName: "Пв", value: 34},
  {id: "stat11", name: "Выносливость", shortName: "Вын", value: 45},
  {id: "stat12", name: "ПЗ", shortName: "Пз", value: 45},
  {id: "stat13", name: "Прыжок", shortName: "Пры", value: 4},
  {id: "stat14", name: "Бег", shortName: "Бег", value: 3},
  {id: "stat15", name: "Устойчивость", shortName: "Уст", value: 4},
  {id: "stat16", name: "Удача", shortName: "Удч", value: 2},
]

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