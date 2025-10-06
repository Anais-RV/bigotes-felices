import React from 'react'
import "./Button.css"

const Button = (onClick, className = '', id, children, type = 'button', disabled = false ) => {
  return (
    <button>
        {children}
    </button>
  )
};

export default Button