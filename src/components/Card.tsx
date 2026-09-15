interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  return (
    <div
      className={`card-base ${hover ? 'card-hover' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export function SectionHeader({ label, title, subtitle, className = '', center = false }: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="text-2xl sm:text-3xl font-bold text-navy text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-ink-light text-base sm:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

interface TrustBadgeProps {
  type: 'official' | 'educational' | 'general' | 'professional';
  children: React.ReactNode;
}

export function TrustBadge({ type, children }: TrustBadgeProps) {
  const styles = {
    official: 'bg-teal/10 text-teal',
    educational: 'bg-navy/8 text-navy',
    general: 'bg-ink-muted/10 text-ink-light',
    professional: 'bg-gold/15 text-gold-700',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${styles[type]}`}>
      {children}
    </span>
  );
}
