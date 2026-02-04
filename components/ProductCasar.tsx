
import React from 'react';
import { Check } from 'lucide-react';

const ProductCasar: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16 space-y-4">
          <h2 className="font-title text-4xl font-bold text-primary-teal">Nossos Produtos</h2>
          <p className="text-gray-brand max-w-2xl">Aplicamos nossa metodologia em áreas específicas para resultados extraordinários.</p>
        </div>

        <div className="bg-brown-brand rounded-[2rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
          <div className="p-12 md:p-20 text-white flex flex-col justify-center">
            <span className="text-orange-brand font-bold tracking-[0.2em] text-xs uppercase mb-6">BY SIMPLIFIER</span>
            <h3 className="font-title text-5xl md:text-6xl font-bold leading-tight mb-4">Casar<br/>Inteligente</h3>
            <div className="w-16 h-1 bg-orange-brand mb-8"></div>
            <p className="text-xl font-light opacity-90 leading-relaxed mb-10 max-w-md">
              Planeje seu casamento sem perder a sanidade.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Check className="w-5 h-5 text-orange-brand" /> Cronograma automatizado
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Check className="w-5 h-5 text-orange-brand" /> Fornecedores verificados
              </div>
            </div>
          </div>
          
          <div className="bg-white p-12 md:p-20 flex flex-col justify-center border-t-8 lg:border-t-0 lg:border-l-8 border-orange-brand">
            <span className="text-orange-brand font-semibold text-sm uppercase tracking-widest mb-2">CASAMENTOS</span>
            <h4 className="font-title text-3xl font-bold text-brown-brand mb-6 leading-tight">
              Organize o dia mais importante sem surtar.
            </h4>
            <div className="text-gray-brand space-y-4 mb-8 leading-relaxed">
              <p>Casar é lindo. Planejar um casamento é exaustivo. Você não precisa fazer tudo sozinha.</p>
              <p>O Casar Inteligente combina tecnologia com curadoria humana. A gente organiza o caos, você aproveita o processo.</p>
            </div>
            
            <h5 className="font-bold text-dark-teal mb-4">O que você tem:</h5>
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Cronograma que se atualiza sozinho",
                "Fornecedores confiáveis",
                "Orçamento organizado, sem surpresas",
                "Suporte emocional"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-brand mt-0.5 shrink-0" />
                  <span className="text-gray-brand text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-xs text-gray-brand/50 mb-6 italic">Nota: Parte do ecossistema Simplifier</p>
            
            <a href="https://wa.me/seunumerowhatsapp" className="inline-block text-center bg-brown-brand text-white font-bold py-4 px-10 rounded-xl hover:bg-dark-teal transition-all hover:scale-[1.02]">
              Falar com um consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCasar;
