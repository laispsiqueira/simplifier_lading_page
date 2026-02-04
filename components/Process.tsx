
import React from 'react';
import { CONTENT, AudienceType } from '../constants';

interface ProcessProps {
  audience: AudienceType;
}

const Process: React.FC<ProcessProps> = ({ audience }) => {
  const data = CONTENT[audience].process;

  return (
    <section className="py-24 bg-white border-y border-light-teal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16 space-y-4">
          <h2 className="font-title text-4xl font-bold text-primary-teal">{data.title}</h2>
          <p className="text-gray-brand max-w-xl">{data.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.steps.map((step, idx) => (
            <div key={idx} className="relative p-10 bg-slate-50 rounded-3xl group hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-light-teal flex flex-col h-full">
              <span className="text-orange-brand font-title text-xs font-bold uppercase tracking-widest mb-4">
                {audience === 'empresas' ? `Fase ${step.number}` : `Passo ${step.number}`}
              </span>
              <h3 className="text-xl font-bold text-dark-teal mb-4">{step.title}</h3>
              <p className="text-gray-brand leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-light-teal/30 rounded-2xl text-center">
          <p className="text-dark-teal font-medium italic">
            Nota: Trabalhamos com ciclos de melhoria contínua. Não entregamos um projeto e sumimos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
