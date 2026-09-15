interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ value, max, label, className = '' }: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className={className}>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-ink-light">{label}</span>
          <span className="text-sm font-semibold text-navy">{percentage}%</span>
        </div>
      )}
      <div className="h-2 bg-navy/8 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
