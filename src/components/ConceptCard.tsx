import { motion } from 'framer-motion';
import { X, ExternalLink, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LegalConcept } from '@/types';
import { getSourceById } from '@/data/sources';
import { TrustBadge } from './Card';

interface ConceptCardProps {
  concept: LegalConcept;
  onClose: () => void;
}

export function ConceptCard({ concept, onClose }: ConceptCardProps) {
  const conceptSources = concept.sourceIds.map(getSourceById).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-card shadow-card-lg max-w-lg w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <TrustBadge type="educational">Legal Concept</TrustBadge>
              <h3 className="mt-2 text-xl font-bold text-navy">{concept.term}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-ink-muted hover:text-navy p-1 rounded-lg hover:bg-navy/5 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-1">
                In simple terms
              </p>
              <p className="text-ink leading-relaxed">{concept.simpleExplanation}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-1">
                Why it matters
              </p>
              <p className="text-ink leading-relaxed">{concept.whyItMatters}</p>
            </div>

            <div className="p-3.5 bg-gold/8 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-700 mb-1">
                Remember
              </p>
              <p className="text-sm text-ink leading-relaxed">{concept.takeaway}</p>
            </div>

            {concept.relatedTermId && (
              <Link
                to="/dictionary"
                className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:underline"
              >
                <BookOpen size={14} />
                View in dictionary
              </Link>
            )}

            {conceptSources.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-2">
                  Source
                </p>
                <div className="space-y-2">
                  {conceptSources.map((source) => (
                    <a
                      key={source!.id}
                      href={source!.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-navy/5 rounded-lg hover:bg-navy/10 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-medium text-navy">{source!.title}</p>
                        <p className="text-xs text-ink-muted">{source!.organization}</p>
                      </div>
                      <ExternalLink size={16} className="text-teal group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button onClick={onClose} className="btn-primary w-full mt-6">
            Continue
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
