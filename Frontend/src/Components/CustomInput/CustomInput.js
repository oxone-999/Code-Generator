import React from 'react'


// const types = ['text', 'number', 'password', 'email', 'date', 'time', 'file', 'checkbox', 'radio', 'select', 'textarea', 'tel', 'url','datetime-local', 'datetime'];

function CustomInput({value,handleInputChange,e}) {

  return (
    <>
    <label >{e.name}</label>
    <input
        type={e.type}
        id="name"
        value={value}
        onChange={(event) => handleInputChange(e, event.target)}
        required
        />
    </>
  )
}

export default CustomInput