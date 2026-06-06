import React from 'react';
import { ShoppingBag, Workflow, Database } from 'lucide-react';
import { CONTENT, AudienceType } from '../constants';

interface HeroProps {
  audience: AudienceType;
}

const Hero: React.FC<HeroProps> = ({ audience }) => {
  const content = CONTENT[audience].hero;

  const handleScrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#produtos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-light-teal via-white to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-orange-brand/5 to-transparent blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* Left Column (Hero copy and brand values) - 7 spans */}
        <div className="lg:col-span-7 space-y-8 text-left max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-orange-brand/10 border border-orange-brand/20 rounded-full text-orange-brand font-bold text-xs tracking-widest uppercase shadow-sm">
            PARA SEU NEGÓCIO
          </div>
          
          <h1 className="font-title text-5xl md:text-6xl lg:text-[76px] leading-[1.08] text-dark-teal font-extrabold tracking-tight">
            <span className=" block mb-1 text-[#157D9A] font-extrabold">Organização,</span>
            <span className=" block mb-1 text-[#157D9A] font-extrabold">Direcionamento,</span>
            <span className=" block mb-1 text-[#157D9A] font-extrabold">Clareza </span>
            <span className="text-orange-brand  font-normal">para assim,</span><br />
            <span className="text-orange-brand  font-normal">criar autonomia
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-brand/90 max-w-xl font-light font-sans leading-relaxed">
            {content.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#produtos" 
              onClick={handleScrollToProducts}
              className="inline-flex items-center justify-center gap-3 bg-[#157D9A] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#0d5164] transition-all group shadow-md hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto"
            >
              Falar com a Simplifier
              <span className="w-10 h-[2px] bg-white/70 block transition-transform group-hover:translate-x-1.5 duration-200 shrink-0"></span>
              <span className="-ml-1 text-white">→</span>
            </a>
          </div>
        </div>

        {/* Right Column (Stacked visual products mock-up mirroring the image) - 5 spans */}
        <div className="lg:col-span-5 space-y-6 w-full max-w-md mx-auto lg:mx-0">
          
          {/* Card 1: E-commerce Product */}
          <div className="bg-[#2E1909] p-7 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-white flex flex-col justify-between transition-all hover:scale-[1.02] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED8932]/10 blur-2xl rounded-full"></div>
            
            <div className="flex justify-between items-center z-10">
              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center border border-white/10">
                <ShoppingBag className="w-5 h-5 text-orange-brand" />
              </div>
              <span className="bg-[#ED8932] text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                E-COMMERCE
              </span>
            </div>
            
            <h3 className="text-xl font-black text-white leading-snug mt-6 mb-4 z-10">
              Sua loja pronta para vender. Sem dor de cabeça técnica.
            </h3>
            
            <hr className="border-white/10 my-1" />
            
            <div className="pt-2 z-10">
              <a 
                href="/ecommerce" 
                className="inline-flex items-center gap-1.5 text-orange-brand font-bold text-sm hover:text-white transition-colors group"
              >
                Saiba mais <span className="transform group-hover:translate-x-0.5 transition-transform">✓</span>
              </a>
            </div>
          </div>

          {/* Card 2: Automações de processos */}
          <div className="bg-white p-7 md:p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between transition-all hover:scale-[1.02] hover:-translate-y-1">
            <div className="flex justify-between items-center">
              <div className="w-11 h-11 rounded-xl bg-[#f0f8fa] flex items-center justify-center">
                <Workflow className="w-5 h-5 text-primary-teal" />
              </div>
              <span className="bg-[#f0f8fa] text-primary-teal text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase border border-primary-teal/10">
                AUTOMAÇÕES DE PROCESSOS
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-[#0d5164] leading-snug mt-5 mb-4">
              O que hoje depende de você, amanhã roda sozinho.
            </h3>
            
            <div className="pt-2">
              <a 
                href="#produtos" 
                onClick={handleScrollToProducts}
                className="inline-flex items-center gap-1.5 text-slate-800 font-extrabold text-sm hover:text-primary-teal transition-colors"
              >
                Saiba Mais <span className="text-xs transition-transform hover:scale-125">+</span>
              </a>
            </div>
          </div>

          {/* Card 3: Sistemas sob medida */}
          <div className="bg-white p-7 md:p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between transition-all hover:scale-[1.02] hover:-translate-y-1">
            <div className="flex justify-between items-center">
              <div className="w-11 h-11 rounded-xl bg-[#f0f8fa] flex items-center justify-center">
                <Database className="w-5 h-5 text-primary-teal" />
              </div>
              <span className="bg-[#f0f8fa] text-primary-teal text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase border border-primary-teal/10">
                SISTEMAS SOB MEDIDA
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-[#0d5164] leading-snug mt-5 mb-2">
              Construídos para o seu negócio. Não para o negócio de todo mundo.
            </h3>
            
            <p className="text-xs text-gray-brand/80 leading-relaxed font-light mb-4">
              Sistemas desenvolvidos de forma personalizada para se adaptar perfeitamente à sua operação, sem complexidade desnecessária.
            </p>
            
            <div className="pt-2">
              <a 
                href="https://wa.me/seunumerowhatsapp"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-800 font-extrabold text-sm hover:text-primary-teal transition-colors"
              >
                Entre em contato
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
