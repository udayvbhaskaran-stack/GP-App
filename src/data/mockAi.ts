import type { MockScenario, AIResponse } from '@/types';

const DISCLAIMER =
  'This tool provides general legal information for educational purposes. It is not a substitute for advice from a qualified legal professional. Laws and procedures can change, and the appropriate option depends on the circumstances.';

export const mockScenarios: MockScenario[] = [
  {
    id: 'mock-housing',
    label: 'My landlord has not returned my security deposit',
    input:
      'My landlord has not returned my security deposit after I moved out of the rental flat two months ago. I gave the keys back and the flat was in good condition, but they keep saying they will return it next week and it never happens.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve a rental dispute where a landlord has not returned a security deposit after a tenant moved out.',
      possibleAreas: ['Housing & Renting', 'Civil matter'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to rental agreements, security deposits, and the obligations of landlords and tenants. The specific outcome could depend on the terms of your rental agreement, the condition of the property when you moved out, and any deductions the landlord may claim.',
      whatToCheck: [
        { item: 'Rental agreement', explanation: 'Review what your agreement says about the deposit, conditions for return, and any timeline for repayment.' },
        { item: 'Deposit receipt', explanation: 'Check whether you have a receipt or proof of the deposit payment.' },
        { item: 'Move-out condition records', explanation: 'Photos or a handover document showing the flat was in good condition may be useful.' },
        { item: 'Communication records', explanation: 'Keep records of all messages, emails, or letters with the landlord about the deposit return.' },
        { item: 'Deductions claimed', explanation: 'If the landlord claims deductions for damages, ask for an itemised explanation.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Gather relevant documents', explanation: 'Collect your rental agreement, deposit receipt, communication with the landlord, and photos of the flat when you moved out.' },
        { number: '02', title: 'Check your agreement', explanation: 'Review the terms about deposit return, conditions, and timeline.' },
        { number: '03', title: 'Send a formal written request', explanation: 'Consider sending a written request asking for the deposit within a specified period. Keep a copy.' },
        { number: '04', title: 'Seek professional assistance if needed', explanation: 'If the landlord does not respond, you may wish to consult a lawyer or explore legal aid or consumer forum options.' },
      ],
      officialSources: [
        { title: 'National Consumer Disputes Redressal Commission (NCDRC)', organization: 'NCDRC', url: 'https://ncdrc.nic.in/' },
        { title: 'National Legal Services Authority (NALSA)', organization: 'NALSA', url: 'https://nalsa.gov.in/' },
      ],
      questionsToConsider: [
        'What does your rental agreement say about the deposit and its return?',
        'Do you have written records of your communication with the landlord?',
        'Were there any deductions the landlord claimed, and were they explained?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'my-landlord-wont-return-my-deposit',
      relatedDomain: 'housing',
    },
  },
  {
    id: 'mock-police',
    label: 'I want to report a crime',
    input:
      'Someone stole my phone from my bag while I was on the bus. I want to report it to the police but I am not sure how to file a complaint or what information they will need.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve theft and the process of reporting a crime to the police.',
      possibleAreas: ['Police & Crime', 'Criminal matter'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to complaints, FIRs, and the criminal investigation process. Theft is generally a cognizable offence, which means the police can start an investigation without court permission.',
      whatToCheck: [
        { item: 'Time and location', explanation: 'Note when and where the incident happened as precisely as you can.' },
        { item: 'Item details', explanation: 'Gather identifying information about the stolen item such as serial number, IMEI, or distinctive features.' },
        { item: 'Witnesses', explanation: 'If anyone saw the incident or if there were CCTV cameras nearby, note this.' },
        { item: 'Proof of ownership', explanation: 'Receipts, bills, or packaging that prove you own the item may be useful.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Go to the nearest police station', explanation: 'Visit the police station in the area where the incident occurred. Some states also offer online reporting.' },
        { number: '02', title: 'Provide details of the incident', explanation: 'Describe what happened, when, where, and what was stolen.' },
        { number: '03', title: 'Ask for a copy of the FIR', explanation: 'If an FIR is registered, you can ask for a copy. This is an official record of your report.' },
        { number: '04', title: 'Follow up if needed', explanation: 'If you face difficulty filing the report, you may contact higher police officials or seek legal assistance.' },
      ],
      officialSources: [
        { title: 'Cyber Crime Portal', organization: 'Ministry of Home Affairs', url: 'https://cybercrime.gov.in/' },
        { title: 'National Legal Services Authority (NALSA)', organization: 'NALSA', url: 'https://nalsa.gov.in/' },
      ],
      questionsToConsider: [
        'Do you know the approximate time and location of the incident?',
        'Does your phone have a serial number or IMEI number you can provide?',
        'Were there any witnesses or CCTV cameras in the area?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'reporting-what-happened',
      relatedDomain: 'police-crime',
    },
  },
  {
    id: 'mock-consumer',
    label: 'I received a defective product',
    input:
      'I ordered a phone online and when it arrived the screen was cracked. The company is refusing to replace it or give me a refund even though I have the receipt and it is within the warranty period.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve a consumer dispute relating to a defective product and a refusal by the seller to provide a replacement or refund.',
      possibleAreas: ['Consumer Problems', 'Civil matter'],
      whatThisMayInvolve:
        'This situation may involve consumer rights under the Consumer Protection Act, 2019, warranty terms, and the process of escalating a complaint. The appropriate option could depend on the value of the product, the warranty terms, and whether you have communicated with the seller in writing.',
      whatToCheck: [
        { item: 'Order confirmation and receipt', explanation: 'Keep your order confirmation, invoice, and payment records.' },
        { item: 'Warranty card or terms', explanation: 'Review what the warranty covers and its duration.' },
        { item: 'Photos of the defect', explanation: 'Take clear photos of the cracked screen and packaging.' },
        { item: 'Communication with seller', explanation: 'Keep records of all emails, chats, or calls with the company.' },
        { item: 'Return policy', explanation: 'Check the platform return policy and timeline for returns.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Gather your evidence', explanation: 'Collect the order confirmation, receipt, warranty card, photos, and communication records.' },
        { number: '02', title: 'Send a formal complaint to the seller', explanation: 'Write formally requesting a replacement or refund, citing the warranty and the Consumer Protection Act.' },
        { number: '03', title: 'File a consumer complaint if unresolved', explanation: 'If the seller does not respond, you may file a complaint with the Consumer Disputes Redressal Commission.' },
        { number: '04', title: 'Seek professional assistance if needed', explanation: 'If the process feels overwhelming, you may consult a lawyer or explore legal aid.' },
      ],
      officialSources: [
        { title: 'National Consumer Disputes Redressal Commission (NCDRC)', organization: 'NCDRC', url: 'https://ncdrc.nic.in/' },
        { title: 'Consumer Protection Act, 2019', organization: 'Government of India', url: 'https://www.indiacode.nic.in/' },
      ],
      questionsToConsider: [
        'Have you kept all receipts, warranty cards, and photos of the defect?',
        'Have you communicated with the seller in writing?',
        'What is the value of the product? This may affect which level of consumer forum you can approach.',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'the-missing-refund',
      relatedDomain: 'consumer',
    },
  },
  {
    id: 'mock-legal-help',
    label: 'I need legal assistance',
    input:
      'I have a property dispute with my relative over inherited land and I cannot afford a private lawyer. I do not know where to get help or if there is any free legal assistance available.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve a civil property dispute and the need for legal assistance that you may not be able to afford.',
      possibleAreas: ['Legal Help & Legal Aid', 'Property & Land'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to property disputes, inheritance, and the availability of free legal aid in India. Free legal aid may be available to people with low income through Legal Services Authorities.',
      whatToCheck: [
        { item: 'Property documents', explanation: 'Collect any title documents, inheritance records, and family settlement records.' },
        { item: 'Income proof', explanation: 'Gather documents that show your income level, which may be relevant for legal aid eligibility.' },
        { item: 'Communication records', explanation: 'Keep records of any communication with your relative about the dispute.' },
        { item: 'Previous legal action', explanation: 'Note if any legal notice or case has already been filed.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Contact your nearest Legal Services Authority', explanation: 'Visit or contact the District or State Legal Services Authority to inquire about free legal aid.' },
        { number: '02', title: 'Gather relevant documents', explanation: 'Collect property documents, inheritance records, and income proof.' },
        { number: '03', title: 'Check your eligibility', explanation: 'Ask about eligibility criteria for free legal aid.' },
        { number: '04', title: 'Explore mediation', explanation: 'Legal Services Authorities organize Lok Adalats, which can help resolve disputes through mediation.' },
      ],
      officialSources: [
        { title: 'National Legal Services Authority (NALSA)', organization: 'NALSA', url: 'https://nalsa.gov.in/' },
        { title: 'Legal Services Authorities Act, 1987', organization: 'Government of India', url: 'https://www.indiacode.nic.in/' },
      ],
      questionsToConsider: [
        'Do you have documents relating to the property and the inheritance?',
        'What is your approximate income level? This may affect eligibility for free legal aid.',
        'Would you be open to resolving the dispute through mediation?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'i-need-a-lawyer',
      relatedDomain: 'legal-help',
    },
  },
  {
    id: 'mock-insurance',
    label: 'My insurance claim was rejected',
    input:
      'My health insurance claim has been rejected by the insurance company. They say I did not disclose a pre-existing condition, but I did not know about it when I bought the policy. What can I do?',
    response: {
      situationSummary:
        'From what you have described, this appears to involve an insurance claim that has been rejected on the grounds of non-disclosure of a pre-existing condition.',
      possibleAreas: ['Insurance', 'Consumer dispute'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to insurance policies, disclosure obligations, claim rejection, and grievance redressal mechanisms. The outcome could depend on the specific policy terms, what was disclosed at the time of purchase, and the nature of the pre-existing condition.',
      whatToCheck: [
        { item: 'Insurance policy document', explanation: 'Review the policy terms, especially sections on pre-existing conditions and disclosure obligations.' },
        { item: 'Claim rejection letter', explanation: 'Read the rejection letter carefully. It should state the specific reason for rejection.' },
        { item: 'Proposal form', explanation: 'Check what was declared in the proposal form when you bought the policy.' },
        { item: 'Medical records', explanation: 'Gather medical records that may show whether the condition was known or diagnosed before buying the policy.' },
        { item: 'Communication records', explanation: 'Keep all emails, letters, and messages with the insurance company.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'File a grievance with the insurance company', explanation: 'Most insurers have an internal grievance redressal process. File a written complaint with the grievance officer.' },
        { number: '02', title: 'Approach the Insurance Ombudsman', explanation: 'If the insurer does not resolve the complaint within 30 days, you may approach the Insurance Ombudsman.' },
        { number: '03', title: 'File a complaint with IRDAI', explanation: 'You can also file a complaint with the Insurance Regulatory and Development Authority of India (IRDAI).' },
        { number: '04', title: 'Seek professional assistance if needed', explanation: 'If the matter is complex, you may wish to consult a lawyer or explore consumer forum options.' },
      ],
      officialSources: [
        { title: 'Insurance Regulatory and Development Authority of India (IRDAI)', organization: 'IRDAI', url: 'https://www.irdai.gov.in/' },
        { title: 'Insurance Ombudsman', organization: 'Council for Insurance Ombudsman', url: 'https://www.cioins.co.in/' },
      ],
      questionsToConsider: [
        'What exactly does the rejection letter say about the reason for rejection?',
        'Were you aware of the pre-existing condition when you filled out the proposal form?',
        'Have you filed a written complaint with the insurance company grievance officer?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'the-insurance-claim',
      relatedDomain: 'insurance',
    },
  },
  {
    id: 'mock-employment',
    label: 'My employer has not paid my salary',
    input:
      'My employer has not paid my salary for the last three months. They keep saying the company is going through financial difficulties but they are still operating. I am not sure what to do.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve an employment dispute relating to unpaid salary.',
      possibleAreas: ['Work & Employment', 'Civil matter'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to employment rights, wage obligations, and mechanisms for raising grievances about unpaid wages. The appropriate route could depend on whether you have an employment agreement, the type of employment, and the amount owed.',
      whatToCheck: [
        { item: 'Employment agreement or offer letter', explanation: 'Review the terms about salary, payment schedule, and termination.' },
        { item: 'Payslips and bank statements', explanation: 'Gather payslips from previous months and bank statements showing the gap in payments.' },
        { item: 'Communication with employer', explanation: 'Keep all emails, messages, and letters about the unpaid salary.' },
        { item: 'Joining letter and ID', explanation: 'Keep documents that prove your employment with the company.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Send a formal written request', explanation: 'Write to your employer formally requesting payment of the outstanding salary within a specified period.' },
        { number: '02', title: 'File a complaint with the Labour Commissioner', explanation: 'If the employer does not respond, you may file a complaint with the Labour Commissioner in your area.' },
        { number: '03', title: 'Contact EPFO if applicable', explanation: 'If provident fund contributions have also not been made, you can file a complaint with EPFO.' },
        { number: '04', title: 'Seek professional assistance if needed', explanation: 'You may wish to consult a labour lawyer or explore legal aid.' },
      ],
      officialSources: [
        { title: 'Ministry of Labour and Employment', organization: 'Government of India', url: 'https://labour.gov.in/' },
        { title: 'Employees\' Provident Fund Organisation (EPFO)', organization: 'Government of India', url: 'https://www.epfindia.gov.in/' },
      ],
      questionsToConsider: [
        'Do you have a written employment agreement or offer letter?',
        'Have you communicated with your employer about the unpaid salary in writing?',
        'Are your provident fund contributions also being deducted but not deposited?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'something-isnt-right-at-work',
      relatedDomain: 'employment',
    },
  },
  {
    id: 'mock-property',
    label: 'I am planning to buy a plot of land',
    input:
      'I am planning to buy a plot of land from a seller in another city. I have seen the documents they gave me but I do not know what I should be checking before making the purchase.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve a property purchase and the need to understand what documents and checks are important before buying land.',
      possibleAreas: ['Property & Land', 'Documents & Contracts'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to property documents, title verification, encumbrances, and the registration process. Property transactions can be complex, and professional legal due diligence is generally recommended before making a purchase.',
      whatToCheck: [
        { item: 'Title document (sale deed)', explanation: 'This is the primary document that establishes ownership. Check if it is in the seller name.' },
        { item: 'Encumbrance certificate', explanation: 'This shows whether the property has any outstanding loans or legal charges against it.' },
        { item: 'Property tax receipts', explanation: 'Check that property taxes have been paid up to date.' },
        { item: 'Mutation records', explanation: 'These records show the property is recorded in the name of the seller in government records.' },
        { item: 'Approved layout and survey', explanation: 'Verify that the plot is part of an approved layout and matches survey records.' },
        { item: 'NOCs if applicable', explanation: 'Check if any no-objection certificates are needed, for example from environmental or local authorities.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Gather all available documents', explanation: 'Collect every document the seller has provided and organise them.' },
        { number: '02', title: 'Engage a lawyer for due diligence', explanation: 'A property lawyer can verify the title, check for encumbrances, and flag risks you may not spot.' },
        { number: '03', title: 'Visit the sub-registrar office', explanation: 'Verify that the documents match the records at the local sub-registrar office.' },
        { number: '04', title: 'Do not make full payment before verification', explanation: 'Avoid paying the full amount until due diligence is complete and the sale deed is ready for registration.' },
      ],
      officialSources: [
        { title: 'Registration Act, 1908', organization: 'Government of India', url: 'https://www.indiacode.nic.in/' },
        { title: 'Income Tax Department', organization: 'Government of India', url: 'https://www.incometax.gov.in/' },
      ],
      questionsToConsider: [
        'Has the seller provided the original sale deed, not just a copy?',
        'Is there an encumbrance certificate showing the property is free of loans or charges?',
        'Are the property taxes paid up to date?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'before-you-buy-the-land',
      relatedDomain: 'property-land',
    },
  },
  {
    id: 'mock-digital',
    label: 'I was scammed online',
    input:
      'Someone contacted me on Instagram pretending to be a recruiter and asked me to pay a registration fee for a job. I paid through UPI and then they disappeared. I have the chat and the UPI transaction ID.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve an online fraud where you were tricked into making a payment through UPI by someone impersonating a recruiter.',
      possibleAreas: ['Online & Digital Issues', 'Police & Crime'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to cyber crime, online fraud, and the process of reporting digital offences. Preserving evidence quickly can be important.',
      whatToCheck: [
        { item: 'Chat screenshots', explanation: 'Take screenshots of all conversations with the fraudster, including their profile.' },
        { item: 'UPI transaction details', explanation: 'Note the transaction ID, date, amount, and the UPI ID or account number of the recipient.' },
        { item: 'Profile information', explanation: 'Save any profile links, phone numbers, or email addresses used by the fraudster.' },
        { item: 'Any links or documents', explanation: 'Save any links, forms, or documents the fraudster shared with you.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Report on the Cyber Crime Portal', explanation: 'File a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in).' },
        { number: '02', title: 'Report to your bank or UPI app', explanation: 'Contact your bank or UPI app support to report the fraudulent transaction.' },
        { number: '03', title: 'File a police complaint', explanation: 'You can also file a complaint at your nearest police station with cyber crime jurisdiction.' },
        { number: '04', title: 'Preserve all evidence', explanation: 'Do not delete any messages, screenshots, or transaction records.' },
      ],
      officialSources: [
        { title: 'Cyber Crime Portal', organization: 'Ministry of Home Affairs', url: 'https://cybercrime.gov.in/' },
        { title: 'National Legal Services Authority (NALSA)', organization: 'NALSA', url: 'https://nalsa.gov.in/' },
      ],
      questionsToConsider: [
        'Do you have screenshots of the conversation and the fraudster profile?',
        'Do you have the UPI transaction ID and the recipient UPI ID?',
        'How long ago did the transaction happen? Reporting quickly can help.',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'something-happened-online',
      relatedDomain: 'digital',
    },
  },
  {
    id: 'mock-legal-notice',
    label: 'I received a legal notice',
    input:
      'I received a legal notice from a lawyer saying I have to vacate my shop because the landlord claims the lease has expired. I have been running my business here for 10 years and I thought the lease was still valid.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve a legal notice relating to a property or tenancy dispute where the landlord is seeking to terminate a lease.',
      possibleAreas: ['Courts & Legal Notices', 'Housing & Renting'],
      whatThisMayInvolve:
        'A legal notice is a formal communication that often precedes legal action. It may state claims, demands, and a deadline to respond. This situation may involve concepts relating to lease terms, tenancy rights, and the importance of responding to a legal notice within the stated timeframe.',
      whatToCheck: [
        { item: 'The legal notice itself', explanation: 'Read it carefully. Note who sent it, what is being demanded, the deadline to respond, and any legal provisions cited.' },
        { item: 'Lease or tenancy agreement', explanation: 'Review your lease agreement to check its duration, renewal terms, and termination clauses.' },
        { item: 'Rent payment records', explanation: 'Gather proof of rent payments to show you have been a tenant in good standing.' },
        { item: 'Communication with landlord', explanation: 'Keep records of any communication about the lease or the notice.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'Do not ignore the notice', explanation: 'A legal notice usually has a deadline. Ignoring it may weaken your position if the matter goes to court.' },
        { number: '02', title: 'Consult a lawyer', explanation: 'A lawyer can help you understand the notice, assess whether the claims are valid, and draft a reply.' },
        { number: '03', title: 'Gather your documents', explanation: 'Collect your lease agreement, rent receipts, and any communication with the landlord.' },
        { number: '04', title: 'Respond within the deadline', explanation: 'If a deadline is stated, a lawyer can help you respond formally before it expires.' },
      ],
      officialSources: [
        { title: 'National Legal Services Authority (NALSA)', organization: 'NALSA', url: 'https://nalsa.gov.in/' },
        { title: 'District Courts of India', organization: 'eCourts Project', url: 'https://districts.ecourts.gov.in/' },
      ],
      questionsToConsider: [
        'What is the deadline mentioned in the legal notice?',
        'What does your lease agreement say about duration and termination?',
        'Have you been paying rent regularly and do you have proof?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'i-received-a-legal-notice',
      relatedDomain: 'courts',
    },
  },
  {
    id: 'mock-road-accident',
    label: 'I was in a road accident',
    input:
      'My car was hit by another vehicle at a junction last week. I have some injuries and my car is damaged. The other driver was at fault. I am not sure what I should do about compensation.',
    response: {
      situationSummary:
        'From what you have described, this appears to involve a road accident where you suffered injuries and vehicle damage, and you are seeking information about compensation.',
      possibleAreas: ['Road Accidents', 'Insurance'],
      whatThisMayInvolve:
        'This situation may involve concepts relating to motor accident claims, insurance, and the process of seeking compensation. In India, compensation for road accidents may be sought through the Motor Accident Claims Tribunal (MACT).',
      whatToCheck: [
        { item: 'FIR or police report', explanation: 'If a police report was filed, keep a copy. If not, consider filing one.' },
        { item: 'Medical records', explanation: 'Keep all medical records, bills, and prescriptions related to your injuries.' },
        { item: 'Insurance policy', explanation: 'Check your motor insurance policy for coverage including personal accident cover.' },
        { item: 'Vehicle damage estimates', explanation: 'Get an estimate from a garage for repair costs.' },
        { item: 'Photos and witness details', explanation: 'Photos of the accident scene, vehicle damage, and witness contact details may be useful.' },
      ],
      possibleNextSteps: [
        { number: '01', title: 'File or obtain the FIR', explanation: 'If a police report was not filed at the time, consider filing one now.' },
        { number: '02', title: 'Gather medical and repair records', explanation: 'Collect all medical bills, reports, and vehicle repair estimates.' },
        { number: '03', title: 'Inform your insurance company', explanation: 'Report the accident to your insurance company promptly to initiate a claim.' },
        { number: '04', title: 'Consider filing a MACT claim', explanation: 'You may file a compensation claim with the Motor Accident Claims Tribunal. A lawyer can assist.' },
      ],
      officialSources: [
        { title: 'Motor Vehicles Act, 1988', organization: 'Government of India', url: 'https://www.indiacode.nic.in/' },
        { title: 'Motor Accident Claims Tribunal', organization: 'eCourts Project', url: 'https://districts.ecourts.gov.in/' },
      ],
      questionsToConsider: [
        'Was an FIR filed at the time of the accident?',
        'Do you have comprehensive motor insurance or only third-party cover?',
        'Have you kept all medical bills and records?',
      ],
      disclaimer: DISCLAIMER,
      relatedScenarioId: 'after-a-road-accident',
      relatedDomain: 'road-accident',
    },
  },
];

export const examplePrompts = mockScenarios.map((m) => ({
  id: m.id,
  label: m.label,
  input: m.input,
}));
