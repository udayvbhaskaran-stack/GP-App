import type { LegalTerm } from '@/types';

export const legalTerms: LegalTerm[] = [
  {
    id: 'term-fir',
    term: 'FIR (First Information Report)',
    category: 'Police',
    simpleDefinition:
      'A written document prepared by the police when they receive information about a crime. It is the first step in a criminal investigation.',
    whyItMatters:
      'Filing an FIR is often the formal starting point for a criminal case. It sets the legal process in motion and creates an official record of your complaint.',
    relatedTerms: ['Complaint', 'Cognizable offence', 'Police investigation'],
    sourceIds: ['source-2', 'source-3'],
  },
  {
    id: 'term-arrest',
    term: 'Arrest',
    category: 'Police',
    simpleDefinition:
      'The act of taking a person into custody by a police officer or other authorized official, usually because they are suspected of committing a crime.',
    whyItMatters:
      'Being arrested restricts your freedom, but you still have rights. Understanding what an arrest means helps you know what the police can and cannot do.',
    relatedTerms: ['Bail', 'Custody', 'Rights of the arrested'],
    sourceIds: ['source-2', 'source-3'],
  },
  {
    id: 'term-bail',
    term: 'Bail',
    category: 'Police',
    simpleDefinition:
      'A legal arrangement that allows a person who has been arrested to be released from custody, usually on the condition that they will appear in court when required.',
    whyItMatters:
      'Bail is one of the most important rights of an arrested person. Understanding how it works can help you or someone you know regain freedom while a case is pending.',
    relatedTerms: ['Arrest', 'Custody', 'Bond', 'Court'],
    sourceIds: ['source-2'],
  },
  {
    id: 'term-cognizable',
    term: 'Cognizable Offence',
    category: 'Criminal law',
    simpleDefinition:
      'A type of offence where a police officer can arrest a person and start an investigation without first getting permission from a court.',
    whyItMatters:
      'Knowing whether an offence is cognizable helps you understand how the police may respond to a complaint.',
    relatedTerms: ['FIR', 'Non-cognizable offence', 'Arrest'],
    sourceIds: ['source-2'],
  },
  {
    id: 'term-legal-aid',
    term: 'Legal Aid',
    category: 'Legal assistance',
    simpleDefinition:
      'Free legal assistance provided by the government to people who cannot afford a lawyer. In India, it is organized through Legal Services Authorities.',
    whyItMatters:
      'If you cannot afford a lawyer, legal aid may be available to you. Understanding this can help you access professional legal help even with limited resources.',
    relatedTerms: ['NALSA', 'Lawyer', 'Legal Services Authorities Act'],
    sourceIds: ['source-4', 'source-10'],
  },
  {
    id: 'term-hearing',
    term: 'Hearing',
    category: 'Courts',
    simpleDefinition:
      'A scheduled session in a court where a judge listens to arguments, evidence, or applications related to a case.',
    whyItMatters:
      'Hearings are how courts make decisions step by step. Understanding what happens in a hearing can reduce anxiety about attending court.',
    relatedTerms: ['Court', 'Judge', 'Trial', 'Evidence'],
    sourceIds: ['source-9'],
  },
  {
    id: 'term-trial',
    term: 'Trial',
    category: 'Courts',
    simpleDefinition:
      'The formal process in a court where evidence is examined and a judge (or jury in some systems) decides whether a person is guilty or a claim is valid.',
    whyItMatters:
      'A trial is the core of the judicial process. Understanding its structure helps you follow what is happening in a case.',
    relatedTerms: ['Hearing', 'Judge', 'Evidence', 'Witness', 'Judgment'],
    sourceIds: ['source-2', 'source-9'],
  },
  {
    id: 'term-evidence',
    term: 'Evidence',
    category: 'Courts',
    simpleDefinition:
      'Information or objects presented in court to prove or disprove a fact. Evidence can include documents, witness testimony, or physical objects.',
    whyItMatters:
      'Evidence is the foundation of any legal case. Understanding what counts as evidence helps you gather and preserve what may be relevant.',
    relatedTerms: ['Trial', 'Witness', 'Document'],
    sourceIds: ['source-2'],
  },
  {
    id: 'term-judgment',
    term: 'Judgment',
    category: 'Courts',
    simpleDefinition:
      'The formal decision given by a court at the end of a case, including the reasoning behind the decision.',
    whyItMatters:
      'A judgment is the outcome of a legal case. Understanding this helps you know what to expect when a case concludes.',
    relatedTerms: ['Court', 'Judge', 'Appeal', 'Trial'],
    sourceIds: ['source-5', 'source-9'],
  },
  {
    id: 'term-appeal',
    term: 'Appeal',
    category: 'Courts',
    simpleDefinition:
      'A legal process that allows a person to ask a higher court to review and change a decision made by a lower court.',
    whyItMatters:
      'If you disagree with a court decision, an appeal may be an option. Understanding appeals helps you know your options after a judgment.',
    relatedTerms: ['Judgment', 'Court', 'Higher court'],
    sourceIds: ['source-5'],
  },
  {
    id: 'term-complaint',
    term: 'Complaint',
    category: 'Police',
    simpleDefinition:
      'A formal statement made to the police or another authority reporting that a crime or wrongdoing has occurred.',
    whyItMatters:
      'A complaint is how you bring a problem to the attention of authorities. Understanding the process helps you take the right first step.',
    relatedTerms: ['FIR', 'Police', 'Cognizable offence'],
    sourceIds: ['source-2'],
  },
  {
    id: 'term-consumer-rights',
    term: 'Consumer Rights',
    category: 'Consumer issues',
    simpleDefinition:
      'Legal protections that apply when you buy goods or services. In India, these are established under the Consumer Protection Act.',
    whyItMatters:
      'Understanding your rights as a consumer can help you take action if you receive a defective product or poor service.',
    relatedTerms: ['Consumer Protection Act', 'NCDRC', 'Complaint'],
    sourceIds: ['source-8', 'source-6'],
  },
  {
    id: 'term-cyber-crime',
    term: 'Cyber Crime',
    category: 'Digital issues',
    simpleDefinition:
      'A crime that involves a computer, the internet, or other digital technology. Examples include online fraud, hacking, and identity theft.',
    whyItMatters:
      'As more of daily life moves online, understanding cyber crime helps you recognize problems and know where to report them.',
    relatedTerms: ['Cyber Crime Portal', 'Online fraud', 'Reporting'],
    sourceIds: ['source-7'],
  },
  {
    id: 'term-witness',
    term: 'Witness',
    category: 'Courts',
    simpleDefinition:
      'A person who gives evidence in court about what they saw, heard, or know regarding a case.',
    whyItMatters:
      'Witnesses play a key role in helping courts reach decisions. Understanding this role helps if you are ever asked to be a witness.',
    relatedTerms: ['Evidence', 'Trial', 'Court'],
    sourceIds: ['source-2'],
  },
  {
    id: 'term-fundamental-rights',
    term: 'Fundamental Rights',
    category: 'Criminal law',
    simpleDefinition:
      'Basic rights guaranteed to all citizens by the Constitution of India, including the right to equality, freedom, and life and personal liberty.',
    whyItMatters:
      'Fundamental rights form the basis of many legal protections. Understanding them helps you know what you are entitled to under the Constitution.',
    relatedTerms: ['Constitution', 'Right to life', 'Equality'],
    sourceIds: ['source-1'],
  },
];

export function getTermById(id: string): LegalTerm | undefined {
  return legalTerms.find((t) => t.id === id);
}
