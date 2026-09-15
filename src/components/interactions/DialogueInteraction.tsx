import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { DialogueStep, LegalConcept } from '@/types';
import { ConceptCard } from '../ConceptCard';

interface DialogueInteractionProps {
  data: DialogueStep;
  concepts: LegalConcept[];
  onConceptDiscovered: (conceptId: string) => void;
  discoveredConceptIds: string[];
}

export function DialogueInteraction({ data, concepts, onConceptDiscovered, discoveredConceptIds }: DialogueInteractionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const [conceptPopup, setConceptPopup] = useState<LegalConcept | null>(null);

  const handleSelect = (optionId: string) => {
    const option = data.options.find((o) => o.id === optionId);
    if (!option) return;
    setSelectedOption(optionId);
    setShowResponse(true);
    if (option.conceptId && !discoveredConceptIds.includes(option.conceptId)) {
      onConceptDiscovered(option.conceptId);
    }
  };

  const selectedOpt = data.options.find((o) => o.id === selectedOption);

  return (
    <div className="relative">
      <div className="bg-white border border-navy/10 rounded-xl p-5 sm:p-6">
        {/* Character prompt */}
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-navy/8 flex items-center justify-center text-navy shrink-0">
            <MessageCircle size={20} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-teal uppercase tracking-wider mb-1">
              {data.characterId}
            </p>
            <p className="text-ink leading-relaxed">{data.prompt}</p>
          </div>
        </div>

        {/* Response if shown */}
        <AnimatePresence>
          {showResponse && selectedOpt && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-5 p-4 bg-teal/8 rounded-lg border border-teal/15"
            >
              <p className="text-sm text-ink leading-relaxed">{selectedOpt.response}</p>
              {selectedOpt.conceptId && (
                <button
                  onClick={() => {
                    const concept = concepts.find((c) => c.id === selectedOpt.conceptId);
                    if (concept) setConceptPopup(concept);
                  }}
                  className="mt-2 inline-flex items-center gap-1 text-teal text-sm font-medium hover:underline"
                >
                  Learn the concept <ChevronRight size={14} />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Options */}
        {!showResponse && (
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

        {/* Try another option */}
        {showResponse && (
          <button
            onClick={() => { setSelectedOption(null); setShowResponse(false); }}
            className="text-sm text-ink-muted hover:text-navy transition-colors"
          >
            Try a different response
          </button>
        )}
      </div>

      {/* Progress indicator */}
      <div className="mt-3 flex flex-wrap gap-2">
        {data.options.filter((o) => o.conceptId).map((opt) => {
          const found = opt.conceptId && discoveredConceptIds.includes(opt.conceptId);
          return (
            <span key={opt.id} className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
              found ? 'bg-teal/10 text-teal' : 'bg-navy/5 text-ink-muted'
            }`}>
              {found && <CheckCircle2 size={10} />}
              {opt.text.length > 25 ? opt.text.slice(0, 25) + '...' : opt.text}
            </span>
          );
        })}
      </div>

      {conceptPopup && <ConceptCard concept={conceptPopup} onClose={() => setConceptPopup(null)} />}
    </div>
  );
}
