import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, FileText, Scale, Gavel, ShoppingBag, Monitor, ChevronRight } from 'lucide-react';
import { Card, SectionHeader } from '@/components/Card';
import { scenarios } from '@/data/scenarios';
import { useProgress } from '@/hooks/useProgress';

const moduleIcons: Record<string, React.ReactNode> = {
  shield: <Shield size={24} />,
  'file-text': <FileText size={24} />,
  scale: <Scale size={24} />,
  gavel: <Gavel size={24} />,
  'shopping-bag': <ShoppingBag size={24} />,
  monitor: <Monitor size={24} />,
};

export function Learn() {
  const { completedScenarios } = useProgress();

  return (
    <div className="py-12">
      <div className="container-page">
        <SectionHeader
          label="Interactive Learning"
          title="Learn Through Real Situations"
          subtitle="You don't need to memorise the law. Explore situations, discover concepts and learn what they can mean in real life."
          className="mb-10"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((scenario, i) => {
            const isCompleted = completedScenarios.includes(scenario.id);
            const isAvailable = scenario.status === 'available';

            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link to={isAvailable ? `/learn/${scenario.id}` : '#'}>
                  <Card hover className="p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-navy/6 flex items-center justify-center text-navy">
                        {moduleIcons[scenario.icon]}
                      </div>
                      {isCompleted && (
                        <span className="chip chip-active">
                          <ChevronRight size={12} className="hidden" />
                          Completed
                        </span>
                      )}
                      {scenario.status === 'coming-soon' && (
                        <span className="chip">Coming soon</span>
                      )}
                    </div>

                    <h3 className="font-bold text-navy text-lg">{scenario.title}</h3>
                    <p className="mt-2 text-sm text-ink-light leading-relaxed">
                      {scenario.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {scenario.conceptsCovered.slice(0, 3).map((concept) => (
                        <span key={concept} className="chip text-xs">
                          {concept}
                        </span>
                      ))}
                      {scenario.conceptsCovered.length > 3 && (
                        <span className="chip text-xs">+{scenario.conceptsCovered.length - 3}</span>
                      )}
                    </div>

                    <div className="mt-5 pt-4 border-t border-navy/5 flex items-center justify-between">
                      <span className="text-xs text-ink-muted flex items-center gap-1">
                        <Clock size={12} /> {scenario.estimatedTime}
                      </span>
                      {isAvailable && (
                        <span className="text-teal text-sm font-medium inline-flex items-center gap-1">
                          {isCompleted ? 'Review' : 'Start'} <ArrowRight size={14} />
                        </span>
                      )}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
