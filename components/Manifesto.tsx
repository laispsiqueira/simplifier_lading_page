
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
          <h2 className="font-title text-4xl font-bold text-dark-teal mb-4">Manifesto da Simplifier</h2>
          <p className="text-lg text-gray-brand">Por que fazemos o que fazemos.</p>
        </div>
        
        <div className="space-y-8 text-lg text-gray-brand leading-relaxed text-justify md:text-left">
          <p>
            A Simplifier existe porque <span className="font-bold">a vida e o trabalho ficaram complexos demais.</span>
          </p>
          
          <ul className="list-disc pl-6 space-y-2 marker:text-orange-brand">
            <li>Empresas sobrecarregadas.</li>
            <li>Pessoas cansadas.</li>
            <li>Decisões acumuladas na cabeça.</li>
            <li>Tudo urgente e tudo ao mesmo tempo.</li>
          </ul>

          <p>
            Acreditamos que isso não é normal e não precisa ser permanente.
          </p>

          <p>
            Nosso trabalho é simples de explicar: <span className="font-bold text-dark-teal">tirar o peso do que está confuso e transformar em algo claro, funcional e sustentável a longo prazo.</span>
          </p>

          {audience === 'empresas' && (
            <div className="bg-white p-8 rounded-2xl border border-light-teal shadow-sm my-8">
              <p className="font-medium text-primary-teal text-xl mb-2">Para empresas</p>
              <p>
                Isso significa organizar processos, decisões e rotinas para que o negócio funcione sem sugar quem está por trás dele.
              </p>
            </div>
          )}

          {audience === 'pessoas' && (
            <div className="bg-white p-8 rounded-2xl border border-light-teal shadow-sm my-8">
              <p className="font-medium text-primary-teal text-xl mb-2">Para pessoas</p>
              <p>
                Significa aliviar a mente, organizar a vida fora da cabeça e devolver espaço para viver com mais presença.
              </p>
            </div>
          )}

          <p>
            Sem prometemos atalhos ou soluções mágicas, não queremos tecnologias para complicar.
          </p>
          <p>
            Criamos sistemas que respeitam a realidade. Produtos que ajudam de verdade. Estruturas que sustentam em vez de cobrar.
          </p>
          <p>
            Entendemos que cada cliente que escolhe a Simplifier está confiando algo importante: seu tempo, suas decisões, sua rotina, seu negócio, sua vida.
          </p>
          <p>
            E isso é importante para nós assim como é para você. Dividimos a responsabilidade e atenção em cada detalhe.
          </p>
          
          <div className="pt-8 text-center">
             <p className="text-2xl font-title text-dark-teal font-bold">
               A Simplifier existe para simplificar o que pesa.
             </p>
             <p className="text-xl text-gray-brand mt-4">
               Porque quando sobra clareza, sobra espaço.<br/>
               E quando sobra espaço, fica mais fácil viver.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
