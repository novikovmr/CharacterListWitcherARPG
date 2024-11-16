import React from 'react'

function EditSaveButton(props) {
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default EditSaveButton