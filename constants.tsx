
import React from 'react';
import { Check, X, ArrowRight, Shield, Lightbulb, UserCheck, Eye, Heart, Clock, Brain, TrendingUp, BarChart3, Users, Zap, Search, Layout } from 'lucide-react';

export const COLORS = {
  primary: '#157D9A',
  dark: '#0d5164',
  light: '#f0f8fa',
  orange: '#ED8932',
  brown: '#402005',
  gray: '#4a5568',
};

export const AUDIENCE_TYPES = {
  COMPANIES: 'empresas',
  INDIVIDUALS: 'pessoas'
} as const;

export type AudienceType = typeof AUDIENCE_TYPES[keyof typeof AUDIENCE_TYPES];

export const NAV_LINKS = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const CONTENT = {
  [AUDIENCE_TYPES.COMPANIES]: {
    manifesto: {
      title: "Inteligência operacional para empresas que querem crescer",
      text: [
        "Seu negócio cresceu. A equipe aumentou. Mas os processos que funcionavam quando eram três pessoas agora travam tudo. Reuniões consomem o dia, informações se perdem, e ninguém sabe exatamente quem tá fazendo o quê.",
        "A gente conhece essa realidade porque trabalha com isso. Empresas que cresceram rápido demais, mas a estrutura operacional não acompanhou. Times trabalhando em silos, processos na cabeça de uma pessoa só, decisões tomadas no improviso.",
        "Aqui está o problema: crescer não significa apenas vender mais. Significa criar sistemas que sustentam o crescimento. Documentação que funciona. Processos que podem ser replicados. Dados confiáveis para decidir melhor.",
        "E poucos negócios têm isso estruturado."
      ],
      highlight: "A Simplifier existe para trazer inteligência operacional. Não vendemos software genérico nem implementamos metodologias prontas. Construímos processos customizados."
    },
    process: {
      title: "Como trabalhamos",
      subtitle: "Implementação estruturada, resultados mensuráveis.",
      steps: [
        { number: "01", title: "Diagnóstico operacional", text: "Mapeamos processos atuais, identificamos gargalos críticos e analisamos onde há desperdício de tempo e recursos." },
        { number: "02", title: "Desenho de solução", text: "Criamos arquitetura de processos customizada. Definimos automações estratégicas que geram ROI real." },
        { number: "03", title: "Implementação gradual", text: "Implantamos por etapas para não travar a operação. Treinamos a equipe com gestão de mudança." },
        { number: "04", title: "Acompanhamento contínuo", text: "Monitoramos resultados e garantimos que a solução se mantenha eficiente conforme a empresa evolui." }
      ]
    },
    targetAudience: {
      title: "A Simplifier é ideal para sua empresa se...",
      items: [
        "Cresceram rápido e a estrutura operacional não acompanhou",
        "Processos críticos ainda dependem de pessoas específicas",
        "Falta visibilidade sobre o que cada área está fazendo",
        "Decisões importantes são tomadas sem dados confiáveis",
        "Retrabalho e falta de alinhamento são frequentes",
        "Querem profissionalizar a operação sem perder agilidade"
      ],
      typicalProfile: "Perfil típico: Empresas com 10-100 colaboradores, crescimento acima de 30% ao ano."
    },
    benefits: [
      { icon: <Layout className="w-5 h-5" />, title: "Processos documentados", description: "Conhecimento deixa de estar na cabeça das pessoas e pode ser replicado." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Visibilidade em tempo real", description: "Dashboards e relatórios que mostram o que realmente importa." },
      { icon: <Zap className="w-5 h-5" />, title: "Redução de retrabalho", description: "Automações inteligentes eliminam tarefas manuais repetitivas." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Crescimento sustentável", description: "Estrutura que suporta 2x, 5x de crescimento sem virar caos." },
      { icon: <Clock className="w-5 h-5" />, title: "ROI em 3-6 meses", description: "Investimento se paga em economia de tempo e redução de erros." }
    ],
    differentiators: [
      { icon: <Layout className="w-6 h-6 text-orange-brand" />, title: "Implementação real", description: "Não fazemos só diagnóstico. Colocamos a mão na massa e implementamos junto." },
      { icon: <Zap className="w-6 h-6 text-orange-brand" />, title: "Tecnologia sob medida", description: "Usamos as melhores ferramentas (Make, Notion, Airtable) integradas para você." },
      { icon: <Users className="w-6 h-6 text-orange-brand" />, title: "Gestão de mudança", description: "Trabalhamos adoção e cultura desde o dia 1, não só tecnologia." },
      { icon: <BarChart3 className="w-6 h-6 text-orange-brand" />, title: "ROI transparente", description: "Definimos métricas claras para você acompanhar o impacto em tempo real." }
    ],
    cta: {
      title: "Estruture sua operação para crescer de verdade",
      button: "Agende uma análise operacional gratuita →",
      secondary: "Conversa de 45 minutos para entender seus gargalos. Sem compromisso."
    }
  },
  [AUDIENCE_TYPES.INDIVIDUALS]: {
    manifesto: {
      title: "Pare de viver dentro do seu negócio",
      text: [
        "Você acorda cedo. Atende clientes o dia inteiro. Responde mensagens até tarde. No fim do dia, olha pra trás e percebe: fez muito, mas não avançou nada.",
        "A gente conhece essa sensação porque viu de perto. Dezenas de donos de negócio trabalhando dobrado em tarefas que poderiam ser simples. Pessoas exaustas tentando lembrar do que foi combinado ontem.",
        "Aqui está o problema: ninguém te ensinou a organizar um negócio. Te ensinaram a fazer o serviço — cortar cabelo, cuidar de dentes, dar consultoria. Mas não te ensinaram a criar processos.",
        "E você não precisa aprender tudo isso sozinho."
      ],
      highlight: "A Simplifier existe para trazer clareza pro seu dia a dia. A gente senta com você, entende sua realidade, mapeia o que tá travando e constrói processos."
    },
    process: {
      title: "Nosso jeito de trabalhar",
      subtitle: "Sem fórmulas prontas. Cada negócio tem sua história.",
      steps: [
        { number: "01", title: "A gente escuta de verdade", text: "Conversamos sobre seu dia a dia: o que funciona e o que te deixa louco. Não é um questionário frio." },
        { number: "02", title: "Mapeamos juntos", text: "Você conhece seu negócio melhor que ninguém. Identificamos tarefas que podem ser automatizadas." },
        { number: "03", title: "Construímos com você", text: "Criamos automações personalizadas e processos claros. Tudo pensado pro seu negócio, do seu jeito." },
        { number: "04", title: "Você respira", text: "O caos vira organização. As tarefas param de depender só de você e o negócio começa a rodar sozinho." }
      ]
    },
    targetAudience: {
      title: "A Simplifier é pra você se...",
      items: [
        "Você trabalha com serviços (estética, odontologia, consultoria, etc)",
        "Sente que trabalha muito mas o negócio não cresce proporcionalmente",
        "Tá cansado de fazer tudo sozinho mas não sabe por onde delegar",
        "Tem medo que mudar trave ainda mais as coisas",
        "Quer ter controle do negócio sem viver preso nele 12 horas por dia",
        "Já tentou ferramentas mas não conseguiu fazer funcionar sozinho"
      ],
      typicalProfile: "Sobre resistência à mudança: Mudar dá medo, mas continuar do jeito que tá também tem um custo."
    },
    benefits: [
      { icon: <Clock className="w-5 h-5" />, title: "Dias mais organizados", description: "Você acorda sabendo o que fazer, sem a sensação de 'por onde começo?'." },
      { icon: <Brain className="w-5 h-5" />, title: "Menos coisa na cabeça", description: "Pare de tentar lembrar de tudo. Tenha um sistema que lembra por você." },
      { icon: <Eye className="w-5 h-5" />, title: "Decisões mais claras", description: "Com informações organizadas, você vê onde precisa ajustar." },
      { icon: <Heart className="w-5 h-5" />, title: "Tempo pra você", description: "O negócio funciona sem depender 100% de você estar ali. Tire folga sem paranoia." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Crescer sem pirar", description: "Atender mais clientes não significa trabalhar o dobro." }
    ],
    differentiators: [
      { icon: <UserCheck className="w-6 h-6 text-orange-brand" />, title: "A gente entende você", description: "Não vamos empurrar solução corporativa complexa. Entendemos o autônomo." },
      { icon: <Heart className="w-6 h-6 text-orange-brand" />, title: "Acompanhamento humano", description: "Não é curso gravado. Ficamos do seu lado, tiramos dúvidas e ajustamos quando precisa." },
      { icon: <Clock className="w-6 h-6 text-orange-brand" />, title: "Solução sob medida", description: "Trabalhamos dentro do que faz sentido pra sua realidade financeira." },
      { icon: <Zap className="w-6 h-6 text-orange-brand" />, title: "Funciona no dia a dia", description: "Testamos tudo na sua rotina real, com WhatsApp tocando e imprevistos." }
    ],
    cta: {
      title: "Você não precisa fazer tudo sozinho",
      button: "Fale com a gente no WhatsApp →",
      secondary: "Sem compromisso. Sem venda forçada. Só uma conversa pra ver se faz sentido."
    }
  }
};

export const EXCLUSION_CRITERIA = [
  "Espera resultados instantâneos sem esforço algum",
  "Quer só comprar uma ferramenta e nunca mais falar com ninguém",
  "Não acredita que processos e organização podem funcionar pra você",
  "Não tá disposto a mudar nenhum hábito",
  "Não quer investir tempo pra construir algo real e duradouro",
  "Acha que tecnologia resolve tudo sozinha",
  "Quer uma solução milagrosa que funcione no piloto automático"
];

export const PRINCIPLES = [
  {
    icon: <Shield className="text-orange-brand" />,
    title: "Simplicidade com inteligência",
    description: "Reduzimos a complexidade sem empobrecer o processo. Simples de usar, inteligente por dentro."
  },
  {
    icon: <Lightbulb className="text-orange-brand" />,
    title: "Empatia operacional",
    description: "Cada solução respeita o contexto, o ritmo e a realidade de quem usa."
  },
  {
    icon: <UserCheck className="text-orange-brand" />,
    title: "Curadoria especializada",
    description: "Automação com critério. Tecnologia com verificação humana onde importa."
  },
  {
    icon: <TrendingUp className="text-orange-brand" />,
    title: "Transparência total",
    description: "Sem surpresas. Sem letras miúdas. O que você vê é o que você tem."
  }
];
