import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import type { DecisionStep, LegalConcept } from '@/types';
import { ConceptCard } from '../ConceptCard';

interface DecisionInteractionProps {
  data: DecisionStep;
  concepts: LegalConcept[];
  onConceptDiscovered: (conceptId: string) => void;
  discoveredConceptIds: string[];
}

export function DecisionInteraction({ data, concepts, onConceptDiscovered, discoveredConceptIds }: DecisionInteractionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [conceptPopup, setConceptPopup] = useState<LegalConcept | null>(null);

  const selected = data.options.find((o) => o.id === selectedId);

  const handleSelect = (id: string) => {
    const option = data.options.find((o) => o.id === id);
    if (!option) return;
    setSelectedId(id);
    if (option.conceptId && !discoveredConceptIds.includes(option.conceptId)) {
      onConceptDiscovered(option.conceptId);
    }
  };

  return (
    <div className="relative">
      <div className="bg-white border border-navy/10 rounded-xl p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-navy/8 flex items-center justify-center text-navy shrink-0">
            <GitBranch size={20} />
          </div>
          <p className="text-ink leading-relaxed pt-2">{data.prompt}</p>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-5 p-4 rounded-lg border"
            >
              <div className={`flex items-start gap-2.5 ${selected.isRecommended ? 'bg-teal/8 border-teal/15' : 'bg-gold/8 border-gold/20'}`}>
                <div className="flex items-start gap-2.5 w-full p-3.5">
                  {selected.isRecommended ? (
                    <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
                  ) : (
                    <Info size={18} className="text-gold-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-ink leading-relaxed">{selected.consequence}</p>
                    {selected.conceptId && (
                      <button
                        onClick={() => {
                          const concept = concepts.find((c) => c.id === selected.conceptId);
                          if (concept) setConceptPopup(concept);
                        }}
                        className="mt-2 inline-flex items-center gap-1 text-teal text-sm font-medium hover:underline"
                      >
                        Learn the concept
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <div className="space-y-2">
            {data.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className="w-full text-left p-3.5 rounded-lg border-2 border-navy/8 text-ink hover:border-teal hover:bg-teal/4 transition-all text-sm"
              >
                {option.text}
              </button>
            ))}
          </div>
        )}

        {selected && (
          <button
            onClick={() => setSelectedId(null)}
            className="text-sm text-ink-muted hover:text-navy transition-colors"
          >
            Try a different choice
          </button>
        )}
      </div>

      {conceptPopup && <ConceptCard concept={conceptPopup} onClose={() => setConceptPopup(null)} />}
    </div>
  );
}
