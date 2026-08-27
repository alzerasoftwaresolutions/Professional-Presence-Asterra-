import React from 'react';

export interface StatCardProps {
  value: string;
  label: string;
  context?: string;
  theme?: 'light' | 'dark' | 'evergreen';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  context,
  theme = 'light',
  className = '',
}) => {
  const themeStyles = {
    light: {
      container: 'border-t-2 border-evergreen pt-4 bg-transparent',
      label: 'text-charcoal-muted',
      value: 'text-evergreen',
      context: 'text-charcoal-body',
    },
    dark: {
      container: 'border-t-2 border-mineral-teal pt-4 bg-transparent',
      label: 'text-border',
      value: 'text-white',
      context: 'text-border/80',
    },
    evergreen: {
      container: 'border-t-2 border-white/40 pt-4 bg-transparent',
      label: 'text-border',
      value: 'text-white',
      context: 'text-border/90',
    },
  }[theme];

  return (
    <div className={`${themeStyles.container} ${className}`}>
      <span className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] block mb-1.5 ${themeStyles.label}`}>
        {label}
      </span>
      <div className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${themeStyles.value}`}>
        {value}
      </div>
      {context && (
        <p className={`font-sans text-xs sm:text-sm mt-1.5 leading-relaxed ${themeStyles.context}`}>
          {context}
        </p>
      )}
    </div>
  );
};
