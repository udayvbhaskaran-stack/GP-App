import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Phone, Shield, FileText, Info, ArrowUpCircle, User,
  MessageSquare, Package, Scale, Gavel, ShoppingCart,
  Monitor, Home, Map, Umbrella, Briefcase, Car,
  Building, HelpCircle, CreditCard, Users,
} from 'lucide-react';
import type { ExploreStep, LegalConcept } from '@/types';
import { ConceptCard } from './ConceptCard';

const objectIcons: Record<string, React.ReactNode> = {
  phone: <Phone size={20} />,
  shield: <Shield size={20} />,
  'file-text': <FileText size={20} />,
  info: <Info size={20} />,
  'arrow-up-circle': <ArrowUpCircle size={20} />,
  user: <User size={20} />,
  message: <MessageSquare size={20} />,
  package: <Package size={20} />,
  scale: <Scale size={20} />,
  gavel: <Gavel size={20} />,
  'shopping-bag': <ShoppingCart size={20} />,
  monitor: <Monitor size={20} />,
  home: <Home size={20} />,
  map: <Map size={20} />,
  umbrella: <Umbrella size={20} />,
  briefcase: <Briefcase size={20} />,
  car: <Car size={20} />,
  building: <Building size={20} />,
  'help-circle': <HelpCircle size={20} />,
  'credit-card': <CreditCard size={20} />,
  users: <Users size={20} />,
};

function CharacterFigure({ type, label }: { type: string; label?: string }) {
  const colors: Record<string, string> = {
    person: '#176B73', police: '#13233A', judge: '#5B3A29',
    lawyer: '#2D5F4F', officer: '#13233A', seller: '#8B6B3D',
    doctor: '#2D7A50', agent: '#44689F', landlord: '#6B4C3A',
  };
  const color = colors[type] || '#176B73';

  return (
    <div className="flex flex-col items-center">
      <svg width="56" height="72" viewBox="0 0 56 72" fill="none">
        <circle cx="28" cy="14" r="10" fill={color} opacity="0.9" />
        <path d="M14 30 Q14 26 18 26 L38 26 Q42 26 42 30 L42 60 Q42 64 38 64 L18 64 Q14 64 14 60 Z" fill={color} opacity="0.85" />
        {type === 'police' && (
          <>
            <rect x="22" y="8" width="12" height="3" fill="#C79A3B" rx="1" />
            <rect x="24" y="34" width="8" height="12" fill="#F7F8F6" opacity="0.3" rx="1" />
          </>
        )}
        {type === 'judge' && <rect x="16" y="4" width="24" height="6" fill="#13233A" rx="2" />}
        {type === 'lawyer' && <path d="M24 26 L28 30 L32 26 L30 24 L26 24 Z" fill="#F7F8F6" opacity="0.5" />}
      </svg>
      {label && <span className="text-xs text-ink-light font-medium mt-1">{label}</span>}
    </div>
  );
}

function BackgroundScene({ type }: { type: string }) {
  const backgrounds: Record<string, React.ReactNode> = {
    street: (<div className="absolute inset-0"><div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-sky-100 to-cream" /><div className="absolute bottom-0 left-0 right-0 h-1/2 bg-stone-200" /><div className="absolute top-[35%] left-[10%] w-16 h-24 bg-stone-300 rounded-t-lg" /><div className="absolute top-[30%] left-[70%] w-20 h-32 bg-stone-300 rounded-t-lg" /></div>),
    station: (<div className="absolute inset-0"><div className="absolute inset-0 bg-stone-100" /><div className="absolute top-[20%] left-0 right-0 h-1 bg-navy/20" /><div className="absolute top-[45%] left-[15%] right-[15%] h-12 bg-stone-300 rounded-lg" /></div>),
    courtroom: (<div className="absolute inset-0"><div className="absolute inset-0 bg-amber-50" /><div className="absolute top-[15%] left-[30%] right-[30%] h-16 bg-stone-300 rounded-t-lg" /><div className="absolute top-[15%] left-[20%] w-8 h-16 bg-stone-200 rounded" /><div className="absolute top-[15%] right-[20%] w-8 h-16 bg-stone-200 rounded" /><div className="absolute top-[45%] left-[10%] right-[10%] h-1 bg-navy/15" /></div>),
    home: (<div className="absolute inset-0"><div className="absolute inset-0 bg-orange-50" /><div className="absolute top-[15%] left-[10%] w-24 h-16 bg-stone-200 rounded-t-xl" /><div className="absolute top-[35%] left-[20%] w-12 h-8 bg-stone-300 rounded" /><div className="absolute top-[55%] left-[60%] w-20 h-10 bg-stone-200 rounded" /></div>),
    office: (<div className="absolute inset-0"><div className="absolute inset-0 bg-slate-50" /><div className="absolute top-[30%] left-[55%] w-24 h-20 bg-stone-200 rounded-lg" /><div className="absolute top-[35%] left-[60%] w-14 h-8 bg-white rounded shadow-sm" /></div>),
    shop: (<div className="absolute inset-0"><div className="absolute inset-0 bg-yellow-50" /><div className="absolute top-[20%] left-[15%] w-28 h-20 bg-stone-200 rounded-lg" /><div className="absolute top-[25%] left-[20%] w-16 h-10 bg-white rounded shadow-sm" /></div>),
    hospital: (<div className="absolute inset-0"><div className="absolute inset-0 bg-teal-50" /><div className="absolute top-[20%] left-[20%] w-24 h-16 bg-white rounded-lg shadow-sm" /><div className="absolute top-[50%] left-[60%] w-16 h-12 bg-stone-200 rounded" /></div>),
    road: (<div className="absolute inset-0"><div className="absolute top-0 left-0 right-0 h-1/2 bg-sky-100" /><div className="absolute bottom-0 left-0 right-0 h-1/2 bg-stone-300" /><div className="absolute top-[48%] left-0 right-0 h-1 bg-white/50" /></div>),
    desk: (<div className="absolute inset-0"><div className="absolute inset-0 bg-stone-50" /><div className="absolute top-[40%] left-[10%] right-[10%] h-16 bg-stone-200 rounded-lg" /><div className="absolute top-[35%] left-[15%] w-20 h-8 bg-white rounded shadow-sm" /></div>),
    counter: (<div className="absolute inset-0"><div className="absolute inset-0 bg-stone-50" /><div className="absolute top-[40%] left-0 right-0 h-20 bg-stone-200" /></div>),
  };

  return <div className="absolute inset-0 overflow-hidden rounded-xl">{backgrounds[type] || backgrounds.street}</div>;
}

interface ExploreInteractionProps {
  data: ExploreStep;
  concepts: LegalConcept[];
  onConceptDiscovered: (conceptId: string) => void;
  discoveredConceptIds: string[];
}

export function ExploreInteraction({ data, concepts, onConceptDiscovered, discoveredConceptIds }: ExploreInteractionProps) {
  const [selectedConcept, setSelectedConcept] = useState<LegalConcept | null>(null);
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);

  const handleObjectClick = (conceptId: string) => {
    const concept = concepts.find((c) => c.id === conceptId);
    if (concept) {
      setSelectedConcept(concept);
      if (!discoveredConceptIds.includes(conceptId)) onConceptDiscovered(conceptId);
    }
  };

  return (
    <div className="relative">
      <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-xl overflow-hidden border border-navy/10 bg-cream">
        <BackgroundScene type={data.background} />

        {data.characters.map((char) => (
          <div key={char.id} className="absolute" style={{ top: char.position.top, left: char.position.left, transform: 'translate(-50%, -50%)' }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CharacterFigure type={char.type} label={char.label} />
            </motion.div>
          </div>
        ))}

        {data.objects.map((obj) => {
          const isDiscovered = discoveredConceptIds.includes(obj.conceptId);
          return (
            <button
              key={obj.id}
              className="absolute group focus:outline-none"
              style={{ top: obj.position.top, left: obj.position.left, transform: 'translate(-50%, -50%)' }}
              onClick={() => handleObjectClick(obj.conceptId)}
              onMouseEnter={() => setHoveredObject(obj.id)}
              onMouseLeave={() => setHoveredObject(null)}
              aria-label={`Explore: ${obj.label}`}
            >
              <motion.div
                animate={hoveredObject === obj.id ? { scale: 1.1 } : { scale: 1 }}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isDiscovered ? 'bg-teal/15 text-teal' : 'bg-white/80 text-navy border-2 border-dashed border-teal/40'
                } group-hover:bg-teal group-hover:text-white group-hover:border-teal shadow-sm`}
              >
                {objectIcons[obj.icon] || <Info size={20} />}
                {!isDiscovered && <span className="absolute inset-0 rounded-full border-2 border-teal/30 animate-ping" />}
              </motion.div>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs font-medium text-navy bg-white/90 px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {obj.label}
              </span>
            </button>
          );
        })}

        {data.objects.some((obj) => !discoveredConceptIds.includes(obj.conceptId)) && (
          <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-teal/90 text-white text-xs font-medium rounded-full">
            Click glowing objects to explore
          </div>
        )}
      </div>

      {selectedConcept && <ConceptCard concept={selectedConcept} onClose={() => setSelectedConcept(null)} />}
    </div>
  );
}
