import "./Button.css"

const Button = ({
    onClick, 
    className = '', 
    id, 
    name,
    type = 'button', 
    disabled = false, 
    children,
    ariaLabel,
    ariaPressed
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className || ''}`.trim()}
      disabled={disabled}
      id={id}
      name={name}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}>

        {children}

    </button>
  );
};

export default Button