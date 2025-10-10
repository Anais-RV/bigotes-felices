import './Button.css';

const Button = ({
  onClick, 
  className = '', 
  id, 
  name,
  type = 'button', 
  disabled = false, 
  children,
  ariaLabel,
  ariaPressed,
  ...props
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
      aria-pressed={ariaPressed}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;