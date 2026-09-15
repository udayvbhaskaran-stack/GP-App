import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import { ButtonLink } from '@/components/Button';

export function NotFound() {
  return (
    <div className="py-20">
      <div className="container-page text-center">
        <div className="w-16 h-16 rounded-xl bg-navy/8 flex items-center justify-center text-navy mx-auto mb-6">
          <FileQuestion size={32} />
        </div>
        <h1 className="text-2xl font-bold text-navy">Page not found</h1>
        <p className="mt-3 text-ink-light">The page you are looking for does not exist.</p>
        <div className="mt-6">
          <ButtonLink to="/" variant="primary">
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
