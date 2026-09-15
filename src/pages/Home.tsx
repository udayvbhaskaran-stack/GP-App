import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import {
  LifeBuoy,
  BookOpen,
  ArrowRight,
  Brain,
  Eye,
  Compass,
  Shield,
  FileText,
  Scale,
  Gavel,
  ShoppingBag,
  Monitor,
  BookMarked,
  Sparkles,
} from 'lucide-react';
import { Card, SectionHeader, TrustBadge } from '@/components/Card';
import { scenarios } from '@/data/scenarios';
import { sources } from '@/data/sources';

const moduleIcons: Record<string, React.ReactNode> = {
  shield: <Shield size={28} />,
  'file-text': <FileText size={28} />,
  scale: <Scale size={28} />,
  gavel: <Gavel size={28} />,
  'shopping-bag': <ShoppingBag size={28} />,
  monitor: <Monitor size={28} />,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Home() {
  const availableScenarios = scenarios.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl translate-y-1/3" />
        </div>

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal/8 text-teal text-sm font-medium rounded-full mb-6">
              <Sparkles size={14} />
              Interactive Legal Literacy Platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy leading-[1.1] text-balance">
              Know your rights.
              <br />
              <span className="text-teal">Understand your options.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-light leading-relaxed max-w-2xl mx-auto">
              Legal information can be difficult to understand. Explore basic legal concepts,
              understand common situations, and discover where you may be able to seek help.
            </p>
          </motion.div>

          {/* Two primary pathway cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card hover className="p-7 h-full group">
                <div className="w-14 h-14 rounded-xl bg-navy/8 flex items-center justify-center text-navy mb-5 transition-colors group-hover:bg-navy group-hover:text-white">
                  <LifeBuoy size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy">I Have a Legal Problem</h3>
                <p className="mt-2 text-ink-light leading-relaxed">
                  Tell us what happened in your own words and explore information that may help you
                  understand your situation.
                </p>
                <Link
                  to="/assistant"
                  className="mt-5 inline-flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all"
                >
                  Describe My Situation
                  <ArrowRight size={18} className="text-teal" />
                </Link>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card hover className="p-7 h-full group">
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-5 transition-colors group-hover:bg-teal group-hover:text-white">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy">I Want to Learn</h3>
                <p className="mt-2 text-ink-light leading-relaxed">
                  Learn how basic legal concepts work through interactive real-life situations.
                </p>
                <Link
                  to="/learn"
                  className="mt-5 inline-flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all"
                >
                  Start Learning
                  <ArrowRight size={18} className="text-teal" />
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Legal Literacy */}
      <section className="py-16 bg-white border-y border-navy/5">
        <div className="container-page">
          <SectionHeader
            label="The Problem"
            title="Why legal literacy matters"
            subtitle="Many people encounter legal situations without knowing what their rights are or where to turn. Understanding basic legal concepts can make a real difference."
            center
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain size={24} />,
                title: 'Understand',
                text: 'Understand basic legal concepts and terminology in plain language.',
              },
              {
                icon: <Eye size={24} />,
                title: 'Recognise',
                text: 'Recognise when a situation may involve a legal issue.',
              },
              {
                icon: <Compass size={24} />,
                title: 'Navigate',
                text: 'Understand where you may be able to seek further assistance.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="p-6 h-full">
                  <div className="w-11 h-11 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-navy text-lg">{item.title}</h3>
                  <p className="mt-2 text-ink-light leading-relaxed">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Through Real Situations */}
      <section className="py-16">
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeader
              label="Interactive Learning"
              title="Learn through real situations"
              subtitle="Explore scenarios, discover legal concepts, and learn what they can mean in real life — not through quizzes, but through interactive experiences."
            />
            <Link
              to="/learn"
              className="btn-outline shrink-0"
            >
              View All Modules
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {availableScenarios.map((scenario, i) => (
              <motion.div
                key={scenario.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to={`/learn/${scenario.id}`}>
                  <Card hover className="p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-navy/6 flex items-center justify-center text-navy mb-4">
                      {moduleIcons[scenario.icon]}
                    </div>
                    <h3 className="font-bold text-navy">{scenario.title}</h3>
                    <p className="mt-2 text-sm text-ink-light leading-relaxed line-clamp-2">
                      {scenario.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-ink-muted">{scenario.estimatedTime}</span>
                      {scenario.status === 'coming-soon' ? (
                        <span className="chip">Coming soon</span>
                      ) : (
                        <span className="text-teal text-sm font-medium inline-flex items-center gap-1">
                          Start <ArrowRight size={14} />
                        </span>
                      )}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to AI Assistant */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-page relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center text-teal-200 mx-auto mb-6">
              <LifeBuoy size={28} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-balance">
              Need help understanding a situation?
            </h2>
            <p className="mt-3 text-navy-100 text-lg max-w-xl mx-auto">
              Describe what happened in your own words and explore information that may help you
              understand what could apply.
            </p>
            <Link
              to="/assistant"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-medium rounded-lg hover:bg-teal-400 transition-all hover:shadow-lg active:scale-[0.98]"
            >
              Try the Assistant
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sources & Trust */}
      <section className="py-16 bg-white border-y border-navy/5">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                label="Sources & Trust"
                title="Built on authoritative sources"
                subtitle="Our educational content is based on research and authoritative sources, including Indian government institutions, legislation, and legal services authorities."
              />
              <Link to="/sources" className="mt-6 btn-outline">
                View Sources
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-3">
              {sources.slice(0, 5).map((source) => (
                <Card key={source.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold-600 shrink-0">
                      <BookMarked size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{source.title}</p>
                      <p className="text-xs text-ink-muted">{source.organization}</p>
                    </div>
                  </div>
                  <TrustBadge type="official">Official</TrustBadge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
