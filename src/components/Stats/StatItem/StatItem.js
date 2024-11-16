import React from 'react';
import './StatItem.css';

function StatItem(props) {
  return (
    <li className='stats__item'>
      <span className='stats__name'>{props.statName}</span>
      {props.isEditing ? (
        <input className='stats__input'
          type='number'
          min="0"
          max="10"
          value={props.statValue}
          onChange={(e) => {
            //Записываем в переменную таргет из поля ввода
            const newValue = e.target.value;
            //Если в поле ввода пустая строка, то передаем пустую строку
            if (newValue === '') {
              props.onChange(props.index, newValue)
            } else {
              //Записываем в переменную число
              const numericValue = Number(newValue);
              // Если не нан, больше или равно 0 или меньше или равно 10, то передаем в обработчик
              if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 10) {
                props.onChange(props.index, numericValue);
              }
            }
          }}
        />
      ) : (
        <span className='stats__value'>{props.statValue}</span>)}
    </li>
  )
}

export default StatItem