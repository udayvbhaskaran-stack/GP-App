import type { TestQuestion } from '@/types';

export const preTestQuestions: TestQuestion[] = [
  {
    id: 'q1',
    question: 'What does an FIR (First Information Report) do?',
    options: [
      'It is a formal complaint that starts a criminal investigation',
      'It is a type of legal advice given by a lawyer',
      'It is a document that proves your identity',
      'It is a judgment given by a court',
    ],
    correctIndex: 0,
  },
  {
    id: 'q2',
    question: 'If you cannot afford a lawyer in India, what might you be able to do?',
    options: [
      'You cannot get legal help at all',
      'You can apply for free legal aid through Legal Services Authorities',
      'You must represent yourself in all cases',
      'You can only get help from family members',
    ],
    correctIndex: 1,
  },
  {
    id: 'q3',
    question: 'What is bail?',
    options: [
      'A fine paid to the court after a conviction',
      'A legal arrangement that may allow an arrested person to be released while a case is pending',
      'A payment made to the police to avoid arrest',
      'A document that proves you are innocent',
    ],
    correctIndex: 1,
  },
  {
    id: 'q4',
    question: 'If you receive a defective product, what can you do?',
    options: [
      'Nothing can be done once a product is sold',
      'File a complaint with the seller and escalate to a Consumer Forum if needed',
      'Only the manufacturer can be contacted, not the seller',
      'You must go directly to the Supreme Court',
    ],
    correctIndex: 1,
  },
  {
    id: 'q5',
    question: 'What is an appeal in the legal context?',
    options: [
      'A request for a higher court to review and possibly change a lower court decision',
      'A plea to the police to drop charges',
      'A type of legal document filed with the government',
      'A request for free legal aid',
    ],
    correctIndex: 0,
  },
];

export const postTestQuestions: TestQuestion[] = preTestQuestions;
