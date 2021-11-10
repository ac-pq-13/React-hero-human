import React from 'react'

import FormControl from '../FormControl'

import './style.scss'

const Card = ({ 
  onChange, 
  label1, 
  label2, 
  label3, 
  label4, 
  handleOnlyRead,
  handleUpdate,
  handleDelete,
  handleChoose
 }) => {
  return (
    <div className="c_card__wrapper">
      <form className="c_card__form">
        <FormControl
          onChange={onChange}
          label={label1.label}
          name={label1.label}
          value={label1.value}
          disabled ={label1.edit}
        />
        <FormControl
          onChange={onChange}
          label={label2.label}
          name={label2.label}
          value={label2.value}
          disabled ={label2.edit}
        />
        <FormControl
          onChange={onChange}
          label={label3.label}
          name={label3.label}
          value={label3.value}
          disabled ={label3.edit}
        />
        <FormControl
          onChange={onChange}
          label={label4.label}
          name={label4.label}
          value={label4.value}
          disabled ={label4.edit}
        />
        <div className="c_card__content_buttons">
          <button onClick ={handleOnlyRead}>{label1.edit ? 'Habilitar': 'Desabilitar'}</button>
          <button onClick={handleUpdate} disabled={label1.edit}>Editar</button>
          <button onClick={handleDelete} >Eliminar</button>
          <button onClick={handleChoose}>Seleccionar</button>
        </div>

      </form>
    </div>
  )
}

export default Card