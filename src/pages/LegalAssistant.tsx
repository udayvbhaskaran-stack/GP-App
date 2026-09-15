import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LifeBuoy,
  Send,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Loader2,
  BookOpen,
  ExternalLink,
  ShieldAlert,
  Lightbulb,
  HelpCircle,
} from 'lucide-react';
import { Card, TrustBadge } from '@/components/Card';
import { Disclaimer } from '@/components/Disclaimer';
import { mockScenarios } from '@/data/mockAi';
import { getScenarioById } from '@/data/scenarios';
import type { AIResponse } from '@/types';

type AIState = 'idle' | 'loading' | 'success' | 'error' | 'unsafe' | 'empty';

const unsafeKeywords = [
  'how to commit',
  'how to evade police',
  'falsify evidence',
  'destroy evidence',
  'lie in court',
  'impersonate a lawyer',
  'hack into',
  'steal',
];

function checkUnsafe(input: string): boolean {
  const lower = input.toLowerCase();
  return unsafeKeywords.some((kw) => lower.includes(kw));
}

function findMockResponse(input: string): AIResponse | null {
  const lower = input.toLowerCase();
  if (lower.includes('landlord') || lower.includes('deposit') || lower.includes('rent'))
    return mockScenarios[0].response;
  if (lower.includes('report') || lower.includes('crime') || lower.includes('stolen') || lower.includes('police'))
    return mockScenarios[1].response;
  if (lower.includes('defective') || lower.includes('product') || lower.includes('consumer') || lower.includes('refund'))
    return mockScenarios[2].response;
  if (lower.includes('lawyer') || lower.includes('legal aid') || lower.includes('cannot afford') || lower.includes('legal assistance'))
    return mockScenarios[3].response;
  return null;
}

export function LegalAssistant() {
  const [input, setInput] = useState('');
  const [aiState, setAiState] = useState<AIState>('idle');
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [expandedConcepts, setExpandedConcepts] = useState<number[]>([]);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [response]);

  const handleSubmit = () => {
    if (!input.trim()) {
      setAiState('empty');
      return;
    }

    if (checkUnsafe(input)) {
      setAiState('unsafe');
      setResponse(null);
      return;
    }

    setAiState('loading');
    setResponse(null);

    setTimeout(() => {
      const mockResponse = findMockResponse(input);
      if (mockResponse) {
        setResponse(mockResponse);
        setAiState('success');
        setExpandedConcepts([]);
      } else {
        setAiState('error');
      }
    }, 1800);
  };

  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput);
  };

  const toggleConcept = (index: number) => {
    setExpandedConcepts((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const relatedScenario = response?.relatedScenarioId ? getScenarioById(response.relatedScenarioId) : null;

  return (
    <div className="py-8">
      <div className="container-page max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="w-14 h-14 rounded-xl bg-navy/8 flex items-center justify-center text-navy mx-auto mb-4">
            <LifeBuoy size={28} />
          </div>
          <h1 className="text-3xl font-bold text-navy">What happened?</h1>
          <p className="mt-3 text-ink-light text-lg">
            You don't need to know legal terminology. Describe the situation in your own words.
          </p>
        </div>

        {/* Input card */}
        <Card className="p-6 mb-6">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="For example: My landlord has not returned my security deposit after I moved out..."
            rows={5}
            className="input-base resize-none"
            aria-label="Describe your legal situation"
          />

          <div className="mt-3 flex items-start gap-2.5 p-3 bg-navy/4 rounded-lg">
            <ShieldAlert size={16} className="text-gold-600 shrink-0 mt-0.5" />
            <p className="text-xs text-ink-light leading-relaxed">
              Please don't enter passwords, financial information, full addresses, phone numbers, or
              other unnecessary personal information.
            </p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={aiState === 'loading'}
            className="btn-primary w-full mt-4"
          >
            {aiState === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Understanding your situation...
              </>
            ) : (
              <>
                <Send size={18} />
                Understand My Situation
              </>
            )}
          </button>
        </Card>

        {/* Example scenarios */}
        {aiState === 'idle' && (
          <div className="mb-6">
            <p className="text-sm text-ink-light mb-3 flex items-center gap-1.5">
              <Lightbulb size={14} className="text-gold-600" />
              Not sure what to write? Try an example:
            </p>
            <div className="flex flex-col gap-2">
              {mockScenarios.map((mock) => (
                <button
                  key={mock.id}
                  onClick={() => handleExampleClick(mock.input)}
                  className="text-left p-3.5 bg-white border border-navy/8 rounded-lg text-sm text-ink-light hover:border-teal hover:text-navy transition-colors"
                >
                  {mock.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {aiState === 'empty' && (
          <Card className="p-6 text-center border-warning/30">
            <HelpCircle size={28} className="text-warning mx-auto mb-3" />
            <p className="text-ink-light">Please describe what happened before continuing.</p>
          </Card>
        )}

        {/* Loading state */}
        {aiState === 'loading' && (
          <Card className="p-8 text-center">
            <Loader2 size={32} className="text-teal animate-spin mx-auto mb-4" />
            <p className="text-ink-light">Understanding your situation...</p>
            <p className="text-sm text-ink-muted mt-1">This may take a moment.</p>
          </Card>
        )}

        {/* Unsafe request */}
        {aiState === 'unsafe' && (
          <Card className="p-6 border-error/30">
            <div className="flex items-start gap-3">
              <AlertTriangle size={24} className="text-error shrink-0" />
              <div>
                <p className="font-medium text-navy">
                  We can't help with that request, but you can explore our educational resources.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link to="/learn" className="btn-outline text-sm">
                    <BookOpen size={16} /> Browse Learning Modules
                  </Link>
                  <Link to="/dictionary" className="btn-outline text-sm">
                    Legal Dictionary
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Error state */}
        {aiState === 'error' && (
          <Card className="p-6 text-center">
            <AlertTriangle size={28} className="text-warning mx-auto mb-3" />
            <p className="text-navy font-medium">We couldn't identify a clear legal category from this description.</p>
            <p className="text-sm text-ink-light mt-2">
              You may want to explore these topics instead:
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Link to="/learn" className="btn-outline text-sm">Browse Learning Modules</Link>
              <Link to="/dictionary" className="btn-outline text-sm">Legal Dictionary</Link>
              <Link to="/resources" className="btn-outline text-sm">View Official Resources</Link>
            </div>
          </Card>
        )}

        {/* AI Response */}
        <AnimatePresence>
          {aiState === 'success' && response && (
            <motion.div
              ref={responseRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {/* Possible area */}
              <Card className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrustBadge type="general">What this situation may involve</TrustBadge>
                </div>
                {response.possibleAreas.map((area) => (
                  <p key={area} className="text-navy font-medium">
                    Possible area: {area}
                  </p>
                ))}
                <p className="mt-2 text-sm text-ink-light leading-relaxed">{response.summary}</p>
              </Card>

              {/* Concepts */}
              <Card className="p-5">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Lightbulb size={18} className="text-gold-600" />
                  What you may want to know
                </h3>
                <div className="space-y-2">
                  {response.concepts.map((concept, i) => (
                    <div key={i} className="border border-navy/8 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleConcept(i)}
                        className="w-full flex items-center justify-between p-3.5 text-left hover:bg-navy/3 transition-colors"
                      >
                        <span className="font-medium text-navy text-sm">{concept.term}</span>
                        {concept.expandable && (
                          <ChevronDown
                            size={16}
                            className={`text-ink-muted transition-transform ${
                              expandedConcepts.includes(i) ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>
                      {expandedConcepts.includes(i) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          className="px-3.5 pb-3.5"
                        >
                          <p className="text-sm text-ink-light leading-relaxed">{concept.explanation}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Next steps */}
              <Card className="p-5">
                <h3 className="font-bold text-navy mb-4">Possible next steps</h3>
                <div className="space-y-3">
                  {response.possibleNextSteps.map((step) => (
                    <div key={step.number} className="flex items-start gap-4">
                      <span className="text-teal font-bold text-lg shrink-0 w-9">{step.number}</span>
                      <div>
                        <p className="font-medium text-navy text-sm">{step.title}</p>
                        <p className="text-sm text-ink-light mt-1 leading-relaxed">{step.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Questions to consider */}
              {response.questionsToConsider.length > 0 && (
                <Card className="p-5">
                  <h3 className="font-bold text-navy mb-3 text-sm">Questions to consider</h3>
                  <ul className="space-y-2">
                    {response.questionsToConsider.map((q, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-light">
                        <HelpCircle size={14} className="text-teal shrink-0 mt-0.5" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Resources */}
              {response.resources.length > 0 && (
                <Card className="p-5">
                  <h3 className="font-bold text-navy mb-3 text-sm">Official resources</h3>
                  <div className="space-y-2">
                    {response.resources.map((resource, i) => (
                      <a
                        key={i}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-navy/3 rounded-lg hover:bg-navy/6 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-medium text-navy">{resource.title}</p>
                          <p className="text-xs text-ink-muted">{resource.organization}</p>
                        </div>
                        <ExternalLink size={16} className="text-teal group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </Card>
              )}

              {/* Related learning module */}
              {relatedScenario && (
                <Card hover className="p-5 bg-teal/4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal/15 flex items-center justify-center text-teal">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-teal font-semibold uppercase tracking-wider">Learn more</p>
                        <p className="font-medium text-navy text-sm">
                          {relatedScenario.title}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/learn/${relatedScenario.id}`}
                      className="btn-secondary text-sm shrink-0"
                    >
                      Explore <ChevronRight size={16} />
                    </Link>
                  </div>
                </Card>
              )}

              {/* Disclaimer */}
              <Disclaimer variant="full" />

              {/* Reset */}
              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    setAiState('idle');
                    setResponse(null);
                    setInput('');
                  }}
                  className="btn-ghost text-sm"
                >
                  Describe another situation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
