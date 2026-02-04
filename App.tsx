
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Principles from './components/Principles';
import Process from './components/Process';
import ProductCasar from './components/ProductCasar';
import Footer from './components/Footer';
import { X, Check } from 'lucide-react';
import { EXCLUSION_CRITERIA, AUDIENCE_TYPES, AudienceType, CONTENT } from './constants';

const App: React.FC = () => {
  const [audience, setAudience] = useState<AudienceType>(AUDIENCE_TYPES.COMPANIES);
  const activeContent = CONTENT[audience];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar audience={audience} setAudience={setAudience} />
      <Hero />
      
      {/* Mobile Toggle */}
      <div className="lg:hidden flex justify-center py-8 bg-slate-50 border-b border-light-teal px-6">
        <div className="flex bg-slate-200 p-1 rounded-xl w-full max-w-md">
          <button 
            onClick={() => setAudience(AUDIENCE_TYPES.COMPANIES)}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${
              audience === AUDIENCE_TYPES.COMPANIES 
              ? 'bg-white text-primary-teal shadow-md' 
              : 'text-gray-brand'
            }`}
          >
            EMPRESAS
          </button>
          <button 
            onClick={() => setAudience(AUDIENCE_TYPES.INDIVIDUALS)}
            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${
              audience === AUDIENCE_TYPES.INDIVIDUALS 
              ? 'bg-white text-primary-teal shadow-md' 
              : 'text-gray-brand'
            }`}
          >
            PESSOAS
          </button>
        </div>
      </div>

      <main>
        <Manifesto audience={audience} />
        
        {/* Transitional Section - Para quem é */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-title text-4xl font-bold text-primary-teal mb-12 text-left">{activeContent.targetAudience.title}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {activeContent.targetAudience.items.map((text, idx) => (
                <div key={idx} className="flex items-start gap-4 text-lg text-gray-brand font-light">
                  <div className="w-2 h-2 mt-2.5 bg-orange-brand rounded-full shrink-0"></div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="p-8 bg-white border border-light-teal rounded-2xl">
               <h3 className="font-bold text-dark-teal mb-4">
                 {audience === 'empresas' ? 'Sobre gestão de mudança:' : 'Sobre ter medo da mudança:'}
               </h3>
               <p className="text-gray-brand leading-relaxed">
                 {activeContent.targetAudience.typicalProfile}
               </p>
            </div>
          </div>
        </section>

        <Process audience={audience} />

        {/* Benefits Section - O que você ganha */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-title text-4xl font-bold text-primary-teal mb-16 text-left">Impacto mensurável</h2>
            <p className="text-gray-brand mb-12 text-lg">O que {audience === 'empresas' ? 'sua empresa' : 'você'} ganha na prática:</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeContent.benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-transparent hover:border-light-teal">
                  <div className="w-10 h-10 bg-primary-teal text-white rounded-lg flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-teal mb-2">{benefit.title}</h3>
                  <p className="text-gray-brand text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductCasar />

        {/* Differentiators Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left mb-16">
              <h2 className="font-title text-4xl font-bold text-primary-teal mb-4">Por que não somos {audience === 'empresas' ? 'mais uma consultoria' : 'só mais uma ferramenta'}</h2>
              <p className="text-gray-brand text-lg italic">Porque entregamos sistemas funcionando, não apenas diagnóstico.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {activeContent.differentiators.map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-brand">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-teal">{item.title}</h3>
                  <p className="text-gray-brand text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Principles />

        {/* Exclusion Criteria Section */}
        <section className="py-24 bg-dark-teal text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-left mb-16 space-y-4">
              <h2 className="font-title text-4xl font-bold">Vamos ser diretos</h2>
              <p className="text-white/60">A Simplifier não funciona para todo mundo. E tudo bem.</p>
            </div>
            
            <div className="space-y-4">
              {EXCLUSION_CRITERIA.map((text, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-white/5 border-l-4 border-orange-brand rounded-r-xl group hover:bg-white/10 transition-all">
                  <span className="shrink-0"><X className="w-5 h-5 text-orange-brand" /></span>
                  <p className="text-lg font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="sobre" className="py-24 bg-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-light-teal/20 rounded-full blur-[120px]"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-primary-teal">{activeContent.cta.title}</h2>
            
            <div className="space-y-4">
              <p className="text-2xl text-gray-brand font-light">
                {audience === 'empresas' 
                  ? 'Chega um ponto em que trabalhar mais não resolve. É preciso trabalhar melhor.' 
                  : 'Se você sente que trabalha demais e vive de menos, o problema não é falta de tempo. É falta de clareza.'}
              </p>
              <p className="text-xl text-primary-teal font-bold uppercase tracking-widest">A gente te ajuda nessa jornada.</p>
            </div>

            <div className="pt-8 space-y-6">
               <a 
                 href={audience === 'empresas' ? '#contato' : 'https://wa.me/seunumerowhatsapp'} 
                 className="inline-block bg-orange-brand text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-dark-teal transition-all shadow-xl hover:scale-105 active:scale-95"
               >
                 {activeContent.cta.button}
               </a>
               <p className="text-gray-brand/60 text-sm">
                 {activeContent.cta.secondary}
               </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
