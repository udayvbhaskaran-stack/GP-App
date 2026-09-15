import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Award,
} from 'lucide-react';
import { Card, SectionHeader } from '@/components/Card';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/Button';
import { preTestQuestions, postTestQuestions } from '@/data/questions';
import { useProgress } from '@/hooks/useProgress';
import { scenarios } from '@/data/scenarios';

type Phase = 'intro' | 'pre-test' | 'pre-confidence' | 'learning' | 'post-test' | 'post-confidence' | 'feedback' | 'results';

export function Evaluation() {
  const {
    preTestCompleted,
    postTestCompleted,
    preTestScore,
    postTestScore,
    preConfidence,
    postConfidence,
    feedbackSubmitted,
    setPreTestResult,
    setPostTestResult,
    setFeedbackSubmitted,
    completedScenarios,
  } = useProgress();

  const [phase, setPhase] = useState<Phase>(
    preTestCompleted && !postTestCompleted ? 'learning' : 'intro'
  );
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [confidence, setConfidence] = useState(3);
  const [feedback, setFeedback] = useState({
    madeEasier: '' as '' | 'yes' | 'somewhat' | 'no',
    mostUseful: '' as '' | 'ai-assistant' | 'interactive-scenarios' | 'legal-dictionary' | 'resources',
    improvement: '',
  });

  const questions = phase === 'pre-test' || phase === 'intro' ? preTestQuestions : postTestQuestions;

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const score = answers.reduce((acc, ans, i) => acc + (ans === questions[i].correctIndex ? 1 : 0), 0);
      if (phase === 'pre-test') {
        setPreTestResult(score, confidence);
        setPhase('learning');
      } else if (phase === 'post-test') {
        setPostTestResult(score, confidence);
        setPhase('feedback');
      }
      setAnswers([]);
      setCurrentQ(0);
    }
  };

  const startPreTest = () => {
    setPhase('pre-test');
    setCurrentQ(0);
    setAnswers([]);
  };

  const startPostTest = () => {
    setPhase('post-test');
    setCurrentQ(0);
    setAnswers([]);
  };

  const submitFeedback = () => {
    setFeedbackSubmitted();
    setPhase('results');
  };

  // Intro
  if (phase === 'intro') {
    return (
      <div className="py-12">
        <div className="container-page max-w-2xl text-center">
          <div className="w-16 h-16 rounded-xl bg-teal/10 flex items-center justify-center text-teal mx-auto mb-6">
            <ClipboardCheck size={32} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy">Help us measure our impact</h1>
          <p className="mt-4 text-ink-light text-lg leading-relaxed">
            This platform is part of a research project. By taking a short pre-test, exploring the
            learning modules, and then taking a post-test, you help us understand whether this tool
            makes a difference.
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            All responses are anonymous and stored only in your browser.
          </p>

          <Card className="p-6 mt-8 text-left">
            <h3 className="font-bold text-navy mb-4">How it works:</h3>
            <div className="space-y-3">
              {[
                { num: '01', text: 'Take a short pre-test (5 questions)' },
                { num: '02', text: 'Rate your confidence level' },
                { num: '03', text: 'Explore the interactive learning modules' },
                { num: '04', text: 'Take the post-test and rate your confidence again' },
                { num: '05', text: 'Share your feedback' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <span className="text-teal font-bold text-sm w-7 shrink-0">{step.num}</span>
                  <p className="text-ink-light text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <button onClick={startPreTest} className="btn-primary mt-8">
            Start Pre-Test <ArrowRight size={18} />
          </button>

          {preTestCompleted && (
            <p className="mt-4 text-sm text-ink-muted">
              You have already completed the pre-test.{' '}
              <button onClick={() => setPhase('learning')} className="text-teal underline">
                Continue to learning
              </button>
            </p>
          )}
        </div>
      </div>
    );
  }

  // Test phase (pre or post)
  if (phase === 'pre-test' || phase === 'post-test') {
    const isPre = phase === 'pre-test';
    const q = questions[currentQ];

    return (
      <div className="py-12">
        <div className="container-page max-w-2xl">
          <p className="section-label mb-3">{isPre ? 'Pre-Test' : 'Post-Test'}</p>
          <h1 className="text-2xl font-bold text-navy mb-6">
            {isPre ? 'What do you already know?' : 'What do you know now?'}
          </h1>

          <ProgressBar
            value={currentQ + 1}
            max={questions.length}
            label={`Question ${currentQ + 1} of ${questions.length}`}
            className="mb-6"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <Card className="p-6">
                <p className="text-lg font-medium text-navy mb-5">{q.question}</p>
                <div className="space-y-2">
                  {q.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        answers[currentQ] === i
                          ? 'border-teal bg-teal/8 text-navy'
                          : 'border-navy/8 text-ink-light hover:border-teal/40 hover:bg-teal/4'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => currentQ > 0 && setCurrentQ(currentQ - 1)}
              disabled={currentQ === 0}
              className={`btn-ghost ${currentQ === 0 ? 'opacity-40' : ''}`}
            >
              <ArrowLeft size={16} /> Previous
            </button>
            <button
              onClick={handleNext}
              disabled={answers[currentQ] === undefined}
              className={`btn-primary ${answers[currentQ] === undefined ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {currentQ === questions.length - 1 ? 'Submit' : 'Next'} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Confidence measurement
  if (phase === 'pre-confidence' || phase === 'post-confidence') {
    const isPre = phase === 'pre-confidence';
    return (
      <div className="py-12">
        <div className="container-page max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-navy mb-3">
            {isPre ? 'Before you start' : 'After learning'}
          </h1>
          <p className="text-ink-light text-lg mb-8">
            How confident are you that you would know where to seek reliable legal information if you
            faced a legal problem?
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setConfidence(num)}
                className={`w-14 h-14 rounded-xl font-bold text-lg transition-all ${
                  confidence === num
                    ? 'bg-teal text-white scale-110 shadow-lg'
                    : 'bg-white border-2 border-navy/10 text-navy hover:border-teal'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <div className="flex justify-between text-sm text-ink-muted mb-8">
            <span>Not confident</span>
            <span>Very confident</span>
          </div>

          <button
            onClick={() => {
              if (isPre) {
                setPreTestResult(answers.reduce((acc, ans, i) => acc + (ans === preTestQuestions[i].correctIndex ? 1 : 0), 0), confidence);
                setPhase('learning');
              } else {
                setPostTestResult(answers.reduce((acc, ans, i) => acc + (ans === postTestQuestions[i].correctIndex ? 1 : 0), 0), confidence);
                setPhase('feedback');
              }
            }}
            className="btn-primary"
          >
            Continue <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // Learning phase
  if (phase === 'learning') {
    const availableScenarios = scenarios.filter((s) => s.status === 'available');
    const completedCount = completedScenarios.length;

    return (
      <div className="py-12">
        <div className="container-page max-w-2xl text-center">
          <div className="w-16 h-16 rounded-xl bg-teal/10 flex items-center justify-center text-teal mx-auto mb-6">
            <TrendingUp size={32} />
          </div>
          <h1 className="text-2xl font-bold text-navy">Now explore the learning modules</h1>
          <p className="mt-3 text-ink-light text-lg">
            Take your time going through the interactive scenarios. When you are done, come back
            here to take the post-test.
          </p>

          {completedCount > 0 && (
            <Card className="p-4 mt-6 inline-flex items-center gap-2">
              <CheckCircle2 size={18} className="text-teal" />
              <span className="text-sm text-navy font-medium">
                {completedCount} module{completedCount !== 1 ? 's' : ''} completed
              </span>
            </Card>
          )}

          <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
            {availableScenarios.map((s) => (
              <Link
                key={s.id}
                to={`/learn/${s.id}`}
                className="card-base card-hover p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-navy text-sm">{s.title}</p>
                  <p className="text-xs text-ink-muted">{s.estimatedTime}</p>
                </div>
                {completedScenarios.includes(s.id) ? (
                  <CheckCircle2 size={18} className="text-teal" />
                ) : (
                  <ArrowRight size={16} className="text-teal" />
                )}
              </Link>
            ))}
          </div>

          <button onClick={startPostTest} className="btn-primary mt-8">
            I'm Ready — Take the Post-Test <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // Feedback
  if (phase === 'feedback') {
    return (
      <div className="py-12">
        <div className="container-page max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold-600 mx-auto mb-4">
              <MessageSquare size={28} />
            </div>
            <h1 className="text-2xl font-bold text-navy">Help us improve</h1>
            <p className="mt-2 text-ink-light">Your feedback helps us understand what worked and what can be better.</p>
          </div>

          <Card className="p-6 space-y-6">
            <div>
              <p className="font-medium text-navy mb-3">Did this website make legal information easier to understand?</p>
              <div className="flex gap-2">
                {(['yes', 'somewhat', 'no'] as const).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFeedback({ ...feedback, madeEasier: opt })}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium capitalize transition-all ${
                      feedback.madeEasier === opt
                        ? 'bg-teal text-white'
                        : 'bg-navy/5 text-ink-light hover:bg-navy/10'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-navy mb-3">Which part was most useful?</p>
              <div className="flex flex-wrap gap-2">
                {([
                  { id: 'ai-assistant', label: 'AI Assistant' },
                  { id: 'interactive-scenarios', label: 'Interactive Scenarios' },
                  { id: 'legal-dictionary', label: 'Legal Dictionary' },
                  { id: 'resources', label: 'Resources' },
                ] as const).map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setFeedback({ ...feedback, mostUseful: opt.id })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      feedback.mostUseful === opt.id
                        ? 'bg-teal text-white'
                        : 'bg-navy/5 text-ink-light hover:bg-navy/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-navy mb-3">What would you change? (Optional)</p>
              <textarea
                value={feedback.improvement}
                onChange={(e) => setFeedback({ ...feedback, improvement: e.target.value })}
                placeholder="Share any suggestions..."
                rows={3}
                className="input-base resize-none"
              />
            </div>

            <button
              onClick={submitFeedback}
              disabled={!feedback.madeEasier || !feedback.mostUseful}
              className={`btn-primary w-full ${(!feedback.madeEasier || !feedback.mostUseful) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Submit Feedback <ArrowRight size={18} />
            </button>
          </Card>
        </div>
      </div>
    );
  }

  // Results
  if (phase === 'results') {
    const improvement = (postTestScore ?? 0) - (preTestScore ?? 0);
    const confidenceChange = (postConfidence ?? 0) - (preConfidence ?? 0);

    return (
      <div className="py-12">
        <div className="container-page max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center text-teal mx-auto mb-6">
            <Award size={32} />
          </div>
          <h1 className="text-2xl font-bold text-navy">Thank you for participating</h1>
          <p className="mt-3 text-ink-light">Here is a summary of your results.</p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
            <Card className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 size={18} className="text-teal" />
                <h3 className="font-bold text-navy text-sm">Knowledge</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-light">Pre-test score</span>
                  <span className="font-bold text-navy">{preTestScore}/{preTestQuestions.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-light">Post-test score</span>
                  <span className="font-bold text-navy">{postTestScore}/{postTestQuestions.length}</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-navy/8">
                  <span className="text-ink-light">Improvement</span>
                  <span className={`font-bold ${improvement > 0 ? 'text-success' : improvement < 0 ? 'text-error' : 'text-ink-light'}`}>
                    {improvement > 0 ? '+' : ''}{improvement}
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} className="text-teal" />
                <h3 className="font-bold text-navy text-sm">Confidence</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-light">Before</span>
                  <span className="font-bold text-navy">{preConfidence}/5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-light">After</span>
                  <span className="font-bold text-navy">{postConfidence}/5</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-navy/8">
                  <span className="text-ink-light">Change</span>
                  <span className={`font-bold ${confidenceChange > 0 ? 'text-success' : confidenceChange < 0 ? 'text-error' : 'text-ink-light'}`}>
                    {confidenceChange > 0 ? '+' : ''}{confidenceChange}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/learn" className="btn-outline">Continue Learning</Link>
            <Link to="/" className="btn-ghost">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
