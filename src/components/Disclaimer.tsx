import { AlertCircle, Info } from 'lucide-react';

interface DisclaimerProps {
  variant?: 'compact' | 'full';
  className?: string;
}

export function Disclaimer({ variant = 'compact', className = '' }: DisclaimerProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex items-start gap-2.5 p-3.5 bg-gold/8 rounded-lg ${className}`}>
        <Info size={18} className="text-gold-600 shrink-0 mt-0.5" />
        <p className="text-sm text-ink-light leading-relaxed">
          Educational information only — not legal advice. This tool does not replace guidance from
          a qualified legal professional.
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 p-4 bg-gold/8 border border-gold/20 rounded-lg ${className}`}>
      <AlertCircle size={20} className="text-gold-600 shrink-0 mt-0.5" />
      <div>
        <p className="font-heading font-bold text-sm text-navy mb-1">Important Disclaimer</p>
        <p className="text-sm text-ink-light leading-relaxed">
          Educational information only: This tool provides general information based on the situation
          you describe. It is not a lawyer and does not replace advice from a qualified legal
          professional. Laws and procedures can vary depending on the circumstances and may change
          over time. Check the linked official sources or seek professional assistance for advice
          about a specific situation.
        </p>
      </div>
    </div>
  );
}
