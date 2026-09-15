import type { LegalDomainInfo } from '@/types';

export const legalDomains: LegalDomainInfo[] = [
  {
    id: 'police-crime',
    label: 'Police & Crime',
    shortLabel: 'Police',
    icon: 'shield',
    description: 'Police interactions, reporting crimes, arrest-related questions, and criminal procedure concepts.',
    exampleKeywords: ['police', 'arrest', 'crime', 'stolen', 'theft', 'fir', 'complaint', 'custody', 'officer', 'report'],
    relatedScenarioId: 'police-and-arrest',
  },
  {
    id: 'courts',
    label: 'Courts & Legal Notices',
    shortLabel: 'Courts',
    icon: 'gavel',
    description: 'Receiving a legal notice, understanding court processes, and basic court terminology.',
    exampleKeywords: ['court', 'notice', 'judge', 'hearing', 'trial', 'judgment', 'summons', 'case', 'magistrate', 'evidence'],
    relatedScenarioId: 'what-happens-in-court',
  },
  {
    id: 'legal-help',
    label: 'Legal Help & Legal Aid',
    shortLabel: 'Legal Help',
    icon: 'scale',
    description: 'Finding legal assistance, understanding legal aid, and when professional help may be appropriate.',
    exampleKeywords: ['lawyer', 'legal aid', 'legal assistance', 'cannot afford', 'advocate', 'legal services', 'nalsa', 'free legal'],
    relatedScenarioId: 'i-need-a-lawyer',
  },
  {
    id: 'property-land',
    label: 'Property & Land',
    shortLabel: 'Property',
    icon: 'map',
    description: 'Buying land or property, property documents, renting, property disputes, and property terminology.',
    exampleKeywords: ['property', 'land', 'title', 'registration', 'sale deed', 'mutation', 'encumbrance', 'plot', 'inheritance', 'land dispute'],
    relatedScenarioId: 'before-you-buy-the-land',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    shortLabel: 'Insurance',
    icon: 'umbrella',
    description: 'Insurance claims, claim rejection, policy terms, and complaint or dispute mechanisms.',
    exampleKeywords: ['insurance', 'claim', 'policy', 'premium', 'rejection', 'claim denied', 'coverage', 'insurer', 'sum assured', 'policyholder'],
    relatedScenarioId: 'the-insurance-claim',
  },
  {
    id: 'employment',
    label: 'Work & Employment',
    shortLabel: 'Work',
    icon: 'briefcase',
    description: 'Unpaid salary, employment agreements, workplace issues, and employment-related documents.',
    exampleKeywords: ['salary', 'job', 'employer', 'employment', 'workplace', 'fired', 'terminated', 'payslip', 'contract', 'workplace harassment', 'unpaid wages'],
    relatedScenarioId: 'something-isnt-right-at-work',
  },
  {
    id: 'consumer',
    label: 'Consumer Problems',
    shortLabel: 'Consumer',
    icon: 'shopping-bag',
    description: 'Refunds, faulty products, online purchases, and complaints against businesses.',
    exampleKeywords: ['refund', 'defective', 'product', 'consumer', 'seller', 'warranty', 'online purchase', 'complaint', 'replacement', 'service deficiency'],
    relatedScenarioId: 'the-missing-refund',
  },
  {
    id: 'housing',
    label: 'Housing & Renting',
    shortLabel: 'Housing',
    icon: 'home',
    description: 'Security deposits, rental agreements, landlord and tenant issues.',
    exampleKeywords: ['landlord', 'deposit', 'rent', 'tenant', 'rental', 'lease', 'eviction', 'rent agreement', 'security deposit', 'maintenance'],
    relatedScenarioId: 'my-landlord-wont-return-my-deposit',
  },
  {
    id: 'family',
    label: 'Family & Personal Matters',
    shortLabel: 'Family',
    icon: 'users',
    description: 'Family-related legal matters including marriage, divorce, maintenance, and custody.',
    exampleKeywords: ['divorce', 'marriage', 'custody', 'maintenance', 'alimony', 'domestic', 'family', 'child', 'separation', 'annulment'],
  },
  {
    id: 'money-banking',
    label: 'Money & Banking',
    shortLabel: 'Banking',
    icon: 'credit-card',
    description: 'Banking disputes, loan issues, fraudulent transactions, and financial complaints.',
    exampleKeywords: ['bank', 'loan', 'transaction', 'emi', 'account', 'cheque', 'bounce', 'credit card', 'debit', 'unauthorised transaction'],
  },
  {
    id: 'digital',
    label: 'Online & Digital Issues',
    shortLabel: 'Digital',
    icon: 'monitor',
    description: 'Online fraud, cybercrime, digital security, and reporting options for online issues.',
    exampleKeywords: ['online', 'fraud', 'scam', 'cyber', 'phishing', 'hacked', 'internet', 'otp', 'upi', 'online fraud'],
    relatedScenarioId: 'something-happened-online',
  },
  {
    id: 'road-accident',
    label: 'Road Accidents',
    shortLabel: 'Road',
    icon: 'car',
    description: 'What to do after a road accident, documentation, and compensation concepts.',
    exampleKeywords: ['accident', 'road', 'vehicle', 'crash', 'hit', 'driving', 'motor', 'compensation', 'insurance claim', 'mact'],
    relatedScenarioId: 'after-a-road-accident',
  },
  {
    id: 'government',
    label: 'Government Services',
    shortLabel: 'Govt',
    icon: 'building',
    description: 'Issues with government services, entitlements, and administrative processes.',
    exampleKeywords: ['government', 'aadhaar', 'pan', 'passport', 'ration', 'scheme', 'subsidy', 'rti', 'grievance', 'officer'],
  },
  {
    id: 'documents',
    label: 'Documents & Contracts',
    shortLabel: 'Documents',
    icon: 'file-text',
    description: 'Understanding legal documents, contracts, and what to check before signing.',
    exampleKeywords: ['contract', 'agreement', 'sign', 'document', 'terms', 'conditions', 'clause', 'stamp paper', 'notary', 'affidavit'],
  },
  {
    id: 'other',
    label: 'Other / Unclear',
    shortLabel: 'Other',
    icon: 'help-circle',
    description: 'If you are not sure what legal area your situation involves, start here.',
    exampleKeywords: [],
  },
];

export function getDomainById(id: string): LegalDomainInfo | undefined {
  return legalDomains.find((d) => d.id === id);
}

export function getDomainByKeyword(input: string): LegalDomainInfo | null {
  const lower = input.toLowerCase();
  let bestMatch: LegalDomainInfo | null = null;
  let bestScore = 0;

  for (const domain of legalDomains) {
    if (domain.id === 'other') continue;
    let score = 0;
    for (const keyword of domain.exampleKeywords) {
      if (lower.includes(keyword)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = domain;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}
