
import React from 'react';
import { AudienceType } from '../constants';

interface AboutProps {
  audience: AudienceType;
}

const About: React.FC<AboutProps> = ({ audience }) => {
  return (
    <section id="sobre" className="py-24 bg-white border-t border-light-teal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl font-bold text-primary-teal mb-6">Clareza muda tudo</h2>
          <div className="w-20 h-1 bg-orange-brand mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 text-lg text-gray-brand leading-relaxed text-justify md:text-left">
          <p>
            A <span className="font-bold text-dark-teal">Simplifier</span> foi criada a partir da observação de um problema recorrente: empresas funcionando no limite e pessoas vivendo com a mente sobrecarregada o tempo todo.
          </p>
          <p>
            Negócios crescendo no improviso, decisões tomadas sob pressão e rotinas pesadas demais para quem tenta dar conta de tudo. Por outro lado, pessoas cansadas, carregando responsabilidades excessivas e tentando organizar a vida apenas na cabeça.
          </p>
          <p className="font-medium text-dark-teal text-xl">
            A Simplifier nasce para resolver exatamente essa dor.
          </p>
          <p>
            Seu trabalho é transformar confusão em estrutura. Tirar o peso do que está desorganizado e devolver clareza para que decisões deixem de ser um fardo.
          </p>
          
          <div className="my-12">
            {audience === 'empresas' ? (
              <div className="bg-light-teal/30 p-8 rounded-2xl border border-light-teal">
                <h3 className="font-bold text-primary-teal mb-3">Para empresas</h3>
                <p className="text-sm">
                  A Simplifier cria soluções digitais que organizam processos, decisões e rotinas, ajudando o negócio a funcionar de forma previsível, sem depender da sobrecarga constante de quem está por trás dele.
                </p>
              </div>
            ) : (
              <div className="bg-orange-brand/5 p-8 rounded-2xl border border-orange-brand/20">
                <h3 className="font-bold text-orange-brand mb-3">Para pessoas</h3>
                <p className="text-sm">
                  Desenvolve um ecossistema simples, funcional e conectado que organiza a vida fora da cabeça (eventos importantes, finanças, hábitos, cuidados pessoais e decisões do dia a dia).
                </p>
              </div>
            )}
          </div>

          <p>
            A Simplifier acredita que tecnologia só faz sentido quando respeita a realidade de quem usa, reduz esforço mental e cria espaço para viver melhor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
