import React, { useState } from 'react';
import { 
  ShoppingBag, 
  ArrowRight, 
  Check, 
  X, 
  MessageCircle, 
  ArrowLeft, 
  Globe, 
  Cpu, 
  Layers, 
  MousePointer, 
  CreditCard, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle 
} from 'lucide-react';

interface EcommercePageProps {
  onBackToHome: () => void;
}

const EcommercePage: React.FC<EcommercePageProps> = ({ onBackToHome }) => {
  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const WHATSAPP_LINK = "https://w.app/simplifier-site";
  const WHATSAPP_DUVIDA_LINK = "https://w.app/simplifier-site";

  const inclusions = [
    {
      title: "Escolha e configuração da plataforma",
      description: "Analisamos seu negócio e indicamos se Shopify ou Nuvemshop faz mais sentido. Depois configuramos tudo do zero.",
      icon: <Layers className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Identidade visual aplicada",
      description: "Sua loja com a cara da sua marca — cores, tipografia e banners alinhados com quem você é.",
      icon: <Cpu className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Cadastro de produtos",
      description: "Fotos, descrições, variações e estoque organizados e prontos para vender.",
      icon: <ShoppingBag className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Integração de pagamentos e frete",
      description: "Cartão, Pix, boleto e os principais meios de entrega configurados e testados antes da entrega.",
      icon: <CreditCard className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Configuração para venda internacional",
      description: "Moeda, idioma e meios de pagamento globais para quem quer vender além do Brasil.",
      icon: <Globe className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Testes e entrega final",
      description: "Testamos toda a jornada de compra antes de entregar. Do clique no produto até a confirmação do pedido.",
      icon: <MousePointer className="w-5 h-5 text-primary-teal" />
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Conversa inicial",
      description: "Entendemos o seu negócio, seus produtos, seu público e onde você quer chegar. Sem formulário genérico — uma conversa real."
    },
    {
      num: "02",
      title: "Proposta e alinhamento",
      description: "Apresentamos o escopo do projeto, prazo e investimento. Só avançamos quando os dois lados estiverem alinhados."
    },
    {
      num: "03",
      title: "Construção",
      description: "Desenvolvemos a loja com você acompanhando. Feedbacks acontecem em ciclos curtos para chegar no resultado certo."
    },
    {
      num: "04",
      title: "Entrega e ativação",
      description: "Os fluxos entram em operação real, documentados e com você entendendo o que foi construído. Você sai com uma loja que vende — não com uma loja que existe."
    }
  ];

  const faqs = [
    {
      q: "Preciso ter muitos produtos para começar?",
      a: "Não. Você pode lançar com poucos e ir expandindo. O que importa é que a estrutura esteja certa desde o início."
    },
    {
      q: "Quanto tempo leva para ficar pronto?",
      a: "Na média, entre 2 e 4 semanas — dependendo do escopo e da sua disponibilidade para feedbacks."
    },
    {
      q: "Vou conseguir gerenciar a loja depois?",
      a: "Sim. Shopify e Nuvemshop foram criadas para que qualquer pessoa consiga atualizar produtos e acompanhar pedidos sem ajuda técnica. E entregamos um treinamento junto com a loja."
    },
    {
      q: "E se algo parar de funcionar depois da entrega?",
      a: "As plataformas têm suporte 24 horas disponível direto com elas. Além disso, deixamos tudo documentado para que você saiba o que fazer em cada situação."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 text-gray-brand selection:bg-orange-brand/20">
      
      {/* Dynamic Navigation indicator */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-primary-teal hover:text-dark-teal font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Voltar para Home
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-light-teal via-white to-white relative overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-teal/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-orange-brand/10 border border-orange-brand/20 rounded-full text-orange-brand font-bold text-xs tracking-widest uppercase shadow-sm">
            E-COMMERCE DE ALTA PERFORMANCE
          </div>
          
          <h1 className="font-title text-5xl md:text-7xl lg:text-[76px] leading-[1.08] text-dark-teal font-extrabold tracking-tight max-w-4xl mx-auto">
            <span className="block mb-2 text-dark-teal">Sua loja online pronta</span>
            <span className="block mb-2 text-dark-teal">para vender.</span>
            <span className="block mb-2 text-dark-teal">No Brasil. No mundo.</span>
            <span className="text-[#ED8932] font-black tracking-tight drop-shadow-sm block mt-4 font-title italic">
              Do jeito certo.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-brand/80 max-w-2xl mx-auto font-light font-sans leading-relaxed">
            Criamos e-commerces em Shopify e Nuvemshop para quem quer entrar no digital com estrutura — e sair vendendo de verdade.
          </p>
          
          <div className="pt-6 flex justify-center items-center">
            <a 
              href={WHATSAPP_DUVIDA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-primary-teal/30 text-primary-teal px-10 py-5 rounded-xl font-bold text-base hover:bg-light-teal/55 transition-all hover:scale-[1.02]"
            >
              Ainda tenho dúvidas — quero conversar antes
            </a>
          </div>

          <div className="pt-12 flex justify-center items-center gap-10 md:gap-16 opacity-90">
            <div className="text-center">
              <span className="block text-4xl font-extrabold text-[#50B83C]">Shopify</span>
              <span className="text-xs text-gray-brand/70 uppercase tracking-widest font-extrabold">Parceiro Global</span>
            </div>
            <div className="h-10 w-px bg-gray-brand/30"></div>
            <div className="text-center">
              <span className="block text-4xl font-extrabold text-[#0066FF]">Nuvemshop</span>
              <span className="text-xs text-gray-brand/70 uppercase tracking-widest font-extrabold">Líder LatAm</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1 — A DOR */}
      <section className="py-24 bg-slate-50 border-y border-light-teal">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-sm font-bold text-orange-brand uppercase tracking-wider block">Obstáculos Reais</span>
              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-dark-teal leading-tight">
                Vender online parece simples. Até você tentar fazer sozinho.
              </h2>
              <div className="w-16 h-1 bg-orange-brand rounded-full"></div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-gray-brand md:text-lg leading-relaxed">
              <p className="italic text-slate-500 font-medium">
                Plataforma para escolher. Layout para configurar. Pagamentos para integrar. Frete para calcular. Produto para cadastrar.
              </p>
              <p>
                A maioria das lojas que falham não falham por falta de produto bom. Falham porque foram construídas sem estrutura — plataforma errada, experiência ruim de compra, ninguém para ajudar quando algo para.
              </p>
              <div className="p-5 bg-white border border-light-teal rounded-2xl shadow-sm font-semibold text-dark-teal">
                Você não precisa aprender tudo isso. <span className="text-[#157D9A]">Precisa de alguém que já sabe.</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — O QUE FAZEMOS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-sm font-extrabold tracking-widest text-primary-teal uppercase block">Solução Ponta a Ponta</span>
            <h2 className="font-title text-4xl font-extrabold text-dark-teal">O que está incluído no projeto</h2>
            <p className="text-xl text-gray-brand font-light max-w-2xl mx-auto">
              Do zero até a loja pronta para receber o primeiro pedido.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((inc, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-light-teal hover:border-orange-brand/30 hover:shadow-lg transition-all space-y-4 group">
                <div className="w-10 h-10 rounded-xl bg-light-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                  {inc.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-teal leading-snug">{inc.title}</h3>
                <p className="text-sm text-gray-brand/90 leading-relaxed font-light">{inc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — POR QUE SHOPIFY E NUVEMSHOP */}
      <section className="py-24 bg-light-teal/40 border-t border-light-teal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-bold text-orange-brand uppercase tracking-wider block">Ferramentas de alto nível</span>
              <h2 className="font-title text-3xl font-extrabold text-dark-teal leading-tight">
                Não usamos qualquer plataforma. Escolhemos as que não travam quando você mais precisa.
              </h2>
              <p className="text-sm text-gray-brand/80 leading-relaxed">
                Existem dezenas de plataformas no mercado. A maioria funciona — até o dia em que você precisa crescer ou passar por uma Black Friday.
              </p>
              <p className="text-sm font-semibold text-primary-teal">
                Escolhemos Shopify e Nuvemshop porque não queremos que você troque de plataforma daqui a um ano.
              </p>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              
              {/* Shopify detail card */}
              <div className="bg-white p-8 rounded-3xl border border-light-teal shadow-sm space-y-6 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-xl rounded-full"></div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-[#50B83C]">Shopify</span>
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-[#50B83C]">✓</div>
                </div>
                <h3 className="text-xl font-bold text-dark-teal">Padrão Global</h3>
                <p className="text-sm text-gray-brand leading-relaxed font-light">
                  A plataforma mais usada no mundo. Ideal para quem quer vender no Brasil e no exterior, com suporte em múltiplos idiomas e moedas.
                </p>
                <ul className="space-y-2.5 pt-4 text-xs font-medium text-gray-brand">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#50B83C]" /> Vendas multi-moedas</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#50B83C]" /> Tradução integrada</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#50B83C]" /> Segurança internacional máxima</li>
                </ul>
              </div>

              {/* Nuvemshop detail card */}
              <div className="bg-white p-8 rounded-3xl border border-light-teal shadow-sm space-y-6 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-xl rounded-full"></div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-[#0066FF]">Nuvemshop</span>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-[#0066FF]">✓</div>
                </div>
                <h3 className="text-xl font-bold text-dark-teal">Liderança na AL</h3>
                <p className="text-sm text-gray-brand leading-relaxed font-light">
                  A maior plataforma da América Latina. Ideal para quem foca no mercado brasileiro, com integrações nativas com os principais marketplaces e meios de pagamento locais.
                </p>
                <ul className="space-y-2.5 pt-4 text-xs font-medium text-gray-brand">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0066FF]" /> Integração total com Correios/Transportadoras</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0066FF]" /> Gateway local descomplicado</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0066FF]" /> Custos muito competitivos no BR</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — PARA QUEM É (EMPREENDEDOR TRANSPARENTE) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-extrabold tracking-widest text-[#ED8932] uppercase block">Seja honesto com você mesmo</span>
            <h2 className="font-title text-4xl font-extrabold text-dark-teal">Este projeto faz sentido para você?</h2>
            <p className="text-gray-brand font-light">Transparência completa para otimizar o tempo de ambos os lados.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* É para você card */}
            <div className="bg-green-50/50 p-8 rounded-3xl border border-green-200/50 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-green-700 font-bold text-xs uppercase">
                É para você se...
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-gray-brand items-start">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span>Sua operação só existe no físico ou offline e você quer começar no digital sem erros.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-brand items-start">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span>Sua loja atual vive travando, tem design ultrapassado ou simplesmente não gera vendas.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-brand items-start">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span>Seus planos de vender para fora esbarram no medo de moedas, taxas e envio internacional.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-brand items-start">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <span>Sua tentativa de montar a loja sozinho tomou muito tempo e gerou mais frustração do que resultado.</span>
                </li>
              </ul>
            </div>

            {/* Não é para você card */}
            <div className="bg-orange-50/20 p-8 rounded-3xl border border-orange-200/20 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/60 rounded-full text-orange-800 font-bold text-xs uppercase">
                Não é para você se...
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-gray-brand items-start">
                  <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</div>
                  <span>Sua expectativa é ter uma loja genérica no ar em 24 horas aberta de qualquer jeito.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-brand items-start">
                  <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</div>
                  <span>Seus produtos ainda não estão definidos e você não sabe por quanto vai vendê-los.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-brand items-start">
                  <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</div>
                  <span>Seu foco é exclusivamente encontrar o serviço mais barato do mercado, sem priorizar a estrutura.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-brand/60 italic">
              * Ser direto sobre isso poupa o tempo dos dois lados.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — COMO FUNCIONA (Etapas do Projeto) */}
      <section className="py-24 bg-slate-50 border-t border-b border-light-teal">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-extrabold tracking-widest text-[#ED8932] uppercase block">Metodologia Simplifier</span>
            <h2 className="font-title text-4xl font-extrabold text-dark-teal">Do primeiro contato à loja no ar</h2>
            <div className="w-16 h-1 bg-[#ED8932] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-light-teal shadow-sm space-y-4 relative">
                <span className="text-4xl font-black text-light-teal block group-hover:text-primary-teal transition-colors">
                  {st.num}
                </span>
                <h3 className="text-lg font-bold text-dark-teal">{st.title}</h3>
                <p className="text-xs leading-relaxed text-gray-brand/95 font-light">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — OBJEÇÕES / FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <HelpCircle className="w-8 h-8 text-[#ED8932] mx-auto opacity-75" />
            <h2 className="font-title text-3xl md:text-4xl font-extrabold text-dark-teal">
              Perguntas que todo mundo faz antes de contratar
            </h2>
            <p className="text-gray-brand font-light">Sua clareza e transparência são nossas prioridades fundamentais.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-light-teal rounded-2xl overflow-hidden shadow-sm transition-all bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-light-teal/20 transition-all font-bold text-dark-teal text-lg"
                  >
                    <span>{faq.q}</span>
                    <span className="text-primary-teal shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100 border-t border-light-teal/50' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 bg-slate-50 text-gray-brand leading-relaxed font-light text-base">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — CTA FINAL */}
      <section className="py-24 bg-dark-teal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-teal/20 blur-[100px] rounded-full"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-white leading-tight">
            Seu cliente está online agora. A sua loja deveria estar também.
          </h2>
          
          <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
            Cada dia sem uma loja estruturada é um dia vendendo abaixo do seu potencial. Não porque você não se esforça — mas porque a estrutura ainda não está no lugar.
          </p>
          
          <p className="text-xl font-bold text-orange-brand">
            A gente resolve isso.
          </p>
          
          <div className="flex justify-center items-center pt-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-dark-teal px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all group shadow-md hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto"
            >
              Quero minha loja online
              <span className="w-10 h-[2px] bg-dark-teal/50 block transition-transform group-hover:translate-x-1.5 duration-200 shrink-0"></span>
              <span className="-ml-1 text-dark-teal">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EcommercePage;
