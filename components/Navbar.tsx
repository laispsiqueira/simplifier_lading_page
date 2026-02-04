
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, AudienceType, AUDIENCE_TYPES } from '../constants';

interface NavbarProps {
  audience: AudienceType;
  setAudience: (type: AudienceType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ audience, setAudience }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-title text-2xl font-bold text-primary-teal">simplifier</span>
            <div className="w-2.5 h-2.5 bg-orange-brand rounded-full transition-transform group-hover:scale-125"></div>
          </a>

          {/* Audience Toggle */}
          <div className="hidden lg:flex bg-slate-100 p-1 rounded-full items-center">
            <button 
              onClick={() => setAudience(AUDIENCE_TYPES.COMPANIES)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                audience === AUDIENCE_TYPES.COMPANIES 
                ? 'bg-white text-primary-teal shadow-sm' 
                : 'text-gray-brand hover:text-dark-teal'
              }`}
            >
              PARA EMPRESAS
            </button>
            <button 
              onClick={() => setAudience(AUDIENCE_TYPES.INDIVIDUALS)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                audience === AUDIENCE_TYPES.INDIVIDUALS 
                ? 'bg-white text-primary-teal shadow-sm' 
                : 'text-gray-brand hover:text-dark-teal'
              }`}
            >
              PARA PESSOAS
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-gray-brand hover:text-primary-teal font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-brand after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/seunumerowhatsapp" 
            className="bg-primary-teal text-white px-7 py-2.5 rounded-lg font-semibold hover:bg-dark-teal transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Fale com a gente
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
