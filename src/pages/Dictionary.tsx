import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ExternalLink, BookOpen, Tag } from 'lucide-react';
import { Card, SectionHeader } from '@/components/Card';
import { legalTerms } from '@/data/legalTerms';
import { getSourceById } from '@/data/sources';
import type { LegalTerm } from '@/types';

const categories = [
  'All',
  'Police',
  'Courts',
  'Criminal law',
  'Civil matters',
  'Legal assistance',
  'Consumer issues',
  'Digital issues',
] as const;

export function Dictionary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTerm, setSelectedTerm] = useState<LegalTerm | null>(null);

  const filteredTerms = useMemo(() => {
    return legalTerms.filter((term) => {
      const matchesSearch =
        !search ||
        term.term.toLowerCase().includes(search.toLowerCase()) ||
        term.simpleDefinition.toLowerCase().includes(search.toLowerCase()) ||
        term.relatedTerms.some((rt) => rt.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || term.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="py-12">
      <div className="container-page">
        <SectionHeader
          label="Reference"
          title="Legal Terms, Explained"
          subtitle="Search for legal terms and read plain-language explanations. Each term includes why it matters and links to official sources."
          className="mb-8"
        />

        {/* Search */}
        <div className="relative mb-6">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search a term..."
            className="input-base pl-12"
            aria-label="Search legal terms"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted hover:text-navy"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`chip ${activeCategory === cat ? 'chip-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filteredTerms.length === 0 ? (
          <Card className="p-8 text-center">
            <Search size={28} className="text-ink-muted mx-auto mb-3" />
            <p className="text-ink-light">No terms found. Try a different search or category.</p>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map((term, i) => (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <Card hover className="p-5 h-full cursor-pointer" onClick={() => setSelectedTerm(term)}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-navy">{term.term}</h3>
                    <span className="chip text-xs shrink-0">
                      <Tag size={10} />
                      {term.category}
                    </span>
                  </div>
                  <p className="text-sm text-ink-light leading-relaxed line-clamp-3">
                    {term.simpleDefinition}
                  </p>
                  <p className="mt-3 text-teal text-sm font-medium">Read more</p>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Term detail modal */}
      <AnimatePresence>
        {selectedTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm"
            onClick={() => setSelectedTerm(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-card shadow-card-lg max-w-lg w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="chip text-xs mb-2">
                      <Tag size={10} /> {selectedTerm.category}
                    </span>
                    <h3 className="text-xl font-bold text-navy mt-2">{selectedTerm.term}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedTerm(null)}
                    className="text-ink-muted hover:text-navy p-1 rounded-lg hover:bg-navy/5"
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
                    <p className="text-ink leading-relaxed">{selectedTerm.simpleDefinition}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-1">
                      Why it matters
                    </p>
                    <p className="text-ink leading-relaxed">{selectedTerm.whyItMatters}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-2">
                      Related concepts
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTerm.relatedTerms.map((rt) => (
                        <span key={rt} className="chip text-xs">{rt}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-2">
                      Sources
                    </p>
                    <div className="space-y-2">
                      {selectedTerm.sourceIds.map(getSourceById).filter(Boolean).map((source) => (
                        <a
                          key={source!.id}
                          href={source!.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-navy/3 rounded-lg hover:bg-navy/6 transition-colors group"
                        >
                          <div>
                            <p className="text-sm font-medium text-navy">{source!.title}</p>
                            <p className="text-xs text-ink-muted">{source!.organization}</p>
                          </div>
                          <ExternalLink size={16} className="text-teal" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <button onClick={() => setSelectedTerm(null)} className="btn-primary w-full mt-6">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
