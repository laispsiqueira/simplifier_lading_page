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
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full flex flex-col items-center justify-center space-y-8 py-12">
        <div className="inline-block px-4 py-1.5 bg-orange-brand/10 border border-orange-brand/20 rounded-full text-orange-brand font-bold text-xs tracking-widest uppercase shadow-sm">
          PARA SEU NEGÓCIO
        </div>
        
        <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.15] font-extrabold tracking-tight text-center max-w-3xl">
          <span className="text-[#157D9A]">Organização, direcionamento e clareza</span><br className="hidden md:inline" />
          <span className="text-[#ED8932]"> para criar autonomia.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-brand/90 max-w-2xl font-light font-sans leading-relaxed text-center mx-auto">
          Construímos a tecnologia que faz seu negócio rodar sozinho:<br className="hidden sm:inline" />
          e-commerce, automações e sistemas feitos para durar.
        </p>
        
        <div className="flex justify-center pt-4 w-full">
          <a 
            href="#produtos" 
            onClick={handleScrollToProducts}
            className="inline-flex items-center justify-center gap-3 bg-[#157D9A] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#0d5164] transition-all group shadow-md hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto"
          >
            Quero organizar minha operação
            <span className="w-10 h-[2px] bg-white/70 block transition-transform group-hover:translate-x-1.5 duration-200 shrink-0"></span>
            <span className="-ml-1 text-white">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
