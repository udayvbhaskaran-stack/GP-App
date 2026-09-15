import type { Scenario } from '@/types';

export const scenarios: Scenario[] = [
  {
    id: 'police-and-arrest',
    title: 'A Conversation With the Police',
    category: 'Police & Arrest',
    description:
      'A person is approached by a police officer. Explore the scene to discover what rights apply and what each step may mean.',
    estimatedTime: '~5 minutes',
    conceptsCovered: ['Arrest', 'Rights of the arrested', 'Bail', 'Legal assistance'],
    icon: 'shield',
    status: 'available',
    concepts: [
      {
        id: 'concept-arrest',
        term: 'Arrest',
        simpleExplanation:
          'An arrest is when a police officer takes a person into custody. The officer must generally have a reason based on law — for example, a suspicion that the person has committed a crime.',
        whyItMatters:
          'Being arrested does not mean you are guilty. It means the police want to question you or hold you as part of an investigation. You still have rights.',
        takeaway: 'An arrest is not a conviction — you have rights during and after an arrest.',
        sourceIds: ['source-2', 'source-3'],
      },
      {
        id: 'concept-rights',
        term: 'Rights of the Arrested Person',
        simpleExplanation:
          'When a person is arrested, they have certain rights. These may include being informed of the reason for the arrest, the right to meet a lawyer, and the right to inform a family member or friend about the arrest.',
        whyItMatters:
          'Knowing these rights can help you or someone you know respond calmly and lawfully if an arrest happens.',
        takeaway: 'You have the right to know why you are being arrested and to contact a lawyer and a family member.',
        sourceIds: ['source-2', 'source-1'],
      },
      {
        id: 'concept-bail',
        term: 'Bail',
        simpleExplanation:
          'Bail is a legal arrangement that allows an arrested person to be released from custody while their case is pending, usually on the condition that they will appear in court when required.',
        whyItMatters:
          'Bail is one of the most important protections for an arrested person. It helps ensure that a person is not held in custody indefinitely before a trial.',
        takeaway: 'Bail may allow release from custody while a case is pending — it is a key right to understand.',
        sourceIds: ['source-2'],
      },
      {
        id: 'concept-legal-assistance',
        term: 'Legal Assistance',
        simpleExplanation:
          'A person who has been arrested may benefit from having a lawyer. If they cannot afford one, free legal aid may be available through Legal Services Authorities in India.',
        whyItMatters:
          'Legal assistance can help a person understand the charges, navigate the process, and make informed decisions.',
        takeaway: 'If you cannot afford a lawyer, free legal aid may be available through Legal Services Authorities.',
        sourceIds: ['source-4', 'source-10'],
      },
    ],
    scenes: [
      {
        id: 'scene-1',
        title: 'The Street',
        narration:
          'Ravi is walking home from work when a police officer approaches him. The officer asks Ravi to come to the station for questioning.',
        background: 'street',
        characters: [
          { id: 'char-ravi', type: 'person', position: { top: '55%', left: '30%' }, label: 'Ravi' },
          { id: 'char-officer', type: 'police', position: { top: '50%', left: '60%' }, label: 'Police Officer' },
        ],
        objects: [
          {
            id: 'obj-phone',
            label: 'Phone',
            icon: 'phone',
            position: { top: '72%', left: '22%' },
            conceptId: 'concept-rights',
          },
          {
            id: 'obj-officer-badge',
            label: 'Officer',
            icon: 'shield',
            position: { top: '40%', left: '62%' },
            conceptId: 'concept-arrest',
          },
        ],
        conceptIds: ['concept-arrest', 'concept-rights'],
        transitionText: 'Ravi asks why he is being taken in. The officer explains a complaint has been filed.',
      },
      {
        id: 'scene-2',
        title: 'At the Station',
        narration:
          'Ravi arrives at the police station. He is told he may be arrested. He wants to know what happens next and what his options are.',
        background: 'station',
        characters: [
          { id: 'char-ravi-2', type: 'person', position: { top: '55%', left: '35%' }, label: 'Ravi' },
          { id: 'char-officer-2', type: 'police', position: { top: '50%', left: '65%' }, label: 'Officer' },
        ],
        objects: [
          {
            id: 'obj-document',
            label: 'Document',
            icon: 'file-text',
            position: { top: '45%', left: '50%' },
            conceptId: 'concept-bail',
          },
          {
            id: 'obj-phone-2',
            label: 'Phone',
            icon: 'phone',
            position: { top: '72%', left: '28%' },
            conceptId: 'concept-legal-assistance',
          },
        ],
        conceptIds: ['concept-bail', 'concept-legal-assistance'],
        transitionText: 'Ravi contacts a family member and asks about getting a lawyer.',
      },
    ],
    takeaways: [
      { id: 't1', text: 'An arrest is not the same as a conviction — you have rights during the process.' },
      { id: 't2', text: 'You generally have the right to know why you are being arrested and to contact a lawyer and family member.' },
      { id: 't3', text: 'Bail may allow release from custody while a case is pending.' },
      { id: 't4', text: 'Free legal aid may be available if you cannot afford a lawyer.' },
      { id: 't5', text: 'Stay calm, ask questions, and keep relevant documents or information.' },
    ],
    sourceIds: ['source-2', 'source-3', 'source-4', 'source-1'],
  },
  {
    id: 'reporting-a-crime',
    title: 'I Want to Report What Happened',
    category: 'Reporting a Crime',
    description:
      'A person arrives at a police station to report an incident. Learn about complaints, FIRs, and what information may be relevant.',
    estimatedTime: '~5 minutes',
    conceptsCovered: ['Complaint', 'FIR', 'Cognizable offence', 'Police investigation'],
    icon: 'file-text',
    status: 'available',
    concepts: [
      {
        id: 'concept-complaint',
        term: 'Complaint',
        simpleExplanation:
          'A complaint is a formal statement made to the police reporting that a crime or wrongdoing has occurred. It is how you bring a problem to the attention of the authorities.',
        whyItMatters:
          'Without a complaint, the police may not begin looking into a matter. Understanding how to file one is an important first step.',
        takeaway: 'A complaint is the starting point for bringing a crime to the attention of the police.',
        sourceIds: ['source-2'],
      },
      {
        id: 'concept-fir',
        term: 'FIR (First Information Report)',
        simpleExplanation:
          'An FIR is a written document prepared by the police when they receive information about a cognizable offence. It formally starts a criminal investigation.',
        whyItMatters:
          'An FIR is an official record that a crime has been reported. It sets the legal process in motion.',
        takeaway: 'An FIR is the formal record that begins a criminal investigation.',
        sourceIds: ['source-2', 'source-3'],
      },
      {
        id: 'concept-cognizable',
        term: 'Cognizable vs Non-Cognizable Offence',
        simpleExplanation:
          'A cognizable offence is one where the police can arrest and investigate without court permission. A non-cognizable offence requires court permission before the police can investigate.',
        whyItMatters:
          'Understanding the difference helps you know how the police may respond to your complaint.',
        takeaway: 'Cognizable offences allow police to act immediately; non-cognizable offences require court permission.',
        sourceIds: ['source-2'],
      },
    ],
    scenes: [
      {
        id: 'scene-1',
        title: 'Arriving at the Station',
        narration:
          'Priya arrives at the police station. She wants to report that her bag was stolen. She is not sure what to say or what the police will ask her.',
        background: 'station',
        characters: [
          { id: 'char-priya', type: 'person', position: { top: '55%', left: '30%' }, label: 'Priya' },
          { id: 'char-officer-p', type: 'police', position: { top: '50%', left: '65%' }, label: 'Officer' },
        ],
        objects: [
          {
            id: 'obj-counter',
            label: 'Front Desk',
            icon: 'file-text',
            position: { top: '45%', left: '50%' },
            conceptId: 'concept-complaint',
          },
        ],
        conceptIds: ['concept-complaint'],
        transitionText: 'Priya describes what happened. The officer begins writing it down.',
      },
      {
        id: 'scene-2',
        title: 'Filing the Report',
        narration:
          'The officer listens to Priya and starts preparing an FIR. Priya learns what an FIR is and why it matters.',
        background: 'station',
        characters: [
          { id: 'char-priya-2', type: 'person', position: { top: '55%', left: '30%' }, label: 'Priya' },
          { id: 'char-officer-p2', type: 'police', position: { top: '50%', left: '65%' }, label: 'Officer' },
        ],
        objects: [
          {
            id: 'obj-fir-doc',
            label: 'FIR Document',
            icon: 'file-text',
            position: { top: '45%', left: '50%' },
            conceptId: 'concept-fir',
          },
          {
            id: 'obj-info',
            label: 'Details',
            icon: 'info',
            position: { top: '70%', left: '30%' },
            conceptId: 'concept-cognizable',
          },
        ],
        conceptIds: ['concept-fir', 'concept-cognizable'],
        transitionText: 'Priya receives a copy of the FIR. She now has an official record of her report.',
      },
    ],
    takeaways: [
      { id: 't1', text: 'A complaint is the first step in reporting a crime to the police.' },
      { id: 't2', text: 'An FIR is an official document that formally starts a criminal investigation.' },
      { id: 't3', text: 'Cognizable offences allow police to act immediately; non-cognizable offences need court permission.' },
      { id: 't4', text: 'You can ask for a copy of the FIR you file.' },
      { id: 't5', text: 'Provide as much relevant detail as possible — dates, times, descriptions, and witnesses.' },
    ],
    sourceIds: ['source-2', 'source-3'],
  },
  {
    id: 'getting-legal-help',
    title: 'I Need a Lawyer',
    category: 'Getting Legal Help',
    description:
      'A person has a legal problem but does not know where to turn. Explore the options for finding legal assistance.',
    estimatedTime: '~4 minutes',
    conceptsCovered: ['Lawyer', 'Legal aid', 'NALSA', 'Legal Services Authorities Act'],
    icon: 'scale',
    status: 'available',
    concepts: [
      {
        id: 'concept-lawyer-role',
        term: 'What a Lawyer Does',
        simpleExplanation:
          'A lawyer is a qualified professional who can provide legal advice, represent you in court, and help you understand your rights and options.',
        whyItMatters:
          'Legal matters can be complex. A lawyer can help you navigate them and make informed decisions.',
        takeaway: 'A lawyer can guide you through legal processes and represent you in court.',
        sourceIds: ['source-4'],
      },
      {
        id: 'concept-legal-aid-eligibility',
        term: 'Legal Aid Eligibility',
        simpleExplanation:
          'In India, free legal aid is available to certain categories of people, including those with low income, women, children, and persons with disabilities, through Legal Services Authorities.',
        whyItMatters:
          'If you cannot afford a lawyer, you may still be able to get legal help for free.',
        takeaway: 'Free legal aid may be available if you meet certain eligibility criteria.',
        sourceIds: ['source-4', 'source-10'],
      },
      {
        id: 'concept-nalsa',
        term: 'NALSA',
        simpleExplanation:
          'The National Legal Services Authority (NALSA) is the central body that oversees free legal services in India. State and district Legal Services Authorities work under it.',
        whyItMatters:
          'NALSA and its state-level bodies are the primary route for accessing free legal assistance in India.',
        takeaway: 'NALSA is the gateway to free legal services in India.',
        sourceIds: ['source-4'],
      },
    ],
    scenes: [
      {
        id: 'scene-1',
        title: 'The Problem',
        narration:
          'Arun has a property dispute with his neighbour. He does not know much about the law and cannot afford a private lawyer. He wonders what to do.',
        background: 'home',
        characters: [
          { id: 'char-arun', type: 'person', position: { top: '55%', left: '35%' }, label: 'Arun' },
        ],
        objects: [
          {
            id: 'obj-phone-arun',
            label: 'Phone',
            icon: 'phone',
            position: { top: '72%', left: '50%' },
            conceptId: 'concept-lawyer-role',
          },
        ],
        conceptIds: ['concept-lawyer-role'],
        transitionText: 'Arun decides to search for help online and discovers legal aid.',
      },
      {
        id: 'scene-2',
        title: 'Finding Help',
        narration:
          'Arun learns about NALSA and free legal aid. He explores whether he qualifies and how to contact the nearest Legal Services Authority.',
        background: 'office',
        characters: [
          { id: 'char-arun-2', type: 'person', position: { top: '55%', left: '30%' }, label: 'Arun' },
          { id: 'char-lawyer', type: 'lawyer', position: { top: '50%', left: '65%' }, label: 'Legal Aid Officer' },
        ],
        objects: [
          {
            id: 'obj-legal-aid-doc',
            label: 'Legal Aid Form',
            icon: 'file-text',
            position: { top: '45%', left: '50%' },
            conceptId: 'concept-legal-aid-eligibility',
          },
          {
            id: 'obj-nalsa-info',
            label: 'NALSA Info',
            icon: 'info',
            position: { top: '70%', left: '25%' },
            conceptId: 'concept-nalsa',
          },
        ],
        conceptIds: ['concept-legal-aid-eligibility', 'concept-nalsa'],
        transitionText: 'Arun applies for legal aid and receives assistance for his case.',
      },
    ],
    takeaways: [
      { id: 't1', text: 'A lawyer can advise, represent, and guide you through legal processes.' },
      { id: 't2', text: 'Free legal aid may be available if you meet certain eligibility criteria.' },
      { id: 't3', text: 'NALSA and state Legal Services Authorities are the gateway to free legal help.' },
      { id: 't4', text: 'You do not always need to pay for legal assistance — explore your options first.' },
    ],
    sourceIds: ['source-4', 'source-10'],
  },
  {
    id: 'understanding-courts',
    title: 'What Happens in Court?',
    category: 'Understanding Courts',
    description:
      'Explore a simplified courtroom environment and learn about hearings, trials, judges, witnesses, and appeals.',
    estimatedTime: '~6 minutes',
    conceptsCovered: ['Hearing', 'Trial', 'Judge', 'Witness', 'Evidence', 'Judgment', 'Appeal'],
    icon: 'gavel',
    status: 'available',
    concepts: [
      {
        id: 'concept-hearing',
        term: 'Hearing',
        simpleExplanation:
          'A hearing is a scheduled session in court where a judge listens to arguments, applications, or evidence related to a case.',
        whyItMatters:
          'A case may involve several hearings before it concludes. Understanding this can help reduce uncertainty.',
        takeaway: 'A hearing is one step in a case — a case may have multiple hearings.',
        sourceIds: ['source-9'],
      },
      {
        id: 'concept-trial',
        term: 'Trial',
        simpleExplanation:
          'A trial is the formal process where evidence is examined and a court decides the outcome of a case.',
        whyItMatters:
          'A trial is the core of the judicial process, where both sides present their case.',
        takeaway: 'A trial is where evidence is presented and the court decides the outcome.',
        sourceIds: ['source-2', 'source-9'],
      },
      {
        id: 'concept-judge',
        term: 'Judge',
        simpleExplanation:
          'A judge is the official who presides over a court, ensures procedures are followed, and delivers the judgment.',
        whyItMatters:
          'The judge is the decision-maker in a court. Understanding their role helps you understand how courts work.',
        takeaway: 'The judge oversees the court process and delivers the final decision.',
        sourceIds: ['source-5', 'source-9'],
      },
      {
        id: 'concept-evidence-witness',
        term: 'Evidence and Witnesses',
        simpleExplanation:
          'Evidence is information presented in court to prove or disprove a fact. Witnesses are people who give evidence based on what they saw, heard, or know.',
        whyItMatters:
          'Evidence and witnesses are the foundation of a court decision. Understanding this helps you know what may be needed.',
        takeaway: 'Evidence and witnesses help the court reach a fair decision.',
        sourceIds: ['source-2'],
      },
      {
        id: 'concept-appeal-court',
        term: 'Judgment and Appeal',
        simpleExplanation:
          'A judgment is the final decision of a court. An appeal is a process that allows a higher court to review that decision.',
        whyItMatters:
          'Understanding judgments and appeals helps you know your options after a case concludes.',
        takeaway: 'If you disagree with a judgment, you may be able to appeal to a higher court.',
        sourceIds: ['source-5'],
      },
    ],
    scenes: [
      {
        id: 'scene-1',
        title: 'Inside the Courtroom',
        narration:
          'Meera has been asked to appear in court as a witness. She enters the courtroom and sees the judge, the lawyers, and the accused.',
        background: 'courtroom',
        characters: [
          { id: 'char-meera', type: 'person', position: { top: '70%', left: '30%' }, label: 'Meera (Witness)' },
          { id: 'char-judge', type: 'judge', position: { top: '25%', left: '50%' }, label: 'Judge' },
          { id: 'char-lawyer-1', type: 'lawyer', position: { top: '55%', left: '65%' }, label: 'Lawyer' },
        ],
        objects: [
          {
            id: 'obj-judge-desk',
            label: "Judge's Bench",
            icon: 'gavel',
            position: { top: '18%', left: '50%' },
            conceptId: 'concept-judge',
          },
          {
            id: 'obj-witness-stand',
            label: 'Witness Stand',
            icon: 'user',
            position: { top: '60%', left: '25%' },
            conceptId: 'concept-evidence-witness',
          },
        ],
        conceptIds: ['concept-judge', 'concept-evidence-witness'],
        transitionText: 'The judge calls the court to order. The trial begins.',
      },
      {
        id: 'scene-2',
        title: 'The Trial',
        narration:
          'The lawyers present their arguments and evidence. Meera gives her testimony. The judge listens carefully to everything.',
        background: 'courtroom',
        characters: [
          { id: 'char-meera-2', type: 'person', position: { top: '55%', left: '25%' }, label: 'Meera' },
          { id: 'char-judge-2', type: 'judge', position: { top: '25%', left: '50%' }, label: 'Judge' },
          { id: 'char-lawyer-2', type: 'lawyer', position: { top: '55%', left: '65%' }, label: 'Lawyer' },
        ],
        objects: [
          {
            id: 'obj-documents',
            label: 'Documents',
            icon: 'file-text',
            position: { top: '60%', left: '50%' },
            conceptId: 'concept-trial',
          },
          {
            id: 'obj-evidence',
            label: 'Evidence',
            icon: 'info',
            position: { top: '70%', left: '40%' },
            conceptId: 'concept-evidence-witness',
          },
        ],
        conceptIds: ['concept-trial', 'concept-evidence-witness'],
        transitionText: 'The trial concludes. The judge will deliver a judgment.',
      },
      {
        id: 'scene-3',
        title: 'The Judgment',
        narration:
          'The judge delivers the judgment. Meera learns that if someone disagrees with the decision, they may be able to appeal to a higher court.',
        background: 'courtroom',
        characters: [
          { id: 'char-judge-3', type: 'judge', position: { top: '25%', left: '50%' }, label: 'Judge' },
        ],
        objects: [
          {
            id: 'obj-judgment',
            label: 'Judgment',
            icon: 'file-text',
            position: { top: '50%', left: '40%' },
            conceptId: 'concept-appeal-court',
          },
          {
            id: 'obj-appeal',
            label: 'Appeal Option',
            icon: 'arrow-up-circle',
            position: { top: '65%', left: '60%' },
            conceptId: 'concept-appeal-court',
          },
        ],
        conceptIds: ['concept-appeal-court'],
        transitionText: 'The case is concluded. Those involved now know their options.',
      },
    ],
    takeaways: [
      { id: 't1', text: 'A hearing is one step in a case — a case may involve multiple hearings.' },
      { id: 't2', text: 'A trial is where evidence is presented and the court decides the outcome.' },
      { id: 't3', text: 'The judge oversees the court process and delivers the final decision.' },
      { id: 't4', text: 'Evidence and witnesses help the court reach a fair decision.' },
      { id: 't5', text: 'If you disagree with a judgment, you may be able to appeal to a higher court.' },
    ],
    sourceIds: ['source-2', 'source-5', 'source-9'],
  },
  {
    id: 'everyday-problems',
    title: 'The Defective Product',
    category: 'Everyday Legal Problems',
    description:
      'A consumer receives a defective product. Explore consumer rights, complaints, and escalation options.',
    estimatedTime: '~4 minutes',
    conceptsCovered: ['Consumer rights', 'Complaint', 'Consumer Protection Act', 'Escalation'],
    icon: 'shopping-bag',
    status: 'available',
    concepts: [
      {
        id: 'concept-consumer-rights',
        term: 'Consumer Rights',
        simpleExplanation:
          'In India, consumers have rights under the Consumer Protection Act, 2019. These include the right to be informed, the right to seek redressal, and protection against unfair trade practices.',
        whyItMatters:
          'Understanding your consumer rights helps you take action when you receive a defective product or poor service.',
        takeaway: 'The Consumer Protection Act gives you rights when you buy goods or services.',
        sourceIds: ['source-8'],
      },
      {
        id: 'concept-consumer-complaint',
        term: 'Filing a Consumer Complaint',
        simpleExplanation:
          'If you have a problem with a product or service, you can file a complaint with the seller, and if unresolved, escalate it to a Consumer Disputes Redressal Commission.',
        whyItMatters:
          'Knowing the escalation path helps you take effective action rather than giving up.',
        takeaway: 'Start with the seller, then escalate to a Consumer Forum if needed.',
        sourceIds: ['source-6', 'source-8'],
      },
    ],
    scenes: [
      {
        id: 'scene-1',
        title: 'The Purchase',
        narration:
          'Sneha buys a new mixer grinder. After two days, it stops working. She has the receipt and the warranty card.',
        background: 'shop',
        characters: [
          { id: 'char-sneha', type: 'person', position: { top: '55%', left: '30%' }, label: 'Sneha' },
          { id: 'char-seller', type: 'person', position: { top: '55%', left: '65%' }, label: 'Seller' },
        ],
        objects: [
          {
            id: 'obj-receipt',
            label: 'Receipt',
            icon: 'file-text',
            position: { top: '72%', left: '22%' },
            conceptId: 'concept-consumer-rights',
          },
          {
            id: 'obj-product',
            label: 'Product',
            icon: 'package',
            position: { top: '45%', left: '50%' },
            conceptId: 'concept-consumer-rights',
          },
        ],
        conceptIds: ['concept-consumer-rights'],
        transitionText: 'Sneha asks the seller for a replacement. The seller refuses.',
      },
      {
        id: 'scene-2',
        title: 'Taking Action',
        narration:
          'The seller refuses to help. Sneha learns about consumer forums and decides to file a formal complaint.',
        background: 'office',
        characters: [
          { id: 'char-sneha-2', type: 'person', position: { top: '55%', left: '35%' }, label: 'Sneha' },
        ],
        objects: [
          {
            id: 'obj-complaint-form',
            label: 'Complaint Form',
            icon: 'file-text',
            position: { top: '50%', left: '55%' },
            conceptId: 'concept-consumer-complaint',
          },
          {
            id: 'obj-receipt-2',
            label: 'Receipt',
            icon: 'file-text',
            position: { top: '70%', left: '30%' },
            conceptId: 'concept-consumer-complaint',
          },
        ],
        conceptIds: ['concept-consumer-complaint'],
        transitionText: 'Sneha files her complaint and receives a case number.',
      },
    ],
    takeaways: [
      { id: 't1', text: 'The Consumer Protection Act gives you rights when you buy goods or services.' },
      { id: 't2', text: 'Keep your receipts, warranty cards, and any communication with the seller.' },
      { id: 't3', text: 'Start by complaining to the seller, then escalate to a Consumer Forum if needed.' },
      { id: 't4', text: 'Consumer forums can provide redressal, including refunds, replacements, or compensation.' },
    ],
    sourceIds: ['source-6', 'source-8'],
  },
  {
    id: 'digital-issues',
    title: 'The Online Scam',
    category: 'Digital / Online Issues',
    description:
      'A person encounters an online fraud. Learn how to recognise a cyber issue, preserve evidence, and report it.',
    estimatedTime: '~4 minutes',
    conceptsCovered: ['Cyber crime', 'Preserving evidence', 'Reporting', 'Official resources'],
    icon: 'monitor',
    status: 'coming-soon',
    concepts: [
      {
        id: 'concept-cyber-crime',
        term: 'Cyber Crime',
        simpleExplanation:
          'Cyber crime refers to crimes that involve computers, the internet, or digital technology. Examples include online fraud, phishing, and identity theft.',
        whyItMatters:
          'As more of life moves online, understanding cyber crime helps you recognise and respond to digital threats.',
        takeaway: 'Online fraud and scams are crimes — you can report them through official channels.',
        sourceIds: ['source-7'],
      },
      {
        id: 'concept-preserve-evidence',
        term: 'Preserving Evidence',
        simpleExplanation:
          'If you experience online fraud, keep screenshots, transaction details, messages, and any other relevant information. This can be important when reporting the incident.',
        whyItMatters:
          'Digital evidence can disappear quickly. Preserving it early can help authorities investigate.',
        takeaway: 'Save screenshots, messages, and transaction records as soon as you notice a problem.',
        sourceIds: ['source-7'],
      },
    ],
    scenes: [
      {
        id: 'scene-1',
        title: 'The Scam',
        narration:
          'Vikram receives a message claiming he has won a prize. He is asked to transfer a small fee to claim it. He is unsure whether this is real.',
        background: 'home',
        characters: [
          { id: 'char-vikram', type: 'person', position: { top: '55%', left: '40%' }, label: 'Vikram' },
        ],
        objects: [
          {
            id: 'obj-message',
            label: 'Suspicious Message',
            icon: 'message',
            position: { top: '45%', left: '55%' },
            conceptId: 'concept-cyber-crime',
          },
        ],
        conceptIds: ['concept-cyber-crime'],
        transitionText: 'Vikram realises this may be a scam and decides to report it.',
      },
    ],
    takeaways: [
      { id: 't1', text: 'Online fraud and scams are crimes — you can report them through official channels.' },
      { id: 't2', text: 'Save screenshots, messages, and transaction records as soon as you notice a problem.' },
      { id: 't3', text: 'Do not share sensitive information like passwords or OTPs with anyone.' },
      { id: 't4', text: 'You can report cyber crimes through the official Cyber Crime Portal.' },
    ],
    sourceIds: ['source-7'],
  },
];

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}
