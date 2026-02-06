
import React from 'react';
import { CONTENT, AudienceType } from '../constants';
import { AlertCircle, Check } from 'lucide-react';

interface ManifestoProps {
  audience: AudienceType;
}

const Manifesto: React.FC<ManifestoProps> = ({ audience }) => {
  const data = CONTENT[audience].problem;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-12 text-left">
          <div className="w-16 h-1 bg-orange-brand mb-6"></div>
          <h2 className="font-title text-4xl font-bold text-primary-teal">{data.title}</h2>
          {data.subtitle && (
             <p className="text-xl text-gray-brand font-light">{data.subtitle}</p>
          )}
        </div>
        
        <div className="grid gap-4">
          {data.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-orange-brand/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-orange-brand/10 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-orange-brand" />
              </div>
              <p className="text-lg text-gray-brand font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
