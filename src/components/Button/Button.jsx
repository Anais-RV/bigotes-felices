import React from 'react'
import "./Button.css"

const Button = ({
    onClick, 
    className = '', 
    id, 
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
      id={id}>

        {children}
        
    </button>
  )
};

export default Button