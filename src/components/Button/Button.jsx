import React from 'react'
import "./Button.css"

const Button = ({
    onClick, 
    className = '', 
    id, 
    name,
    type = 'button', 
    disabled = false, 
    children 
}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      id={id}
      name={name}>

        {children}

    </button>
  )
};

export default Button