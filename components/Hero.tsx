
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-light-teal via-white to-white">
      {/* Elemento de fundo abstrato */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[120%] bg-orange-brand/5 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-left">
          <div className="inline-block px-4 py-1.5 bg-white shadow-sm border border-light-teal rounded-full text-orange-brand font-bold text-xs tracking-widest uppercase">
            INTELIGÊNCIA OPERACIONAL
          </div>
          
          <h1 className="font-title text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-dark-teal font-bold">
            Tecnologia feita para <span className="text-primary-teal">simplificar</span><span className="text-orange-brand">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-brand/80 max-w-xl font-light">
            Menos complexidade, mais clareza para decidir melhor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#produtos" className="flex items-center justify-center gap-2 bg-primary-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-dark-teal transition-all group shadow-lg hover:shadow-primary-teal/20">
              Conheça nosso ecossistema
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-dark-teal rounded-full flex items-center justify-center relative shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-teal to-dark-teal opacity-90"></div>
            <div className="absolute inset-0 border-[3px] border-orange-brand/30 rounded-full scale-110 animate-[pulse_4s_infinite]"></div>
            
            <div className="relative z-10 text-white text-center px-12 space-y-2">
              <span className="block text-4xl md:text-5xl font-title font-bold leading-tight">Crescer com leveza é possível</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
