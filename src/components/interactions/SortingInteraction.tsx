import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, CheckCircle2, RotateCcw } from 'lucide-react';
import type { SortingStep, LegalConcept } from '@/types';
import { ConceptCard } from '../ConceptCard';

interface SortingInteractionProps {
  data: SortingStep;
  concepts: LegalConcept[];
  onConceptDiscovered: (conceptId: string) => void;
  discoveredConceptIds: string[];
}

export function SortingInteraction({ data, concepts, onConceptDiscovered, discoveredConceptIds }: SortingInteractionProps) {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [conceptPopup, setConceptPopup] = useState<LegalConcept | null>(null);
  const [showResults, setShowResults] = useState(false);

  const unsortedItems = data.items.filter((item) => !placements[item.id]);
  const allPlaced = data.items.every((item) => placements[item.id]);

  const handlePlace = (itemId: string, category: string) => {
    const item = data.items.find((i) => i.id === itemId);
    if (!item) return;
    const newPlacements = { ...placements, [itemId]: category };
    setPlacements(newPlacements);
    if (item.conceptId && !discoveredConceptIds.includes(item.conceptId)) {
      onConceptDiscovered(item.conceptId);
    }
  };

  const handleRemove = (itemId: string) => {
    const newPlacements = { ...placements };
    delete newPlacements[itemId];
    setPlacements(newPlacements);
  };

  const getCorrectCount = () => {
    return data.items.filter((item) => placements[item.id] === item.correctCategory).length;
  };

  return (
    <div className="relative">
      <div className="bg-white border border-navy/10 rounded-xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-lg bg-navy/8 flex items-center justify-center text-navy shrink-0">
            <Layers size={20} />
          </div>
          <p className="text-sm text-ink-light leading-relaxed">{data.instructions}</p>
        </div>

        {/* Unsorted items */}
        {unsortedItems.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Items to sort:</p>
            <div className="flex flex-wrap gap-2">
              {unsortedItems.map((item) => (
                <div
                  key={item.id}
                  className="px-3.5 py-2 bg-navy/5 border border-navy/10 rounded-lg text-sm text-navy font-medium"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.categories.map((category) => {
            const itemsInCategory = data.items.filter((item) => placements[item.id] === category);
            return (
              <div
                key={category}
                className="min-h-[100px] p-3 border-2 border-dashed border-navy/15 rounded-lg bg-navy/3"
              >
                <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">{category}</p>
                <div className="space-y-1.5">
                  {itemsInCategory.map((item) => {
                    const isCorrect = showResults && item.correctCategory === category;
                    const isWrong = showResults && item.correctCategory !== category;
                    return (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                          isCorrect
                            ? 'bg-teal/15 text-teal border border-teal/30'
                            : isWrong
                            ? 'bg-error/10 text-error border border-error/20'
                            : 'bg-white border border-navy/10 text-navy'
                        }`}
                      >
                        <span>{item.label}</span>
                        <div className="flex items-center gap-1">
                          {showResults && isCorrect && <CheckCircle2 size={12} />}
                          {!showResults && (
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-ink-muted hover:text-error text-xs"
                              aria-label="Remove"
                            >
                              x
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {!showResults && unsortedItems.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {unsortedItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handlePlace(item.id, category)}
                          className="text-xs px-2 py-1 bg-white border border-navy/10 rounded text-ink-muted hover:border-teal hover:text-teal transition-colors"
                        >
                          + {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => { setPlacements({}); setShowResults(false); }}
            className="text-sm text-ink-muted hover:text-navy inline-flex items-center gap-1"
          >
            <RotateCcw size={14} /> Reset
          </button>
          {allPlaced && !showResults && (
            <button
              onClick={() => setShowResults(true)}
              className="btn-primary text-sm"
            >
              Check answers
            </button>
          )}
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-3.5 bg-teal/8 rounded-lg"
            >
              <p className="text-sm text-navy font-medium">
                You got {getCorrectCount()} out of {data.items.length} correct.
              </p>
              <p className="text-xs text-ink-light mt-1">
                Items marked in green are in the correct category. Items in red should be moved.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Concept links */}
        {showResults && (
          <div className="mt-3 flex flex-wrap gap-2">
            {data.items.filter((i) => i.conceptId).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const concept = concepts.find((c) => c.id === item.conceptId);
                  if (concept) setConceptPopup(concept);
                }}
                className="inline-flex items-center gap-1 text-xs text-teal font-medium hover:underline"
              >
                <BookOpen size={12} /> {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {conceptPopup && <ConceptCard concept={conceptPopup} onClose={() => setConceptPopup(null)} />}
    </div>
  );
}
