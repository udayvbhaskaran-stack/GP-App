import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LifeBuoy, BookOpen, ArrowRight, Scale, FileText, Phone } from 'lucide-react';
import { Card, SectionHeader } from '@/components/Card';
import { Disclaimer } from '@/components/Disclaimer';
import { resources } from '@/data/resources';

export function LegalHelp() {
  const keyResources = resources.slice(0, 4);

  return (
    <div className="py-12">
      <div className="container-page">
        <SectionHeader
          label="Legal Help"
          title="Where to Seek Help"
          subtitle="If you are facing a legal situation, these are the main pathways you can explore. Each links to official resources where you can find more information."
          className="mb-10"
        />

        {/* Two pathways */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card hover className="p-7 h-full group">
              <div className="w-14 h-14 rounded-xl bg-navy/8 flex items-center justify-center text-navy mb-5 transition-colors group-hover:bg-navy group-hover:text-white">
                <LifeBuoy size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy">Describe Your Situation</h3>
              <p className="mt-2 text-ink-light leading-relaxed">
                Use our AI assistant to describe what happened in your own words. You will receive
                general legal information, possible concepts, and suggested next steps.
              </p>
              <Link
                to="/assistant"
                className="mt-5 inline-flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all"
              >
                Describe My Situation <ArrowRight size={18} className="text-teal" />
              </Link>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Card hover className="p-7 h-full group">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-5 transition-colors group-hover:bg-teal group-hover:text-white">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy">Learn First</h3>
              <p className="mt-2 text-ink-light leading-relaxed">
                If you do not have an immediate problem, explore our interactive learning modules
                to understand legal concepts before you need them.
              </p>
              <Link
                to="/learn"
                className="mt-5 inline-flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all"
              >
                Start Learning <ArrowRight size={18} className="text-teal" />
              </Link>
            </Card>
          </motion.div>
        </div>

        {/* Key resources */}
        <h2 className="font-bold text-navy text-lg mb-4">Key official resources</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {keyResources.map((resource) => (
            <Card key={resource.id} hover className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-navy/6 flex items-center justify-center text-navy shrink-0">
                  {resource.category === 'legal-aid' ? <Scale size={18} /> : <FileText size={18} />}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy text-sm">{resource.organization}</h3>
                  <p className="text-xs text-ink-muted mt-0.5">{resource.useCase}</p>
                </div>
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:underline"
              >
                Visit website <ArrowRight size={14} />
              </a>
            </Card>
          ))}
        </div>

        {/* Emergency note */}
        <Card className="p-5 mb-8 border-warning/20">
          <div className="flex items-start gap-3">
            <Phone size={20} className="text-warning shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-navy text-sm">In an emergency</p>
              <p className="text-sm text-ink-light mt-1">
                If you are in immediate danger or need urgent assistance, contact emergency services
                (112 in India) or go to the nearest police station. Do not rely on this website for
                emergency situations.
              </p>
            </div>
          </div>
        </Card>

        <Disclaimer variant="full" />

        <div className="mt-8 text-center">
          <Link to="/resources" className="btn-outline">
            View All Resources <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
