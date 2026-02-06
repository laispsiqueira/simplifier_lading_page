
import React from 'react';
import { CONTENT, AudienceType } from '../constants';
import { Check } from 'lucide-react';

interface DeliverySectionProps {
  audience: AudienceType;
}

const DeliverySection: React.FC<DeliverySectionProps> = ({ audience }) => {
  const data = CONTENT[audience].deliverables;

  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-title text-4xl font-bold text-primary-teal mb-16 text-left">{data.title}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border transition-all ${
                item.highlight 
                ? 'bg-brown-brand text-white border-brown-brand shadow-xl scale-105' 
                : 'bg-white border-light-teal hover:border-orange-brand/50 hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                item.highlight ? 'bg-white/10 text-orange-brand' : 'bg-light-teal text-primary-teal'
              }`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${item.highlight ? 'text-white' : 'text-dark-teal'}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${item.highlight ? 'text-white/80' : 'text-gray-brand'}`}>
                {item.description}
              </p>
              {item.highlight && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a href="#" className="flex items-center gap-2 text-orange-brand font-bold text-sm hover:text-white transition-colors">
                    Saiba mais <Check className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
