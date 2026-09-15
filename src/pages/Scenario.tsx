import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, BookOpen, LifeBuoy } from 'lucide-react';
import { getScenarioById, scenarios } from '@/data/scenarios';
import { getSourceById } from '@/data/sources';
import { SceneView } from '@/components/SceneView';
import { ProgressBar } from '@/components/ProgressBar';
import { Card } from '@/components/Card';
import { Disclaimer } from '@/components/Disclaimer';
import { useProgress } from '@/hooks/useProgress';

export function Scenario() {
  const { scenarioId } = useParams<{ scenarioId: string }>();
  const navigate = useNavigate();
  const scenario = scenarioId ? getScenarioById(scenarioId) : undefined;
  const { completeScenario } = useProgress();

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [discoveredConceptIds, setDiscoveredConceptIds] = useState<string[]>([]);
  const [showTakeaways, setShowTakeaways] = useState(false);

  useEffect(() => {
    setCurrentSceneIndex(0);
    setDiscoveredConceptIds([]);
    setShowTakeaways(false);
  }, [scenarioId]);

  if (!scenario) {
    return (
      <div className="py-20 text-center">
        <p className="text-ink-light">Scenario not found.</p>
        <Link to="/learn" className="mt-4 inline-block btn-outline">
          Back to Learning
        </Link>
      </div>
    );
  }

  if (scenario.status === 'coming-soon') {
    return (
      <div className="py-20 text-center container-page">
        <p className="text-ink-light text-lg">This module is coming soon.</p>
        <Link to="/learn" className="mt-4 inline-block btn-outline">
          Back to Learning
        </Link>
      </div>
    );
  }

  const currentScene = scenario.scenes[currentSceneIndex];
  const isLastScene = currentSceneIndex === scenario.scenes.length - 1;
  const allDiscovered = scenario.concepts.every((c) => discoveredConceptIds.includes(c.id));

  const handleConceptDiscovered = (conceptId: string) => {
    setDiscoveredConceptIds((prev) => [...new Set([...prev, conceptId])]);
  };

  const handleNext = () => {
    if (isLastScene) {
      completeScenario(scenario.id, discoveredConceptIds);
      setShowTakeaways(true);
    } else {
      setCurrentSceneIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSceneIndex > 0) setCurrentSceneIndex((prev) => prev - 1);
  };

  if (showTakeaways) {
    return (
      <div className="py-12">
        <div className="container-page max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center text-teal mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-navy">Scenario Complete</h1>
              <p className="mt-2 text-ink-light">
                You explored {discoveredConceptIds.length} concept{discoveredConceptIds.length !== 1 ? 's' : ''}.
              </p>
            </div>

            <Card className="p-6 mb-6">
              <h2 className="font-bold text-navy text-lg mb-4">You learned:</h2>
              <div className="space-y-2">
                {scenario.concepts
                  .filter((c) => discoveredConceptIds.includes(c.id))
                  .map((concept) => (
                    <div key={concept.id} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-navy text-sm">{concept.term}</p>
                        <p className="text-xs text-ink-light mt-0.5">{concept.takeaway}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>

            <Card className="p-6 mb-6">
              <h2 className="font-bold text-navy text-lg mb-4">Practical takeaways:</h2>
              <div className="space-y-3">
                {scenario.takeaways.map((takeaway, i) => (
                  <div key={takeaway.id} className="flex items-start gap-3">
                    <span className="text-teal font-bold text-sm shrink-0 w-7">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-ink-light text-sm leading-relaxed">{takeaway.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            {scenario.sourceIds.length > 0 && (
              <Card className="p-6 mb-6">
                <h2 className="font-bold text-navy text-sm mb-3">Sources:</h2>
                <div className="space-y-2">
                  {scenario.sourceIds.map(getSourceById).filter(Boolean).map((source) => (
                    <a
                      key={source!.id}
                      href={source!.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-teal hover:underline"
                    >
                      {source!.title} — {source!.organization}
                    </a>
                  ))}
                </div>
              </Card>
            )}

            <Disclaimer variant="compact" className="mb-6" />

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/learn" className="btn-outline flex-1">
                Continue Learning
              </Link>
              <Link to="/assistant" className="btn-secondary flex-1">
                <LifeBuoy size={18} />
                Ask About a Situation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container-page">
        {/* Back link */}
        <Link
          to="/learn"
          className="inline-flex items-center gap-1.5 text-sm text-ink-light hover:text-navy transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Back to Learning
        </Link>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-navy">{scenario.title}</h1>
          <div className="mt-3 mb-4">
            <ProgressBar
              value={currentSceneIndex + 1}
              max={scenario.scenes.length}
              label={`Scene ${currentSceneIndex + 1} of ${scenario.scenes.length}`}
            />
          </div>
        </div>

        {/* Concept progress */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-sm text-ink-light font-medium">Concepts discovered:</span>
          {scenario.concepts.map((concept) => {
            const found = discoveredConceptIds.includes(concept.id);
            return (
              <span
                key={concept.id}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                  found ? 'bg-teal/10 text-teal' : 'bg-navy/5 text-ink-muted'
                }`}
              >
                {found ? <CheckCircle2 size={12} /> : <Circle size={12} />}
                {concept.term}
              </span>
            );
          })}
        </div>

        {/* Scene */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SceneView
              scene={currentScene}
              concepts={scenario.concepts}
              onConceptDiscovered={handleConceptDiscovered}
              discoveredConceptIds={discoveredConceptIds}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentSceneIndex === 0}
            className={`btn-ghost ${currentSceneIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            <ArrowLeft size={16} /> Previous
          </button>

          <div className="flex items-center gap-2">
            {scenario.scenes.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSceneIndex ? 'w-8 bg-teal' : i < currentSceneIndex ? 'w-1.5 bg-teal/40' : 'w-1.5 bg-navy/15'
                }`}
              />
            ))}
          </div>

          <button onClick={handleNext} className="btn-primary">
            {isLastScene ? 'Complete' : 'Next'}
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Other scenarios */}
        <div className="mt-12 pt-8 border-t border-navy/8">
          <h3 className="text-sm font-semibold text-ink-light mb-4">Try another scenario:</h3>
          <div className="flex flex-wrap gap-2">
            {scenarios
              .filter((s) => s.id !== scenario.id && s.status === 'available')
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/learn/${s.id}`}
                  className="chip hover:chip-active"
                >
                  <BookOpen size={14} />
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
