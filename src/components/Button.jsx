// components/Button.js
import { ArrowRight, ShoppingCart, Heart } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'btn btn-hover-effect';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    dark: 'btn-dark'
  };
  const sizeClasses = {
    small: 'btn-sm',
    medium: '',
    large: 'py-4 px-8 text-base'
  };

  const Icon = {
    arrow: ArrowRight,
    cart: ShoppingCart,
    heart: Heart
  }[icon];

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${icon ? 'btn-icon' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;