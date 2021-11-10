import React from 'react'

import './style.scss'

const FormControl = ({ label, onChange, value, ...props }) => {
  return (
    <div className="c_card__form_control">
      <label htmlFor={label}>{label} :</label>
      <input onChange={onChange} id={label} type="text" value={value} {...props} placeholder={label}/>
    </div>
  )
}

export default FormControl