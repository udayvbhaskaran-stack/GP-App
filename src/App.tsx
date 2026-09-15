import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Learn } from '@/pages/Learn';
import { Scenario } from '@/pages/Scenario';
import { LegalAssistant } from '@/pages/LegalAssistant';
import { Dictionary } from '@/pages/Dictionary';
import { Resources } from '@/pages/Resources';
import { About } from '@/pages/About';
import { Privacy } from '@/pages/Privacy';
import { Sources } from '@/pages/Sources';
import { Evaluation } from '@/pages/Evaluation';
import { LegalHelp } from '@/pages/LegalHelp';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:scenarioId" element={<Scenario />} />
          <Route path="/legal-help" element={<LegalHelp />} />
          <Route path="/assistant" element={<LegalAssistant />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
