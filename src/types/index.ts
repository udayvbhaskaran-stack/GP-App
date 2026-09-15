export type LegalDomain =
  | 'police-crime'
  | 'courts'
  | 'legal-help'
  | 'property-land'
  | 'insurance'
  | 'employment'
  | 'consumer'
  | 'housing'
  | 'family'
  | 'money-banking'
  | 'digital'
  | 'road-accident'
  | 'government'
  | 'documents'
  | 'other';

export interface Source {
  id: string;
  title: string;
  organization: string;
  description: string;
  url: string;
  category: 'government' | 'courts' | 'legal-services' | 'legislation' | 'research';
  isOfficial: boolean;
  dateAccessed?: string;
  domains?: LegalDomain[];
}

export interface LegalTerm {
  id: string;
  term: string;
  category: string;
  simpleDefinition: string;
  whyItMatters: string;
  relatedTerms: string[];
  sourceIds: string[];
  relatedScenarioId?: string;
}

// --- Interactive Game Engine Types ---

export interface SceneCharacter {
  id: string;
  type: string;
  position: { top: string; left: string };
  label?: string;
  expression?: 'neutral' | 'happy' | 'concerned' | 'angry';
}

export type InteractionType =
  | 'explore'        // Click objects to discover concepts
  | 'dialogue'       // Talk to characters, choose responses
  | 'decision'       // Make a choice, see consequences
  | 'document'       // Inspect a document for key information
  | 'sorting'        // Sort items into categories
  | 'timeline';      // Arrange events in order

export interface DialogueOption {
  id: string;
  text: string;
  response: string;
  conceptId?: string;
  isCorrect?: boolean;
}

export interface DialogueStep {
  characterId: string;
  prompt: string;
  options: DialogueOption[];
}

export interface DecisionOption {
  id: string;
  text: string;
  consequence: string;
  isRecommended?: boolean;
  conceptId?: string;
}

export interface DecisionStep {
  prompt: string;
  options: DecisionOption[];
}

export interface DocumentField {
  id: string;
  label: string;
  value: string;
  isKeyInfo: boolean;
  conceptId?: string;
  hint?: string;
}

export interface DocumentStep {
  documentType: string;
  title: string;
  fields: DocumentField[];
  instructions: string;
}

export interface SortItem {
  id: string;
  label: string;
  correctCategory: string;
  conceptId?: string;
}

export interface SortingStep {
  instructions: string;
  categories: string[];
  items: SortItem[];
}

export interface TimelineEvent {
  id: string;
  label: string;
  description: string;
  correctOrder: number;
  conceptId?: string;
}

export interface TimelineStep {
  instructions: string;
  events: TimelineEvent[];
}

export interface ExploreObject {
  id: string;
  label: string;
  icon: string;
  position: { top: string; left: string };
  conceptId: string;
}

export interface ExploreStep {
  background: string;
  characters: SceneCharacter[];
  objects: ExploreObject[];
}

export interface LegalConcept {
  id: string;
  term: string;
  simpleExplanation: string;
  whyItMatters: string;
  takeaway: string;
  sourceIds: string[];
  relatedTermId?: string;
}

export type SceneData =
  | { type: 'explore'; data: ExploreStep }
  | { type: 'dialogue'; data: DialogueStep }
  | { type: 'decision'; data: DecisionStep }
  | { type: 'document'; data: DocumentStep }
  | { type: 'sorting'; data: SortingStep }
  | { type: 'timeline'; data: TimelineStep };

export interface ScenarioStep {
  id: string;
  title: string;
  narration: string;
  background?: string;
  interaction: SceneData;
  conceptIds: string[];
}

export interface Scenario {
  id: string;
  title: string;
  category: string;
  domain: LegalDomain;
  description: string;
  estimatedTime: string;
  conceptsCovered: string[];
  icon: string;
  mechanic: string;
  status: 'available' | 'coming-soon';
  concepts: LegalConcept[];
  steps: ScenarioStep[];
  takeaways: { id: string; text: string }[];
  sourceIds: string[];
  relatedTermIds?: string[];
}

// --- AI Response Types ---

export interface AIResponse {
  situationSummary: string;
  possibleAreas: string[];
  whatThisMayInvolve: string;
  whatToCheck: { item: string; explanation: string }[];
  possibleNextSteps: { number: string; title: string; explanation: string }[];
  officialSources: { title: string; organization: string; url: string }[];
  questionsToConsider: string[];
  disclaimer: string;
  relatedScenarioId?: string;
  relatedDomain?: LegalDomain;
}

export interface LegalDomainInfo {
  id: LegalDomain;
  label: string;
  shortLabel: string;
  icon: string;
  description: string;
  exampleKeywords: string[];
  relatedScenarioId?: string;
}

export interface MockScenario {
  id: string;
  label: string;
  input: string;
  response: AIResponse;
}

export interface ResourceItem {
  id: string;
  organization: string;
  description: string;
  useCase: string;
  url: string;
  category: 'government' | 'legal-aid' | 'courts' | 'police' | 'consumer' | 'cyber';
  domains?: LegalDomain[];
}

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface FeedbackData {
  madeEasier: 'yes' | 'somewhat' | 'no';
  mostUseful: 'ai-assistant' | 'interactive-scenarios' | 'legal-dictionary' | 'resources';
  confidence: number;
  improvement: string;
}
