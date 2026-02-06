
import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-teal text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <span className="font-title text-2xl font-bold text-white">simplifier</span>
              <div className="w-2 h-2 bg-orange-brand rounded-full"></div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed">
              Ajudamos pequenos negócios a crescerem com leveza, devolvendo tempo para o que importa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-brand transition-colors" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/seunumerowhatsapp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-brand transition-colors" title="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:contato@simplifier.com.br" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-brand transition-colors" title="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-orange-brand font-bold mb-6 uppercase tracking-widest text-xs">Produtos</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#produtos" className="hover:text-white transition-colors">Casar Inteligente</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Para Pessoas</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Para Empresas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-orange-brand font-bold mb-6 uppercase tracking-widest text-xs">Institucional</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Simplifier</a></li>
              <li><a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-orange-brand font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-white/40 text-xs">
          <p>© 2026 Simplifier Tecnologia. Todos os direitos reservados. Crescer com leveza é possível.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
