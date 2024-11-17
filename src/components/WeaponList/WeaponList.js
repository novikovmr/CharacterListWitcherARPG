import React, { useState } from 'react'
import WeaponItem from './WeaponItem/WeaponItem';
import './WeaponList.css';

/**
 * Компонент WeaponList отвечает за отображение списка оружия,
 * а также предоставляет возможность добавлять и удалять оружие.
 *
 * @param {Object} props - Входные данные для компонента.
 * @param {Object} props.playerData - Данные игрока, включая текущий список оружия.
 * @param {Function} props.updatePlayerData - Функция для обновления данных игрока.
 * @param {Array} props.weaponsData - Доступные оружия для добавления (список существующих оружий).
 */

function WeaponList(props) {
  // Состояние для управления видимостью формы добавления нового оружия
  const [isAdding, setIsAdding] = useState(false);

  // Состояние для хранения выбранного оружия в форме добавления
  const [selectedWeapon, setSelectedWeapon] = useState('');

   /**
   * Удаляет оружие из списка игрока по ID.
   * @param {string} id - ID оружия, которое нужно удалить.
   */
  const handleDeleteWeapon = (id) => {
    const updatedWeapons = props.playerData.weapons.filter(weapon => weapon.id !== id);
    props.updatePlayerData({...props.playerData, weapons: updatedWeapons}); // Обновляем playerData
  }

  /**
   * Обработчик изменения выбранного значения в select.
   * @param {Object} event - Событие изменения значения.
   */
  const handleSelectWeapon = (event) => {
    setSelectedWeapon(event.target.value);
  };

  /**
   * Добавляет выбранное оружие в список игрока.
   */
  const handleSaveWeapon = () => {
    const weaponToAdd = props.weaponsData.find(weapon => weapon.id === selectedWeapon);
    if (weaponToAdd) {
      const updatedWeapons = [...props.playerData.weapons, weaponToAdd];
      props.updatePlayerData({...props.playerData, weapons: updatedWeapons}); // Обновляем playerData
      setIsAdding(false); //Скрываем форму добавления нового оружия
      setSelectedWeapon(''); //Сбрасываем выбор
    }
  }

  return (
    <div className='weapon__container'>
      <h2 className='weapon__heading'>Оружие</h2>
      <ul className='weapon__list'>
      {props.playerData.weapons.map((weaponItem, index) => (
        <WeaponItem key={weaponItem.id || index} data={weaponItem} onDelete={handleDeleteWeapon}/>
      ))}
      </ul>
      <div className='weapon__addBtnContainer'>
        {isAdding && (
          <div className='weapon__add-form'>
            <select value={selectedWeapon} onChange={handleSelectWeapon}> 
              <option value={""}>Выберите оружие</option>
              {props.weaponsData.map(weapon => (
                <option key={weapon.id} value={weapon.id}>
                  {weapon.name}
                </option>
              ))}
            </select>
            <button onClick={handleSaveWeapon}>Сохранить</button>
           </div>
        )}
        <button className='weapon__add-button' onClick={() => setIsAdding(prevState => !prevState)}>
        +
        </button>
      </div>
    </div>
  )
}

export default WeaponList;