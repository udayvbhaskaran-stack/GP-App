import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUp, ArrowDown, CheckCircle2, RotateCcw } from 'lucide-react';
import type { TimelineStep, LegalConcept } from '@/types';
import { ConceptCard } from '../ConceptCard';

interface TimelineInteractionProps {
  data: TimelineStep;
  concepts: LegalConcept[];
  onConceptDiscovered: (conceptId: string) => void;
  discoveredConceptIds: string[];
}

export function TimelineInteraction({ data, concepts, onConceptDiscovered, discoveredConceptIds }: TimelineInteractionProps) {
  const [order, setOrder] = useState<string[]>(data.events.map((e) => e.id));
  const [showResults, setShowResults] = useState(false);
  const [conceptPopup, setConceptPopup] = useState<LegalConcept | null>(null);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...order];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    setOrder(newOrder);
  };

  const moveDown = (index: number) => {
    if (index === order.length - 1) return;
    const newOrder = [...order];
    [newOrder[index + 1], newOrder[index]] = [newOrder[index], newOrder[index + 1]];
    setOrder(newOrder);
  };

  const handleReset = () => {
    setOrder(data.events.map((e) => e.id));
    setShowResults(false);
  };

  const getEvent = (id: string) => data.events.find((e) => e.id === id)!;
  const isCorrect = (eventId: string, position: number) => {
    const event = getEvent(eventId);
    return event.correctOrder === position;
  };
  const correctCount = order.filter((id, i) => isCorrect(id, i)).length;

  const handleShowResults = () => {
    setShowResults(true);
    order.forEach((id, i) => {
      const event = getEvent(id);
      if (event.conceptId && isCorrect(id, i) && !discoveredConceptIds.includes(event.conceptId)) {
        onConceptDiscovered(event.conceptId);
      }
    });
  };

  return (
    <div className="relative">
      <div className="bg-white border border-navy/10 rounded-xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-lg bg-navy/8 flex items-center justify-center text-navy shrink-0">
            <Clock size={20} />
          </div>
          <p className="text-sm text-ink-light leading-relaxed">{data.instructions}</p>
        </div>

        {/* Timeline items */}
        <div className="space-y-2">
          {order.map((eventId, index) => {
            const event = getEvent(eventId);
            const correct = showResults && isCorrect(eventId, index);
            const wrong = showResults && !isCorrect(eventId, index);
            return (
              <div
                key={eventId}
                className={`flex items-center gap-3 p-3.5 rounded-lg border-2 transition-all ${
                  correct
                    ? 'border-teal/40 bg-teal/8'
                    : wrong
                    ? 'border-error/30 bg-error/5'
                    : 'border-navy/8 bg-white'
                }`}
              >
                <div className="flex flex-col gap-0.5 shrink-0">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0 || showResults}
                    className="text-ink-muted hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Move up"
                  >
                    <ArrowUp size={16} />
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === order.length - 1 || showResults}
                    className="text-ink-muted hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Move down"
                  >
                    <ArrowDown size={16} />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-navy/8 text-navy font-bold text-sm flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy">{event.label}</p>
                  <p className="text-xs text-ink-light mt-0.5">{event.description}</p>
                </div>
                {correct && <CheckCircle2 size={18} className="text-teal shrink-0" />}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="text-sm text-ink-muted hover:text-navy inline-flex items-center gap-1"
          >
            <RotateCcw size={14} /> Reset
          </button>
          {!showResults && (
            <button onClick={handleShowResults} className="btn-primary text-sm">
              Check order
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
                {correctCount} out of {order.length} in the correct position.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Concept links */}
        {showResults && (
          <div className="mt-3 flex flex-wrap gap-2">
            {data.events.filter((e) => e.conceptId).map((event) => (
              <button
                key={event.id}
                onClick={() => {
                  const concept = concepts.find((c) => c.id === event.conceptId);
                  if (concept) setConceptPopup(concept);
                }}
                className="inline-flex items-center gap-1 text-xs text-teal font-medium hover:underline"
              >
                {event.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {conceptPopup && <ConceptCard concept={conceptPopup} onClose={() => setConceptPopup(null)} />}
    </div>
  );
}
