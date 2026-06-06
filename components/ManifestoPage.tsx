import React, { useEffect } from 'react';
import Manifesto from './Manifesto';
import About from './About';
import { AudienceType } from '../constants';

interface ManifestoPageProps {
  audience: AudienceType;
  setAudience: (type: AudienceType) => void;
}

const ManifestoPage: React.FC<ManifestoPageProps> = ({ audience, setAudience }) => {
  useEffect(() => {
    // Scroll to section based on current hash
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Visual Header Banner for page depth */}
      <div className="bg-[#0d5164] py-16 md:py-24 text-center relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-brand/10 blur-[100px] rounded-full"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-orange-brand border border-white/5 font-bold text-xs tracking-wider uppercase">
            INSTITUCIONAL
          </span>
          <h1 className="font-title text-4xl md:text-5xl font-extrabold tracking-tight">
            Nosso compromisso com a clareza
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Eliminamos o barulho e a complexidade desnecessária para criar autonomia no seu negócio.
          </p>
        </div>
      </div>

      {/* Render the core components */}
      <Manifesto audience={audience} />
      <About audience={audience} setAudience={setAudience} />
    </div>
  );
};

export default ManifestoPage;
