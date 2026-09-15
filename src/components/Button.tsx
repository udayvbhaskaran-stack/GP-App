import { Link, NavLink } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export function ButtonLink({ to, children, variant = 'primary', className = '', onClick }: ButtonLinkProps) {
  const baseClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant];

  return (
    <Link to={to} className={`${baseClass} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

interface NavLinkItem {
  to: string;
  label: string;
}

export function NavLinkItem({ to, label }: NavLinkItem) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-[15px] font-medium transition-colors duration-200 ${
          isActive ? 'text-navy' : 'text-ink-light hover:text-navy'
        }`
      }
    >
      {label}
    </NavLink>
  );
}
