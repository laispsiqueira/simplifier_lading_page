import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Cpu, 
  Workflow, 
  Database, 
  HelpCircle, 
  ChevronDown, 
  Check, 
  X, 
  ArrowRight,
  Sparkles,
  ClipboardList,
  Compass,
  FileSpreadsheet,
  Network,
  Activity,
  FileCheck,
  Zap,
  Users,
  Target
} from 'lucide-react';

const WHATSAPP_LINK = "https://w.app/simplifier-site";

interface AutomationPageProps {
  onBackToHome?: () => void;
}

const AutomationPage: React.FC<AutomationPageProps> = ({ onBackToHome }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const inclusions = [
    {
      title: "Diagnóstico da operação",
      description: "Antes de automatizar qualquer coisa, mapeamos como sua operação funciona hoje. Onde está o gargalo, quem depende de quem e o que mais consome tempo sem gerar resultado proporcional.",
      icon: <SearchIcon className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Mapeamento dos fluxos",
      description: "Documentamos cada processo que será automatizado. Entradas, saídas, exceções e integrações com os sistemas que você já usa. Nada é construído sem estar mapeado antes.",
      icon: <ClipboardList className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Construção das automações",
      description: "Desenvolvemos os fluxos com ferramentas profissionais, testados em ambiente real antes de entrar em produção. A automação respeita como o seu negócio funciona e não o contrário.",
      icon: <Cpu className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Integração com seus sistemas",
      description: "Conectamos o que precisa ser conectado. Planilhas, CRM, plataformas de pagamento, ferramentas de comunicação interna. A informação passa a fluir sem ninguém precisar movê-la na mão.",
      icon: <Network className="w-5 h-5 text-[#ED8932]" />
    },
    {
      title: "Testes e validação",
      description: "Cada automação é testada com cenários reais antes da entrega. Incluindo o que acontece quando algo dá errado, porque vai dar em algum momento.",
      icon: <Activity className="w-5 h-5 text-primary-teal" />
    },
    {
      title: "Entrega com documentação",
      description: "Você recebe os fluxos funcionando e documentados. Para entender o que foi construído, acompanhar o que roda e ter autonomia sobre a sua própria operação.",
      icon: <FileCheck className="w-5 h-5 text-primary-teal" />
    }
  ];

  const automatizedCapabilities = [
    {
      title: "Relatórios e consolidação de dados",
      description: "Relatórios gerados automaticamente no horário certo, com os dados certos, sem ninguém precisar montar na mão. Gestores recebem a informação e não a tarefa de buscar a informação.",
      icon: <FileSpreadsheet className="w-6 h-6 text-[#157D9A]" />
    },
    {
      title: "Tarefas e notificações internas",
      description: "Tarefas criadas automaticamente a partir de gatilhos. Time notificado quando algo precisa de atenção, sem depender de alguém lembrar de avisar.",
      icon: <Zap className="w-6 h-6 text-[#ED8932]" />
    },
    {
      title: "Atualização de sistemas",
      description: "Dados que hoje precisam ser inseridos manualmente em mais de um lugar passam a ser atualizados automaticamente. Uma entrada, todos os sistemas atualizados.",
      icon: <Database className="w-6 h-6 text-[#157D9A]" />
    },
    {
      title: "Onboarding e processos recorrentes",
      description: "Sequências automáticas para novos clientes, novos colaboradores ou qualquer processo que se repete da mesma forma. Feito uma vez. Roda sempre.",
      icon: <Users className="w-6 h-6 text-[#ED8932]" />
    }
  ];

  const methodSteps = [
    {
      num: "01",
      title: "Conversa inicial",
      description: "Entendemos seu negócio, sua operação e onde está o maior desperdício de tempo. Não é um formulário. É uma conversa real sobre como as coisas funcionam hoje e onde elas travam."
    },
    {
      num: "02",
      title: "Proposta e escopo",
      description: "Apresentamos quais fluxos vamos construir, em que ordem, com que integrações e em quanto tempo. Só avançamos com os dois lados alinhados."
    },
    {
      num: "03",
      title: "Construção e testes",
      description: "Desenvolvemos os fluxos, integramos com seus sistemas e testamos tudo antes de colocar em produção. Você acompanha o processo sem precisar entender de tecnologia para isso."
    },
    {
      num: "04",
      title: "Entrega e ativação",
      description: "Os fluxos entram em operação real. Você recebe tudo documentado, entende o que foi construído e sai com a operação rodando. Não com uma promessa de que vai rodar."
    }
  ];

  const faqs = [
    {
      q: "Meu negócio é pequeno demais para precisar de automação?",
      a: "Se alguém do seu time repete a mesma tarefa mais de uma vez por semana, automação já faz sentido. Tamanho não é o critério. Desperdício de tempo é."
    },
    {
      q: "Automatizar vai fazer minha equipe perder função?",
      a: "O oposto. Quando tarefas repetitivas passam a rodar sozinhas, as pessoas da sua equipe param de ser executoras do processo e passam a ser responsáveis por resultados. Quem antes gastava horas montando relatório passa a ter horas para analisar e decidir. Quem antes fazia follow-up manual passa a ter tempo para fechar negócio. Automação não enxuga equipe. Ela muda o que a equipe faz com o tempo que tem."
    },
    {
      q: "Vou precisar trocar os sistemas que já uso?",
      a: "Na maioria dos casos, não. Trabalhamos para integrar o que você já tem. Trocar tudo do zero raramente é necessário e nunca é a primeira opção."
    },
    {
      q: "E se o fluxo parar de funcionar depois da entrega?",
      a: "Entregamos tudo documentado e com você entendendo como funciona. As ferramentas que usamos têm suporte próprio e estabilidade comprovada. A documentação existe exatamente para que você não fique refém de ninguém."
    },
    {
      q: "Preciso entender de tecnologia para acompanhar o projeto?",
      a: "Não. Nossa entrega é feita para que qualquer pessoa entenda o que foi construído e por quê. A conversa é sempre sobre o seu negócio. A tecnologia é detalhe de execução."
    },
    {
      q: "Quanto tempo leva para ficar pronto?",
      a: "Depende da quantidade e complexidade dos fluxos. Automações mais simples ficam prontas em poucos dias. Projetos com múltiplas integrações levam entre 2 e 4 semanas."
    },
    {
      q: "O que acontece se eu quiser adicionar mais automações depois?",
      a: "Como entregamos tudo documentado, expandir é mais simples do que começar do zero. Novos fluxos podem ser adicionados em projetos futuros com base no que já foi construído."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCTASecondary = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById('para-quem-e-automations');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="automations-page" className="bg-slate-50 min-h-screen">
      
      {/* SECTION: HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-[#fafbfc]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-teal/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-brand/5 blur-[100px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <span className="block text-sm font-extrabold text-[#ED8932] tracking-wider uppercase font-mono">
              Operação que trabalha por você
            </span>
          </div>

          <h1 className="font-title text-4xl sm:text-5xl md:text-6xl font-black text-dark-teal leading-[1.1] tracking-tight">
            O que hoje toma o tempo do seu time, <br />
            <span className="italic text-[#ED8932] font-semibold">amanhã roda sozinho.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-brand/80 max-w-2xl mx-auto font-light leading-relaxed">
            Automatizamos os processos da sua empresa para que as pessoas certas parem de executar o que uma máquina faz melhor e comecem a fazer o que só elas sabem fazer.
          </p>

          <div className="pt-4 flex justify-center items-center">
            <a 
              href="#para-quem-e-automations"
              onClick={handleCTASecondary}
              className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-brand/20 text-gray-brand hover:bg-slate-100 hover:text-dark-teal px-10 py-5 rounded-xl font-semibold text-base transition-all hover:scale-[1.02]"
            >
              Quero entender se faz sentido para o meu negócio
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — PROBLEMA */}
      <section className="py-24 bg-white border-t border-b border-light-teal/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-12 mb-4">
              <span className="text-xs font-bold text-[#ED8932] uppercase tracking-wider block mb-2">Obstáculo real</span>
              <h2 className="font-title text-3xl md:text-4xl font-extrabold text-dark-teal">Seu time é bom. Mas passa horas fazendo o que não deveria.</h2>
            </div>

            <div className="lg:col-span-6 space-y-6 text-gray-brand md:text-base leading-relaxed">
              <p>
                Relatório que alguém monta toda semana copiando dado por dado. Planilha que precisa ser atualizada na mão. Tarefa que depende de uma pessoa lembrar de fazer. Informação que fica perdida porque ninguém sabe onde está.
              </p>
              <p className="font-semibold text-dark-teal text-lg">
                Isso não é falta de competência. É falta de estrutura automatizada.
              </p>
              <p>
                Enquanto o seu time gasta energia com tarefas repetitivas, as decisões que realmente importam ficam esperando. O negócio cresce mas a operação não acompanha.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6 text-gray-brand md:text-base leading-relaxed">
              <p>
                Toda empresa tem pelo menos uma pessoa assim. Aquela que sabe o passo a passo de tudo. Que é consultada antes de qualquer decisão. Que quando tira férias, o time trava.
              </p>
              <p className="font-semibold text-[#ED8932] text-lg">
                Isso não é talento. É risco.
              </p>
              <p>
                Um processo que só existe na cabeça de uma pessoa não é um processo. É uma dependência. Quando esse processo é automatizado, duas coisas acontecem ao mesmo tempo: o negócio para de ser refém dessa pessoa e essa pessoa para de ser refém do processo. Ela ganha tempo, energia e espaço para assumir funções que realmente precisam dela.
              </p>
            </div>

            <div className="lg:col-span-12 pt-6">
              <div className="p-6 bg-slate-50 border border-light-teal rounded-2xl shadow-sm text-center">
                <p className="font-bold text-[#157D9A] text-lg">
                  Automação não substitui pessoas-chave. Ela as libera para serem ainda mais estratégicas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — O QUE ESTÁ INCLUÍDO */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold text-[#ED8932] uppercase tracking-wider block">Solução ponto a ponto</span>
            <h2 className="font-title text-4xl font-extrabold text-dark-teal">O que está incluído no projeto</h2>
            <p className="text-lg text-gray-brand/80 max-w-xl mx-auto font-light">Do diagnóstico até os fluxos rodando na sua operação real.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-light-teal/50 shadow-sm hover:shadow-md transition-all group duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#157D9A]/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-title text-lg font-bold text-dark-teal mb-3 group-hover:text-[#157D9A] transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOCO DA ENTREGA */}
      <section className="py-24 bg-white border-t border-b border-light-teal/45">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold text-[#ED8932] uppercase tracking-wider block">Onde geramos mais resultado</span>
              <h2 className="font-title text-3xl font-extrabold text-dark-teal leading-tight">
                Operação interna que para de depender de memória e boa vontade.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-gray-brand leading-relaxed">
              <p>
                Toda empresa tem processos que existem só na cabeça de quem montou. Funcionam enquanto essa pessoa está presente. Param quando ela sai, falta ou cresce de cargo.
              </p>
              <p className="font-medium text-[#157D9A]">
                Nosso foco principal é transformar esses processos em fluxos automatizados. Documentados, replicáveis e independentes de qualquer pessoa específica.
              </p>
            </div>
          </div>

          {/* Destaque Visual */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-light-teal/50 flex flex-col md:flex-row gap-8 items-center shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-[#ED8932]/10 flex items-center justify-center shrink-0">
              <Target className="w-8 h-8 text-[#ED8932]" />
            </div>
            <div className="space-y-4">
              <h3 className="font-title text-xl font-extrabold text-dark-teal">
                Se só uma pessoa sabe fazer, é urgente automatizar.
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Quando um processo depende de uma única pessoa, seja ela um gestor, um analista ou o próprio dono, o negócio está operando com risco invisível. Basta essa pessoa sair, crescer de cargo ou tirar uma semana de férias para tudo travar.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm font-medium italic">
                Automatizar esse processo não é substituir essa pessoa. É liberá-la do peso de ser insubstituível e dar ao negócio a estrutura que ele precisa para crescer sem depender de heróis.
              </p>
            </div>
          </div>

          {/* O que passa a funcionar no automático */}
          <div className="space-y-8 pt-4">
            <h3 className="font-title text-2xl font-bold text-center text-dark-teal">
              O que passa a funcionar no automático
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {automatizedCapabilities.map((cap, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 items-start">
                  <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                    {cap.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-title text-base font-bold text-dark-teal">{cap.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — PARA QUEM É */}
      <section id="para-quem-e-automations" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-extrabold tracking-widest text-[#ED8932] uppercase block">Seja honesto com você mesmo</span>
            <h2 className="font-title text-4xl font-extrabold text-dark-teal">Este projeto faz sentido para você?</h2>
            <p className="text-slate-500 font-light">Transparência completa para otimizar o tempo de ambos os lados.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* É para você se... */}
            <div className="bg-white p-8 rounded-3xl border border-light-teal/50 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-title text-xl font-bold text-primary-teal flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  É para você se...
                </h3>
                <ul className="space-y-4">
                  {[
                    "Seu time repete as mesmas tarefas toda semana e isso consome horas que deveriam ir para outro lugar",
                    "Você tem processos que só funcionam porque uma pessoa específica carrega esse conhecimento na cabeça",
                    "Suas pessoas-chave estão presas em execução quando deveriam estar em estratégia",
                    "Informações importantes ficam perdidas em planilhas, e-mails ou na cabeça de alguém",
                    "Você já percebeu que o negócio cresceu mas a operação não acompanhou",
                    "Você sabe que precisa de automação mas não sabe por onde começar"
                  ].map((phrase, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 items-start">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span>{phrase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Não é para você se... */}
            <div className="bg-white p-8 rounded-3xl border border-[#ED8932]/10 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-title text-xl font-bold text-dark-teal flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-brand"></span>
                  Não é para você se...
                </h3>
                <ul className="space-y-4 border-b border-light-teal/30 pb-6 mb-6">
                  {[
                    "Seus processos ainda não estão minimamente definidos. Automatizar o caos só acelera o caos",
                    "Você busca uma solução genérica pronta, sem adaptação para o seu negócio",
                    "Você quer resultado imediato sem nenhum envolvimento no processo de diagnóstico"
                  ].map((phrase, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 items-start">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✕</div>
                      <span>{phrase}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-400 italic text-center">
                  Ser direto sobre isso poupa o tempo dos dois lados.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — METODOLOGIA */}
      <section className="py-24 bg-white border-t border-b border-light-teal/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-extrabold tracking-widest text-[#ED8932] uppercase block">Metodologia Simplifier</span>
            <h2 className="font-title text-4xl font-extrabold text-dark-teal">Do diagnóstico à operação rodando sozinha</h2>
            <div className="w-16 h-1 bg-[#ED8932] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {methodSteps.map((step, idx) => (
              <div key={idx} className="relative group space-y-4">
                <div className="relative">
                  <div className="text-6xl font-black text-slate-100 transition-colors group-hover:text-primary-teal/10 font-mono">
                    {step.num}
                  </div>
                  <div className="w-8 h-1 bg-primary-teal rounded-full mt-2"></div>
                </div>
                <h3 className="font-title text-lg font-bold text-dark-teal group-hover:text-primary-teal transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold text-[#ED8932] uppercase tracking-wider block">Perguntas que todo mundo faz antes de contratar</span>
            <h2 className="font-title text-4xl font-extrabold text-dark-teal">A gente responde antes de você precisar perguntar.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-light-teal/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-title text-base font-bold text-dark-teal leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary-teal/15 text-primary-teal' : 'text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-sm text-slate-500 leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section className="py-24 bg-dark-teal relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-teal/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-brand/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[#ED8932] border border-white/5 font-extrabold text-xs tracking-widest uppercase">
            É hora de decidir
          </span>

          <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">
            Cada semana sem automação é mais uma semana pagando caro por tarefas automaticas.
          </h2>

          <div className="max-w-2xl mx-auto space-y-4 text-white/80 font-light text-base md:text-lg leading-relaxed">
            <p className="font-semibold text-[#ED8932]">Não porque seu time é ineficiente.</p>
            <p>
              Mas porque as pessoas certas não deveriam passar o dia executando o que uma automação resolve em segundos. Elas deveriam estar pensando, decidindo e construindo o que só elas sabem construir.
            </p>
            <p>
              Enquanto o processo roda sozinho, sua equipe cresce junto com o negócio.
            </p>
            <p className="font-bold text-white text-xl mt-4">
              A gente constrói isso para você.
            </p>
          </div>

          <div className="pt-6">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-dark-teal px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all group shadow-md hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto"
            >
              Prefiro entender melhor antes de decidir
              <span className="w-10 h-[2px] bg-dark-teal/50 block transition-transform group-hover:translate-x-1.5 duration-200 shrink-0"></span>
              <span className="-ml-1 text-dark-teal">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

// Simple standalone SearchIcon to bypass lucide imports
const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export default AutomationPage;
