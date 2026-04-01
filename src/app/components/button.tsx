import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 font-medium';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md',
    secondary: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    whatsapp: 'bg-[#68cf67] text-black hover:bg-[#20BA5A] shadow-sm hover:shadow-md border border-primary',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}