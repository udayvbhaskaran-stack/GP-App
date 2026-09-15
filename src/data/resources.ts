import type { ResourceItem } from '@/types';

export const resources: ResourceItem[] = [
  {
    id: 'res-nalsa',
    organization: 'National Legal Services Authority (NALSA)',
    description:
      'The central body established to provide free legal services to eligible citizens and organize Lok Adalats for dispute resolution.',
    useCase: 'If you cannot afford a lawyer, you can approach NALSA or your state/district Legal Services Authority to apply for free legal aid.',
    url: 'https://nalsa.gov.in/',
    category: 'legal-aid',
  },
  {
    id: 'res-sci',
    organization: 'Supreme Court of India',
    description:
      'The highest judicial authority in India. The website provides access to judgments, case status, and court information.',
    useCase: 'To search for judgments, check case status, or learn about the Supreme Court procedures.',
    url: 'https://main.sci.gov.in/',
    category: 'courts',
  },
  {
    id: 'res-district-courts',
    organization: 'District Courts of India (eCourts)',
    description:
      'The official portal for district courts across India, providing case status, court lists, and judicial services.',
    useCase: 'To check case status at the district level, find your local court, or access court-related services.',
    url: 'https://districts.ecourts.gov.in/',
    category: 'courts',
  },
  {
    id: 'res-cybercrime',
    organization: 'Cyber Crime Portal',
    description:
      'The official portal of the Ministry of Home Affairs for reporting cyber crimes, including online fraud, hacking, and cyber-related offences.',
    useCase: 'If you have experienced online fraud or a cyber crime, you can report it through this portal.',
    url: 'https://cybercrime.gov.in/',
    category: 'cyber',
  },
  {
    id: 'res-ncdrc',
    organization: 'National Consumer Disputes Redressal Commission (NCDRC)',
    description:
      'The apex consumer disputes redressal body in India, handling consumer complaints and appeals.',
    useCase: 'If you have a consumer dispute that has not been resolved by the seller, you can file a complaint with the consumer forum.',
    url: 'https://ncdrc.nic.in/',
    category: 'consumer',
  },
  {
    id: 'res-indiacode',
    organization: 'India Code (Legislation Database)',
    description:
      'The official repository of Indian legislation maintained by the Government of India.',
    useCase: 'To search for and read the full text of Indian laws, acts, and amendments.',
    url: 'https://www.indiacode.nic.in/',
    category: 'government',
  },
  {
    id: 'res-constitution',
    organization: 'Constitution of India',
    description:
      'The supreme law of India, establishing fundamental rights, directive principles, and the structure of government.',
    useCase: 'To understand your fundamental rights and the constitutional framework of India.',
    url: 'https://www.constitutionofindia.net/',
    category: 'government',
  },
];
