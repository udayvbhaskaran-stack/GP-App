import { Card, SectionHeader } from '@/components/Card';
import { ShieldAlert, Lock, Eye, Database } from 'lucide-react';

export function Privacy() {
  return (
    <div className="py-12">
      <div className="container-page max-w-3xl">
        <SectionHeader
          label="Privacy"
          title="Your Privacy"
          subtitle="This is an educational project. We take a minimalist approach to data collection and prioritize your privacy."
          className="mb-8"
        />

        <div className="space-y-5">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h3 className="font-bold text-navy">What we don't collect</h3>
                <p className="mt-2 text-ink-light leading-relaxed">
                  We do not ask for your full name, address, phone number, passwords, financial
                  account information, or government ID numbers. The AI assistant explicitly asks
                  you not to share this type of information.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Database size={20} />
              </div>
              <div>
                <h3 className="font-bold text-navy">Local storage only</h3>
                <p className="mt-2 text-ink-light leading-relaxed">
                  Your learning progress, test results, and confidence scores are stored locally in
                  your browser. They are not sent to any server. This means your data stays on your
                  device and is cleared if you clear your browser data.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-navy">AI conversations</h3>
                <p className="mt-2 text-ink-light leading-relaxed">
                  For this prototype, your conversations with the AI assistant are not permanently
                  stored. The AI processes your description to provide general information, but we
                  do not retain the text you enter.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Eye size={20} />
              </div>
              <div>
                <h3 className="font-bold text-navy">Anonymous analytics</h3>
                <p className="mt-2 text-ink-light leading-relaxed">
                  If analytics are enabled, they are anonymous and aggregate — for example, the
                  number of people who visited a page or completed a module. We do not record raw
                  legal-problem descriptions or attach sensitive information to analytics events.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-navy mb-3">Disclaimer</h3>
            <p className="text-ink-light leading-relaxed text-sm">
              This website is an educational project designed to improve basic legal literacy. It
              does not provide legal advice and does not replace advice from a qualified legal
              professional. Laws and procedures can change, and information may not apply to every
              individual situation.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
