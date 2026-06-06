import React, { useState, useEffect } from 'react';
import { NAV_LINKS, AudienceType, AUDIENCE_TYPES } from '../constants';
import { Menu, X, MessageCircle, Heart, Users, ChevronDown, ShoppingBag, Workflow, Database } from 'lucide-react';

interface NavbarProps {
  audience: AudienceType;
  setAudience: (type: AudienceType) => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ audience, setAudience, currentPath, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudienceChange = (type: AudienceType) => {
    setAudience(type);
    if (currentPath !== '/') {
      onNavigate('/');
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
  };

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#manifesto' || href === '#sobre') {
      if (currentPath !== '/manifesto') {
        onNavigate('/manifesto');
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
              <span className="font-title text-2xl font-bold text-primary-teal">simplifier</span>
              <div className="w-2.5 h-2.5 bg-orange-brand rounded-full transition-transform group-hover:scale-125"></div>
            </a>

            {/* Audience Toggle (Desktop) - Para Pessoas Temporarily Removed */}
            <div className="hidden lg:flex bg-slate-100 p-1 rounded-full items-center">
              <button 
                onClick={() => handleAudienceChange(AUDIENCE_TYPES.COMPANIES)}
                className="px-4 py-1.5 rounded-full text-xs font-bold bg-white text-primary-teal shadow-sm"
              >
                PARA EMPRESAS
              </button>
            </div>
          </div>
          
          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                if (link.label === 'Produtos') {
                  const isActive = currentPath === '/ecommerce';
                  return (
                    <li 
                      key={link.href}
                      className="relative py-2 group"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button 
                        onClick={(e) => handleNavLinkClick(e, link.href)}
                        className={`flex items-center gap-1 text-gray-brand hover:text-primary-teal font-medium transition-colors cursor-pointer ${
                          isActive ? 'text-primary-teal font-semibold' : ''
                        }`}
                      >
                        Produtos
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-light-teal rounded-2xl shadow-xl py-3 transform transition-all duration-200 origin-top z-50 ${
                        dropdownOpen 
                        ? 'opacity-100 scale-100 translate-y-0 visible' 
                        : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                      }`}>
                        <div className="px-4 py-1.5 border-b border-light-teal/50 mb-1">
                          <span className="text-[10px] tracking-wider uppercase font-extrabold text-[#ED8932]">Nossas Soluções</span>
                        </div>
                        
                        <a 
                          href="/ecommerce"
                          onClick={(e) => {
                            e.preventDefault();
                            setDropdownOpen(false);
                            onNavigate('/ecommerce');
                          }}
                          className={`flex items-start gap-3 px-4 py-2.5 hover:bg-light-teal/30 transition-colors group ${
                            currentPath === '/ecommerce' ? 'bg-[#f0f8fa]' : ''
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-orange-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                            <ShoppingBag className="w-4 h-4 text-orange-brand" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-dark-teal group-hover:text-primary-teal">
                              E-commerce ✨
                            </span>
                            <span className="block text-[11px] text-gray-brand/80 leading-snug">
                              Shopify & Nuvemshop prontas para vender
                            </span>
                          </div>
                        </a>
                        
                        <a 
                          href="#produtos"
                          onClick={(e) => {
                            handleNavLinkClick(e, '#produtos');
                            setDropdownOpen(false);
                          }}
                          className="flex items-start gap-3 px-4 py-2.5 hover:bg-light-teal/30 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Workflow className="w-4 h-4 text-primary-teal" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-dark-teal group-hover:text-primary-teal">
                              Automação de processos
                            </span>
                            <span className="block text-[11px] text-gray-brand/80 leading-snug">
                              O que depende de você, amanhã roda só
                            </span>
                          </div>
                        </a>

                        <a 
                          href="#produtos"
                          onClick={(e) => {
                            handleNavLinkClick(e, '#produtos');
                            setDropdownOpen(false);
                          }}
                          className="flex items-start gap-3 px-4 py-2.5 hover:bg-light-teal/30 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Database className="w-4 h-4 text-primary-teal" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-dark-teal group-hover:text-primary-teal">
                              Sistemas sob medida
                            </span>
                            <span className="block text-[11px] text-gray-brand/80 leading-snug">
                              Personalizados para o seu negócio
                            </span>
                          </div>
                        </a>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className="text-gray-brand hover:text-primary-teal font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-brand after:transition-all hover:after:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a 
              href="https://w.app/simplifier-site" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#157D9A] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0d5164] transition-all hover:scale-[1.02] hover:shadow-md shrink-0"
            >
              Fale com a gente
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-dark-teal hover:text-primary-teal transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Fullscreen Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-light-teal px-6 py-8 space-y-6 animate-fadeIn">
            
            {/* Nav Links */}
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => {
                if (link.label === 'Produtos') {
                  return (
                    <li key={link.href} className="border-b border-light-teal pb-3">
                      <span className="block text-lg font-bold text-primary-teal mb-2">
                        {link.label}
                      </span>
                      {/* Nested sub-links on mobile for premium UX */}
                      <ul className="pl-4 space-y-2.5 mt-2 border-l border-light-teal/80">
                        <li>
                          <a 
                            href="/ecommerce"
                            onClick={(e) => {
                              e.preventDefault();
                              setMobileMenuOpen(false);
                              onNavigate('/ecommerce');
                            }}
                            className={`flex items-center gap-2 text-base font-semibold ${
                              currentPath === '/ecommerce' ? 'text-orange-brand' : 'text-dark-teal hover:text-orange-brand'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-orange-brand"></span>
                            E-commerce (Shopify & Nuvemshop) ✨
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#produtos"
                            onClick={(e) => handleNavLinkClick(e, '#produtos')}
                            className="flex items-center gap-2 text-base text-gray-brand hover:text-primary-teal"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
                            Automação de processos
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#produtos"
                            onClick={(e) => handleNavLinkClick(e, '#produtos')}
                            className="flex items-center gap-2 text-base text-gray-brand hover:text-primary-teal"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
                            Sistemas sob medida
                          </a>
                        </li>
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={link.href} className="border-b border-light-teal pb-2">
                    <a 
                      href={link.href} 
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className="block text-lg font-medium text-dark-teal hover:text-primary-teal"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4">
              <a 
                href="https://w.app/simplifier-site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-flex justify-center items-center gap-2 bg-[#157D9A] text-white py-4 rounded-xl font-bold text-base hover:bg-[#0d5164] transition-all hover:scale-[1.01] shadow"
              >
                <MessageCircle className="w-5 h-5" /> Fale com a gente
              </a>
            </div>

          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
