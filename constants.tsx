
import React from 'react';
import { Layout, BarChart3, Zap, Users, Search, Brain, Clock, Heart, Shield, Lightbulb, UserCheck, TrendingUp, CheckCircle2, Workflow, Database, LifeBuoy, ShoppingBag } from 'lucide-react';

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
  { label: 'Sobre a Simplifier', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
];

export const PRINCIPLES = [
  {
    title: "Clareza Radical",
    description: "Eliminamos o ruído para focar no que realmente move o ponteiro.",
    icon: <Lightbulb />
  },
  {
    title: "Eficiência Real",
    description: "Automatização com propósito, devolvendo tempo para o que importa.",
    icon: <Clock />
  },
  {
    title: "Sustentabilidade",
    description: "Processos desenhados para durar e crescer com seu negócio.",
    icon: <Shield />
  },
  {
    title: "Foco no Humano",
    description: "Tecnologia que serve às pessoas, reduzindo a carga mental.",
    icon: <Heart />
  }
];

export const CONTENT = {
  [AUDIENCE_TYPES.COMPANIES]: {
    hero: {
      tag: "Para seu negócio",
      headline: "A maioria automatiza o caos. A gente organiza primeiro.",
      subheadline: "Estruturamos processos, decisões e times para que seu negócio funcione — sem depender só de você.",
      cta: "Falar com a Simplifier →",
      ctaLink: "#produtos"
    },
    problem: {
      title: "O problema não é falta de esforço. É falta de estrutura.",
      subtitle: "",
      items: [
        "Processos que só funcionam quando você está presente",
        "Time que decide sem critério claro",
        "Automações que vieram antes da organização",
        "Negócio que cresce, mas não fica mais fácil"
      ]
    },
    solution: {
      title: "Organizar antes de automatizar.",
      description: "Ferramentas não resolvem estrutura ruim. Por isso começamos pelo que realmente trava o negócio.",
      blocks: [
        { 
          title: "Clareza de processos", 
          description: "Quem faz o quê, quando e por quê. Sem depender da memória de ninguém.",
          icon: <Search className="w-6 h-6" /> 
        },
        { 
          title: "Organização das decisões", 
          description: "Critérios definidos antes do problema aparecer. Menos urgência, mais previsibilidade.",
          icon: <Layout className="w-6 h-6" /> 
        },
        { 
          title: "Automação inteligente", 
          description: "Automatizamos o que já funciona. Não o que ainda está quebrado.",
          icon: <Zap className="w-6 h-6" /> 
        },
        { 
          title: "Sistemas sustentáveis", 
          description: "Construídos para durar — e para crescer sem você precisar reinventar tudo.",
          icon: <TrendingUp className="w-6 h-6" /> 
        }
      ]
    },
    deliverables: {
      title: "O que entregamos",
      subtitle: "",
      items: [
        {
          category: "E-commerce",
          title: "Sua loja pronta para vender. Sem dor de cabeça técnica.",
          description: "Você não precisa entender de tecnologia para ter um e-commerce profissional. Precisa de alguém que entenda por você.",
          icon: <ShoppingBag className="w-6 h-6" />,
          highlight: true,
          link: "https://wa.me/seunumerowhatsapp"
        },
        { 
          category: "Automações de processos",
          title: "O que hoje depende de você, amanhã roda sozinho.", 
          description: "Automatizamos as tarefas que consomem o seu time para que as pessoas certas foquem no que só elas podem fazer.", 
          icon: <Workflow className="w-6 h-6" /> 
        },
        { 
          category: "Sistemas sob medida",
          title: "Construídos para o seu negócio. Não para o negócio de todo mundo.", 
          description: "Sistemas desenvolvidos de forma personalizada para se adaptar perfeitamente à sua operação, sem complexidade desnecessária.", 
          icon: <Database className="w-6 h-6" /> 
        }
      ]
    },
    audience: {
      title: "Para quem é",
      description: "Pequenas e médias empresas que já trabalham muito — e querem trabalhar melhor."
    },
    results: {
      title: "Resultados que você vai sentir",
      items: [
        "Mais horas do seu dia de volta",
        "Menos dependência de pessoas-chave",
        "Decisões tomadas com mais rapidez",
        "Um negócio que funciona sem você estar em tudo"
      ]
    },
    ctaFinal: {
      title: "Seu negócio pode funcionar sem te consumir.",
      button: "Falar com a Simplifier →",
      link: "https://wa.me/seunumerowhatsapp"
    }
  },
  [AUDIENCE_TYPES.INDIVIDUALS]: {
    hero: {
      tag: "Para você",
      headline: "Menos carga mental. Mais clareza para viver.",
      subheadline: "Um ecossistema de ferramentas simples para tirar da sua cabeça o que não precisa estar lá.",
      cta: "Conhecer o ecossistema →",
      ctaLink: "#produtos"
    },
    problem: {
      title: "O cansaço não vem só do que você faz. Vem do que você carrega na mente.",
      subtitle: "",
      items: [
        "Decisões adiadas por falta de clareza",
        "Rotina organizada em vários lugares — e em nenhum",
        "Ansiedade de não saber o que veio antes e o que vem depois"
      ]
    },
    solution: {
      title: "Tudo na palma da mão. Funcional e alinhado com o todo.",
      description: "",
      blocks: []
    },
    deliverables: {
      title: "O Ecossistema Simplifier",
      subtitle: "Cinco ferramentas. Uma lógica só: tirar peso da sua cabeça.",
      items: [
        { 
          title: "Casa Inteligente", 
          description: "Planeje, conheça e organize seu espaço. Sem planilha, sem papel.", 
          icon: <Heart className="w-6 h-6" />, 
          highlight: true 
        },
        { 
          title: "Smart Pocket", 
          description: "Suas finanças pessoais de forma simples — sem precisar ser especialista.", 
          icon: <BarChart3 className="w-6 h-6" /> 
        },
        { 
          title: "Cozinha Inteligente", 
          description: "Menos desperdício. Mais clareza na hora de cozinhar.", 
          icon: <UserCheck className="w-6 h-6" /> 
        },
        { 
          title: "Hábitos & Treinos", 
          description: "Rotina que funciona. Objetivos que avançam.", 
          icon: <Brain className="w-6 h-6" /> 
        },
        { 
          title: "Task Check", 
          description: "Tudo que precisa ser feito, num lugar só.", 
          icon: <CheckCircle2 className="w-6 h-6" /> 
        }
      ]
    },
    audience: {
      title: "Para quem é",
      description: "Para quem vive muito rápido e quer parar de improvisar a própria vida."
    },
    results: {
      title: "Como isso ajuda na prática",
      items: [
        "Menos decisões repetidas todo dia",
        "Mais presença no que realmente importa",
        "Rotina com intenção, não só com urgência",
        "Cabeça mais leve. Vida mais sua."
      ]
    },
    ctaFinal: {
      title: "Organizar a vida é um ato de cuidado.",
      button: "Entrar no ecossistema →",
      link: "https://wa.me/seunumerowhatsapp"
    }
  }
};
