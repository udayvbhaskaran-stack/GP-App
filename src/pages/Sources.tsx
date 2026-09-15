import { motion } from 'framer-motion';
import { ExternalLink, BookMarked } from 'lucide-react';
import { Card, SectionHeader, TrustBadge } from '@/components/Card';
import { sources } from '@/data/sources';

const categoryLabels: Record<string, string> = {
  government: 'Government & Official Institutions',
  courts: 'Courts & Judicial Resources',
  'legal-services': 'Legal Services',
  legislation: 'Legislation',
  research: 'Research / Academic Sources',
};

const categoryOrder = ['legislation', 'government', 'courts', 'legal-services', 'research'];

export function Sources() {
  const grouped = sources.reduce((acc, source) => {
    if (!acc[source.category]) acc[source.category] = [];
    acc[source.category].push(source);
    return acc;
  }, {} as Record<string, typeof sources>);

  return (
    <div className="py-12">
      <div className="container-page">
        <SectionHeader
          label="Sources"
          title="Sources & Further Reading"
          subtitle="Our educational content is based on research and authoritative sources. Below are the primary and secondary sources referenced throughout this platform."
          className="mb-10"
        />

        {categoryOrder.map((category) => {
          const items = grouped[category];
          if (!items || items.length === 0) return null;

          return (
            <div key={category} className="mb-10">
              <h2 className="font-bold text-navy text-lg mb-4">{categoryLabels[category]}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((source, i) => (
                  <motion.div
                    key={source.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <Card hover className="p-5 h-full">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold-600 shrink-0">
                            <BookMarked size={18} />
                          </div>
                          <div>
                            <h3 className="font-bold text-navy text-sm">{source.title}</h3>
                            <p className="text-xs text-ink-muted">{source.organization}</p>
                          </div>
                        </div>
                        <TrustBadge type={source.isOfficial ? 'official' : 'general'}>
                          {source.isOfficial ? 'Official' : 'Secondary'}
                        </TrustBadge>
                      </div>
                      <p className="text-sm text-ink-light leading-relaxed mb-3">{source.description}</p>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:underline"
                      >
                        Visit source <ExternalLink size={14} />
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
