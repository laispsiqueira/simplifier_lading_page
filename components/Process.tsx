
import React from 'react';
import { CONTENT, AudienceType } from '../constants';

interface ProcessProps {
  audience: AudienceType;
}

const Process: React.FC<ProcessProps> = ({ audience }) => {
  const data = CONTENT[audience].solution;

  return (
    <section className="py-24 bg-slate-50 border-y border-light-teal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16 space-y-4">
          <h2 className="font-title text-4xl font-bold text-primary-teal">{data.title}</h2>
          {data.description && (
             <p className="text-gray-brand max-w-xl text-lg">{data.description}</p>
          )}
        </div>
        
        {data.blocks && data.blocks.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.blocks.map((block, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4 border border-light-teal">
                <div className="w-12 h-12 bg-light-teal rounded-xl flex items-center justify-center text-primary-teal">
                  {block.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-teal">{block.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-light-teal text-center shadow-sm">
             <p className="text-2xl font-title text-dark-teal">
               "Tudo na palma da mão, funcional e alinhado com o todo."
             </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Process;
