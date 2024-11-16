import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import './EditSaveButton.css';

function EditSaveButton(props) {
  return (
    <button className="edit-save-button" onClick={props.onClick}>
      <FontAwesomeIcon icon={props.isEditing ? faSave : faPen} />
    </button>
  );
}

export default EditSaveButton;