
import React from 'react';
import { AudienceType, AUDIENCE_TYPES } from '../constants';

interface AboutProps {
  audience: AudienceType;
  setAudience?: (type: AudienceType) => void;
}

const About: React.FC<AboutProps> = ({ audience, setAudience }) => {
  const handleSwitch = (target: AudienceType) => {
    if (setAudience) {
      setAudience(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isCompanies = audience === AUDIENCE_TYPES.COMPANIES;

  return (
    <section id="sobre" className="py-24 bg-white border-t border-light-teal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-title text-4xl font-bold text-primary-teal mb-6">Clareza muda tudo.</h2>
          <div className="w-20 h-1 bg-orange-brand mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 text-xl text-gray-brand leading-relaxed text-center md:text-left transition-all duration-300">
          {isCompanies ? (
            <>
              <p>
                A Simplifier nasceu de uma observação simples: empresas funcionam na intuição de poucas pessoas. Quando essas pessoas saem, param.
              </p>
              <p className="font-medium text-dark-teal">
                Criamos estrutura para que qualquer pessoa do time saiba o que fazer, como decidir e para onde ir — sem precisar perguntar toda hora.
              </p>
            </>
          ) : (
            <>
              <p>
                A Simplifier nasceu para resolver uma dor real: a sensação de estar sempre atrasado — mesmo quando você deu o máximo.
              </p>
              <p className="font-medium text-dark-teal">
                Construímos ferramentas para que você ocupe menos espaço na sua própria cabeça. E use esse espaço para viver melhor.
              </p>
            </>
          )}

          <div className="pt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
            {isCompanies ? (
              <button
                onClick={() => handleSwitch(AUDIENCE_TYPES.COMPANIES)}
                className="bg-primary-teal text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-dark-teal transition-all shadow-md"
              >
                Para empresas →
              </button>
            ) : (
              <button
                onClick={() => handleSwitch(AUDIENCE_TYPES.INDIVIDUALS)}
                className="bg-orange-brand text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-brown-brand transition-all shadow-md"
              >
                Para pessoas →
              </button>
            )}
            
            {/* Soft button to switch to the opposite section so users can discover both wings easily */}
            {isCompanies ? (
              <button
                onClick={() => handleSwitch(AUDIENCE_TYPES.INDIVIDUALS)}
                className="border border-primary-teal/20 text-primary-teal px-8 py-3.5 rounded-xl font-medium text-lg hover:bg-light-teal transition-all"
              >
                Ver versão Para Pessoas
              </button>
            ) : (
              <button
                onClick={() => handleSwitch(AUDIENCE_TYPES.COMPANIES)}
                className="border border-orange-brand/20 text-orange-brand px-8 py-3.5 rounded-xl font-medium text-lg hover:bg-orange-brand/5 transition-all"
              >
                Ver versão Para Empresas
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
