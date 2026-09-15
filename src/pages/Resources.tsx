import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, LifeBuoy, BookOpen, FileText, Scale, Gavel, ShoppingBag, Monitor } from 'lucide-react';
import { Card, SectionHeader, TrustBadge } from '@/components/Card';
import { Disclaimer } from '@/components/Disclaimer';
import { resources } from '@/data/resources';
import type { ResourceItem } from '@/types';

const categoryLabels: Record<string, string> = {
  government: 'Government & Official',
  'legal-aid': 'Legal Aid',
  courts: 'Courts & Judicial',
  police: 'Police',
  consumer: 'Consumer',
  cyber: 'Cyber & Digital',
};

const categoryIcons: Record<string, React.ReactNode> = {
  government: <FileText size={20} />,
  'legal-aid': <Scale size={20} />,
  courts: <Gavel size={20} />,
  police: <LifeBuoy size={20} />,
  consumer: <ShoppingBag size={20} />,
  cyber: <Monitor size={20} />,
};

export function Resources() {
  const grouped = resources.reduce((acc, res) => {
    if (!acc[res.category]) acc[res.category] = [];
    acc[res.category].push(res);
    return acc;
  }, {} as Record<string, ResourceItem[]>);

  return (
    <div className="py-12">
      <div className="container-page">
        <SectionHeader
          label="Get Help"
          title="Official Legal Resources"
          subtitle="A curated list of official Indian legal resources. These are government and institutional sources where you can find authoritative information or seek assistance."
          className="mb-10"
        />

        <Disclaimer variant="compact" className="mb-8" />

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h2 className="font-bold text-navy text-lg mb-4 flex items-center gap-2">
              <span className="text-teal">{categoryIcons[category]}</span>
              {categoryLabels[category] || category}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((resource, i) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Card hover className="p-5 h-full">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-navy text-base">{resource.organization}</h3>
                      <TrustBadge type="official">Official</TrustBadge>
                    </div>
                    <p className="text-sm text-ink-light leading-relaxed mb-3">{resource.description}</p>
                    <div className="p-3 bg-navy/3 rounded-lg mb-3">
                      <p className="text-xs font-semibold text-teal mb-1">What you can use it for</p>
                      <p className="text-sm text-ink-light leading-relaxed">{resource.useCase}</p>
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:underline"
                    >
                      Official website <ExternalLink size={14} />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <Card className="p-6 mt-8 text-center">
          <h3 className="font-bold text-navy text-lg">Need help understanding a situation?</h3>
          <p className="mt-2 text-ink-light text-sm max-w-md mx-auto">
            Try our AI assistant to describe your situation and explore what may apply.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <Link to="/assistant" className="btn-primary text-sm">
              <LifeBuoy size={16} /> Try the Assistant
            </Link>
            <Link to="/learn" className="btn-outline text-sm">
              <BookOpen size={16} /> Browse Learning Modules
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
