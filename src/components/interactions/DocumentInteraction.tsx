import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, Circle, Search, BookOpen } from 'lucide-react';
import type { DocumentStep, LegalConcept } from '@/types';
import { ConceptCard } from '../ConceptCard';

interface DocumentInteractionProps {
  data: DocumentStep;
  concepts: LegalConcept[];
  onConceptDiscovered: (conceptId: string) => void;
  discoveredConceptIds: string[];
}

export function DocumentInteraction({ data, concepts, onConceptDiscovered, discoveredConceptIds }: DocumentInteractionProps) {
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [conceptPopup, setConceptPopup] = useState<LegalConcept | null>(null);
  const [foundKeyInfo, setFoundKeyInfo] = useState<string[]>([]);

  const handleFieldClick = (fieldId: string) => {
    const field = data.fields.find((f) => f.id === fieldId);
    if (!field) return;
    setSelectedField(fieldId);
    if (field.isKeyInfo && !foundKeyInfo.includes(fieldId)) {
      setFoundKeyInfo([...foundKeyInfo, fieldId]);
    }
    if (field.conceptId && !discoveredConceptIds.includes(field.conceptId)) {
      onConceptDiscovered(field.conceptId);
    }
  };

  const totalKeyInfo = data.fields.filter((f) => f.isKeyInfo).length;
  const selectedFieldData = data.fields.find((f) => f.id === selectedField);

  return (
    <div className="relative">
      <div className="bg-white border border-navy/10 rounded-xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-lg bg-navy/8 flex items-center justify-center text-navy shrink-0">
            <FileText size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-teal uppercase tracking-wider">{data.documentType}</p>
            <h3 className="font-bold text-navy">{data.title}</h3>
          </div>
        </div>

        <div className="mb-4 p-3 bg-teal/8 rounded-lg flex items-start gap-2.5">
          <Search size={16} className="text-teal shrink-0 mt-0.5" />
          <p className="text-sm text-ink-light leading-relaxed">{data.instructions}</p>
        </div>

        <div className="mb-4 flex items-center gap-2 text-sm">
          <span className="text-ink-muted">Key information found:</span>
          <span className="font-semibold text-teal">{foundKeyInfo.length} / {totalKeyInfo}</span>
        </div>

        {/* Document fields */}
        <div className="grid sm:grid-cols-2 gap-2.5">
          {data.fields.map((field) => {
            const isFound = foundKeyInfo.includes(field.id);
            const isSelected = selectedField === field.id;
            return (
              <button
                key={field.id}
                onClick={() => handleFieldClick(field.id)}
                className={`text-left p-3.5 rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-teal bg-teal/8'
                    : isFound
                    ? 'border-teal/30 bg-teal/4'
                    : 'border-navy/8 hover:border-teal/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">{field.label}</span>
                  {field.isKeyInfo && (
                    isFound ? <CheckCircle2 size={14} className="text-teal" /> : <Circle size={14} className="text-ink-muted/40" />
                  )}
                </div>
                <p className="text-sm text-navy font-medium">{field.value}</p>
                {isSelected && field.hint && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs text-ink-light italic"
                  >
                    {field.hint}
                  </motion.p>
                )}
              </button>
            );
          })}
        </div>

        {/* Concept link for selected field */}
        <AnimatePresence>
          {selectedFieldData?.conceptId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4"
            >
              <button
                onClick={() => {
                  const concept = concepts.find((c) => c.id === selectedFieldData.conceptId);
                  if (concept) setConceptPopup(concept);
                }}
                className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:underline"
              >
                <BookOpen size={14} />
                Learn the concept behind this field
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {conceptPopup && <ConceptCard concept={conceptPopup} onClose={() => setConceptPopup(null)} />}
    </div>
  );
}
