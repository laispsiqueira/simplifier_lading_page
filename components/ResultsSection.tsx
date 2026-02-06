
import React from 'react';
import { CONTENT, AudienceType } from '../constants';
import { CheckCircle2, User } from 'lucide-react';

interface ResultsSectionProps {
  audience: AudienceType;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ audience }) => {
  const audienceData = CONTENT[audience].audience;
  const resultsData = CONTENT[audience].results;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Para quem é */}
        <div>
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-orange-brand/10 rounded-lg">
               <User className="w-6 h-6 text-orange-brand" />
             </div>
             <h2 className="font-title text-3xl font-bold text-dark-teal">{audienceData.title}</h2>
           </div>
           <p className="text-xl text-gray-brand leading-relaxed font-light">
             {audienceData.description}
           </p>
        </div>

        {/* Resultados */}
        <div>
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 bg-primary-teal/10 rounded-lg">
               <CheckCircle2 className="w-6 h-6 text-primary-teal" />
             </div>
             <h2 className="font-title text-3xl font-bold text-dark-teal">{resultsData.title}</h2>
           </div>
           
           <div className="space-y-4">
             {resultsData.items.map((item, idx) => (
               <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-light-teal">
                 <div className="w-2 h-2 rounded-full bg-primary-teal shrink-0"></div>
                 <p className="text-gray-brand font-medium">{item}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
