import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Process from './components/Process'; 
import DeliverySection from './components/DeliverySection';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';
import EcommercePage from './components/EcommercePage';
import ManifestoPage from './components/ManifestoPage';
import AutomationPage from './components/AutomationPage';
import { CONTENT, AUDIENCE_TYPES, AudienceType } from './constants';

const App: React.FC = () => {
  // 1. Default to Companies as requested
  const [audience, setAudience] = useState<AudienceType>(AUDIENCE_TYPES.COMPANIES);
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === '/ecommerce') return '/ecommerce';
    if (path === '/automation') return '/automation';
    if (path === '/manifesto') return '/manifesto';
    return '/';
  });

  const activeContent = CONTENT[audience];

  // Sync state router on browser history navigate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/ecommerce') {
        setCurrentPath('/ecommerce');
      } else if (path === '/automation') {
        setCurrentPath('/automation');
      } else if (path === '/manifesto') {
        setCurrentPath('/manifesto');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Set up custom link click interception for path transitions (SPA Router)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorNode = target.closest('a');
      
      if (anchorNode) {
        const href = anchorNode.getAttribute('href');
        if (href) {
          if (href === '/ecommerce' || href === '/automation' || href === '/manifesto' || href === '/' || href.startsWith('/#') || href.startsWith('/manifesto#')) {
            e.preventDefault();
            
            if (href === '/ecommerce') {
              onNavigate('/ecommerce');
            } else if (href === '/automation') {
              onNavigate('/automation');
            } else if (href === '/manifesto') {
              onNavigate('/manifesto');
            } else if (href === '/') {
              onNavigate('/');
            } else if (href.startsWith('/#')) {
              onNavigate('/');
              setTimeout(() => {
                const element = document.getElementById(href.substring(2));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 120);
            } else if (href.startsWith('/manifesto#')) {
              onNavigate('/manifesto');
              setTimeout(() => {
                const element = document.getElementById(href.substring(11));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 120);
            }
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const onNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Universal Sticky Navbar */}
      <Navbar 
        audience={audience} 
        setAudience={setAudience} 
        currentPath={currentPath}
        onNavigate={onNavigate}
      />

      {/* Conditionally render content */}
      {currentPath === '/ecommerce' ? (
        <main className="flex-grow">
          <EcommercePage onBackToHome={() => onNavigate('/')} />
        </main>
      ) : currentPath === '/automation' ? (
        <main className="flex-grow">
          <AutomationPage onBackToHome={() => onNavigate('/')} />
        </main>
      ) : currentPath === '/manifesto' ? (
        <main className="flex-grow">
          <ManifestoPage audience={audience} setAudience={setAudience} />
        </main>
      ) : (
        <>
          <Hero audience={audience} />

          <main className="flex-grow">
            {/* Seção 2: Solução / Atuação */}
            <Process audience={audience} />

            {/* Seção 3: Entregáveis / Ecossistema (ID: #produtos) */}
            <DeliverySection audience={audience} />

            {/* Seção 1: O Problema */}
            <ProblemSection audience={audience} />

            {/* Seção 4: Para quem é + Resultados */}
            <ResultsSection audience={audience} />

            {/* Final CTA */}
            <section className="py-24 bg-dark-teal relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-teal/20 blur-[100px] rounded-full"></div>
              <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
                <h2 className="font-title text-4xl md:text-5xl font-bold text-white mb-6">
                  {activeContent.ctaFinal.title}
                </h2>
                <a 
                  href={activeContent.ctaFinal.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#157D9A] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#0d5164] transition-all group shadow-md hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto"
                >
                  Quero que meu negócio funcione sem mim
                  <span className="w-10 h-[2px] bg-white/70 block transition-transform group-hover:translate-x-1.5 duration-200 shrink-0"></span>
                  <span className="-ml-1 text-white">→</span>
                </a>
              </div>
            </section>
          </main>
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
