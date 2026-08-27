import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  theme = 'dark',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest ${
        isDark ? 'text-border' : 'text-charcoal-muted'
      } ${className}`}
    >
      <Link
        to="/"
        className={`flex items-center transition-colors ${
          isDark ? 'hover:text-white' : 'hover:text-evergreen'
        }`}
        title="Home"
      >
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.label}>
            <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
            {isLast || !item.href ? (
              <span
                className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
                  isDark ? 'text-white' : 'text-evergreen'
                }`}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className={`transition-colors truncate max-w-[150px] sm:max-w-none ${
                  isDark ? 'hover:text-white' : 'hover:text-evergreen'
                }`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
