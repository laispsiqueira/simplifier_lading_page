
import React from 'react';
import { CONTENT, AudienceType } from '../constants';

interface ManifestoProps {
  audience: AudienceType;
}

const Manifesto: React.FC<ManifestoProps> = ({ audience }) => {
  const data = CONTENT[audience].manifesto;

  return (
    <section id="manifesto" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-2 mb-12 text-left">
          <h2 className="font-title text-4xl font-bold text-primary-teal">{data.title}</h2>
          <div className="w-16 h-1 bg-orange-brand"></div>
        </div>
        
        <div className="space-y-8 text-lg text-gray-brand leading-relaxed">
          {data.text.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          
          <div className="bg-light-teal/50 border-l-4 border-orange-brand p-8 md:p-12 rounded-r-2xl my-12">
            <h3 className="font-title text-2xl font-bold text-dark-teal mb-4">A Simplifier existe para isso:</h3>
            <p className="italic">
              {data.highlight}
            </p>
          </div>
          
          <p className="font-bold text-dark-teal text-xl">
            O resultado? {audience === 'empresas' ? 'Crescimento sustentável e equipes alinhadas.' : 'Você volta a ter tempo pra vida além do trabalho.'}
          </p>
          <p className="text-primary-teal font-medium">
            Tecnologia pode complicar ou pode {audience === 'empresas' ? 'escalar' : 'libertar'}. Com a gente, ela {audience === 'empresas' ? 'escala' : 'liberta'}.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
