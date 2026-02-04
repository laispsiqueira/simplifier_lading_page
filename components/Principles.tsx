
import React from 'react';
import { PRINCIPLES } from '../constants';

const Principles: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-title text-4xl font-bold text-primary-teal">Nossos Princípios</h2>
          <p className="text-gray-brand max-w-2xl mx-auto">Os valores que guiam cada solução que criamos para garantir que seu negócio cresça de forma sustentável.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRINCIPLES.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-light-teal hover:border-primary-teal transition-all hover:shadow-xl hover:-translate-y-1 group">
              <div className="mb-6 bg-light-teal w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-primary-teal group-hover:text-white transition-colors">
                {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow className prop in cloneElement */}
                {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6 group-hover:text-white" })}
              </div>
              <h3 className="text-xl font-bold text-dark-teal mb-3">{item.title}</h3>
              <p className="text-gray-brand text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
