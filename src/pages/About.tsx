import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Eye, Compass, ArrowRight, BookOpen, LifeBuoy } from 'lucide-react';
import { Card, SectionHeader } from '@/components/Card';

export function About() {
  return (
    <div className="py-12">
      <div className="container-page max-w-3xl">
        <SectionHeader
          label="About"
          title="Why we built this"
          subtitle="This website was created as part of a Cambridge IGCSE Global Perspectives Team Project investigating legal literacy and access to the justice system in India."
          className="mb-8"
        />

        <div className="prose prose-slate max-w-none space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-navy text-lg mb-3">The problem</h3>
            <p className="text-ink-light leading-relaxed">
              Many people in India encounter legal situations without knowing what their rights are,
              what the relevant legal concepts mean, or where they can seek help. Legal illiteracy
              can be a significant obstacle to accessing the justice system — people may not
              recognise when a situation has a legal dimension, and even when they do, they may not
              know where to turn.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-navy text-lg mb-3">Our research question</h3>
            <p className="text-ink-light leading-relaxed">
              Our project investigates the question:
              <span className="block mt-2 p-3 bg-teal/8 rounded-lg text-navy font-medium">
                "Is legal illiteracy the biggest obstacle to accessing the justice system in India?"
              </span>
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-navy text-lg mb-3">What this platform aims to do</h3>
            <p className="text-ink-light leading-relaxed mb-4">
              Rather than simply providing a collection of legal definitions, this platform offers
              two central experiences:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-navy/4 rounded-lg">
                <LifeBuoy size={20} className="text-navy mb-2" />
                <p className="font-medium text-navy text-sm">I Have a Legal Problem</p>
                <p className="text-sm text-ink-light mt-1">
                  Describe a situation and explore general legal information and resources.
                </p>
              </div>
              <div className="p-4 bg-teal/8 rounded-lg">
                <BookOpen size={20} className="text-teal mb-2" />
                <p className="font-medium text-navy text-sm">I Want to Learn</p>
                <p className="text-sm text-ink-light mt-1">
                  Explore interactive scenarios and discover legal concepts through real situations.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-navy text-lg mb-3">Our approach</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Brain size={20} />, title: 'Understand', text: 'Break down legal concepts into plain language.' },
                { icon: <Eye size={20} />, title: 'Recognise', text: 'Help people identify when a situation has a legal dimension.' },
                { icon: <Compass size={20} />, title: 'Navigate', text: 'Direct people toward authoritative sources and professional help.' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-2">
                    {item.icon}
                  </div>
                  <p className="font-medium text-navy text-sm">{item.title}</p>
                  <p className="text-sm text-ink-light mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-navy text-lg mb-3">Measuring our impact</h3>
            <p className="text-ink-light leading-relaxed">
              The platform includes a lightweight evaluation system that measures pre-learning and
              post-learning knowledge, user confidence, and feedback — all anonymously. This helps
              us understand whether the platform makes a positive difference.
            </p>
            <Link to="/evaluation" className="mt-4 inline-flex items-center gap-1.5 text-teal font-medium text-sm hover:underline">
              Take the evaluation <ArrowRight size={14} />
            </Link>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-navy text-lg mb-3">Important limitation</h3>
            <p className="text-ink-light leading-relaxed">
              This website is an educational project. It does not provide legal advice and does not
              replace advice from a qualified legal professional. All legal content is based on
              research and authoritative sources, and should be verified independently for any
              specific situation.
            </p>
          </Card>
        </div>

        <div className="mt-8 pt-6 border-t border-navy/8 text-center">
          <p className="text-sm text-ink-muted">
            Created as part of a Cambridge IGCSE Global Perspectives Team Project.
          </p>
        </div>
      </div>
    </div>
  );
}
