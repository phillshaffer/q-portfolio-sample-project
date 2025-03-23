import React from 'react';
import { buttonVariants } from './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  href,
  className = '',
}) => {
  const buttonClass = `${buttonVariants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
