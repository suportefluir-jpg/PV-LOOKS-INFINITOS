import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'lg',
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-button focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-green-button text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    secondary: "bg-gold text-white hover:bg-gold-soft shadow-md",
    outline: "border-2 border-olive text-olive hover:bg-olive hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg md:text-xl",
    xl: "px-10 py-5 text-xl md:text-2xl w-full"
  };

  const content = (
    <>
      {children}
      <ChevronRight className="ml-2 w-6 h-6" />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export const SectionWrapper: React.FC<{
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: string;
  noPadding?: boolean;
}> = ({ children, id, className = '', background = 'transparent', noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full ${noPadding ? '' : 'py-14 md:py-20'} ${className}`}
      style={{ backgroundColor: background }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-block px-3 py-1 bg-olive text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full ${className}`}>
    {children}
  </span>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-card shadow-soft border border-card-border overflow-hidden ${className}`}>
    {children}
  </div>
);
