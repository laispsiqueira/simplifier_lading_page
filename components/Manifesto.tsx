
import React from 'react';
import { AudienceType } from '../constants';

interface ManifestoProps {
  audience: AudienceType;
}

const Manifesto: React.FC<ManifestoProps> = ({ audience }) => {
  return (
    <section id="manifesto" className="py-24 bg-slate-50 border-t border-light-teal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl font-bold text-dark-teal">Manifesto da Simplifier</h2>
        </div>
        
        <div className="space-y-8 text-xl text-gray-brand leading-relaxed md:text-left text-center">
          <p className="font-medium text-dark-teal text-2xl">
            A Simplifier existe porque vida e trabalho ficaram complexos demais.
          </p>
          
          <p className="font-light italic text-gray-brand/90">
            Empresas sobrecarregadas. Pessoas cansadas. Decisões acumulando na cabeça. Tudo urgente e nada no lugar.
          </p>

          <p>
            Acreditamos que isso não é normal — e não precisa ser permanente.
          </p>

          <div className="my-10 p-8 bg-white border-l-4 border-orange-brand rounded-r-2xl shadow-sm">
            <span className="font-semibold text-dark-teal">Nosso trabalho é simples no enunciado: </span>
            <span className="font-bold text-primary-teal text-xl block mt-2 md:inline md:mt-0">
              transformar confusão em clareza. Estrutura em resultado. Complexidade em algo que cabe na sua rotina.
            </span>
          </div>

          <p>
            Para empresas, isso significa processos e decisões funcionando sem depender de uma só pessoa.
          </p>

          <p>
            Não prometemos milagres. Prometemos tecnologia que respeita a realidade — estrutura que sustenta em vez de cobrar.
          </p>
          
          <div className="pt-10 border-t border-light-teal text-center space-y-4">
             <p className="text-2xl md:text-3xl font-title text-dark-teal font-extrabold">
               A Simplifier existe para simplificar o que pesa.
             </p>
             <p className="text-lg md:text-xl text-orange-brand font-medium">
               Porque quando sobra clareza, sobra espaço. E quando sobra espaço, fica mais fácil viver.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
