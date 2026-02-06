
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Manifesto from './components/Manifesto'; 
import Process from './components/Process'; 
import DeliverySection from './components/DeliverySection';
import ResultsSection from './components/ResultsSection';
import About from './components/About';
import Footer from './components/Footer';
import { CONTENT, AUDIENCE_TYPES, AudienceType } from './constants';

const App: React.FC = () => {
  const [audience, setAudience] = useState<AudienceType>(AUDIENCE_TYPES.INDIVIDUALS);
  const activeContent = CONTENT[audience];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar audience={audience} setAudience={setAudience} />
      <Hero audience={audience} />
      
      {/* Mobile Toggle */}
      <div className="lg:hidden flex justify-center py-6 bg-white border-b border-light-teal px-6 sticky top-[72px] z-40">
        <div className="flex bg-slate-100 p-1 rounded-full w-full max-w-sm shadow-inner">
          <button 
            onClick={() => setAudience(AUDIENCE_TYPES.COMPANIES)}
            className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
              audience === AUDIENCE_TYPES.COMPANIES 
              ? 'bg-white text-primary-teal shadow-sm' 
              : 'text-gray-brand hover:text-dark-teal'
            }`}
          >
            PARA EMPRESAS
          </button>
          <button 
            onClick={() => setAudience(AUDIENCE_TYPES.INDIVIDUALS)}
            className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
              audience === AUDIENCE_TYPES.INDIVIDUALS 
              ? 'bg-white text-primary-teal shadow-sm' 
              : 'text-gray-brand hover:text-dark-teal'
            }`}
          >
            PARA PESSOAS
          </button>
        </div>
      </div>

      <main>
        {/* Seção 1: O Problema (Formerly Manifesto in prev versions) */}
        <ProblemSection audience={audience} />
        
        {/* Seção 2: Solução / Atuação */}
        <Process audience={audience} />

        {/* Seção 3: Entregáveis / Ecossistema (ID: #produtos) */}
        <DeliverySection audience={audience} />

        {/* Seção 4: Para quem é + Resultados */}
        <ResultsSection audience={audience} />

        {/* Final CTA */}
        <section className="py-24 bg-dark-teal relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-teal/20 blur-[100px] rounded-full"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-white mb-8">
              {activeContent.ctaFinal.title}
            </h2>
            <a 
              href={activeContent.ctaFinal.link} 
              className="inline-block bg-orange-brand text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-dark-teal transition-all shadow-xl hover:scale-105"
            >
              {activeContent.ctaFinal.button}
            </a>
          </div>
        </section>

        {/* Manifesto Real (Page 2 content) */}
        <Manifesto audience={audience} />

        {/* Sobre a Simplifier (Clareza muda tudo) */}
        <About audience={audience} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
