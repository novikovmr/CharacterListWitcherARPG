import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './WeaponItem.css';

function WeaponItem(props) {
  const handleDelete = () => {
    props.onDelete(props.data.id);
  }
  return (
    <li className='weapon__item'>
      <div className='weapon__details'>
        <p className='weapon__name'>{props.data.name}</p>
        <p className='weapon__accuracy'>{props.data.accuracy}</p>
        <p className='weapon__damage'>{props.data.damage}</p>
        <p className='weapon__durability'>{props.data.durability}</p>
        <p className='weapon__grip'>{props.data.grip}</p>
        <p className='weapon__effect'>{props.data.effect}</p>
        <p className='weapon__secrecy'>{props.data.secrecy}</p>
        <p className='weapon__gain'>{props.data.gain}</p>
        <p className='weapon__weight'>{props.data.weight}</p>
      </div>  
      <div className='weapon__buttonContainer'>
        <button className='weapon__delete' onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default WeaponItem;