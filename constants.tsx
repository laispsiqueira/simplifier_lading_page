
import React from 'react';
import { Layout, BarChart3, Zap, Users, Search, Brain, Clock, Heart, Shield, Lightbulb, UserCheck, TrendingUp, CheckCircle2, Workflow, Database, LifeBuoy } from 'lucide-react';

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
      headline: "Tecnologia feita para simplificar.",
      subheadline: "Criamos soluções digitais que organizam decisões, reduzem sobrecarga e tornam empresas mais previsíveis.",
      cta: "Falar com a Simplifier",
      ctaLink: "#produtos"
    },
    problem: {
      title: "O problema não é falta de trabalho. É excesso de confusão.",
      subtitle: "",
      items: [
        "Processos espalhados",
        "Times desalinhados",
        "Automações sem critério",
        "Negócio dependente de pessoas",
        "Sobrecarga mental constante"
      ]
    },
    solution: {
      title: "Organizar antes de automatizar",
      description: "Não vendemos ferramentas isoladas. Criamos estrutura.",
      blocks: [
        { title: "Clareza de processos", icon: <Search className="w-6 h-6" /> },
        { title: "Organização das decisões", icon: <Layout className="w-6 h-6" /> },
        { title: "Automação inteligente", icon: <Zap className="w-6 h-6" /> },
        { title: "Sistemas sustentáveis", icon: <TrendingUp className="w-6 h-6" /> }
      ]
    },
    deliverables: {
      title: "O que entregamos",
      items: [
        { title: "Automação de fluxos (WhatsApp)", description: "Vendas e atendimento automatizado", icon: <Workflow className="w-6 h-6" /> },
        { title: "Organização operacional", description: "Estruturação de rotinas e processos", icon: <Layout className="w-6 h-6" /> },
        { title: "Sistemas sob medida", description: "Adaptados à sua realidade", icon: <Database className="w-6 h-6" /> },
        { title: "Apoio à tomada de decisão", description: "Dados claros para guiar o negócio", icon: <BarChart3 className="w-6 h-6" /> }
      ]
    },
    audience: {
      title: "Para quem é",
      description: "Pequenos e médios negócios de serviços que cresceram sem estrutura e sentem o peso do dia a dia."
    },
    results: {
      title: "Resultados esperados",
      items: [
        "Menos dependência do dono",
        "Rotinas mais simples",
        "Decisões mais claras",
        "Tempo para estratégia e vida pessoal"
      ]
    },
    ctaFinal: {
      title: "Seu negócio pode funcionar sem te consumir",
      button: "Falar com a Simplifier",
      link: "#produtos"
    }
  },
  [AUDIENCE_TYPES.INDIVIDUALS]: {
    hero: {
      headline: "Menos carga mental. Mais clareza para viver.",
      subheadline: "Um ecossistema digital simples para organizar sua vida fora da cabeça.",
      cta: "Conhecer o ecossistema",
      ctaLink: "#produtos"
    },
    problem: {
      title: "O cansaço não vem só do que você faz. Vem do que você carrega na mente.",
      subtitle: "",
      items: [
        "Pensar em tudo o tempo todo",
        "Decisões acumuladas",
        "Organização fragmentada",
        "Ansiedade por falta de clareza"
      ]
    },
    solution: {
      title: "Organização mental, simples e conectada",
      description: "Tudo na palma da mão, funcional e alinhado com o todo.",
      blocks: [] // For Individuals, we might not have visual blocks, or use empty to trigger default simple text view
    },
    deliverables: {
      title: "O Ecossistema Simplifier",
      items: [
        { title: "Casar Inteligente", description: "Planejamento consciente e seguro de casamentos", icon: <Heart className="w-6 h-6" />, highlight: true },
        { title: "Smart Pocket", description: "Organização financeira simples", icon: <BarChart3 className="w-6 h-6" /> },
        { title: "Cozinha Inteligente", description: "Receitas com o que você já tem em casa", icon: <UserCheck className="w-6 h-6" /> },
        { title: "Hábitos & Treinos", description: "Planejamento realista para cuidar de si", icon: <Brain className="w-6 h-6" /> },
        { title: "Task check", description: "Organizador de tarefas individuais ou em grupo", icon: <CheckCircle2 className="w-6 h-6" /> }
      ]
    },
    audience: {
      title: "Para quem é",
      description: "Pessoas que querem viver com menos peso mental e mais presença, sem sistemas complicados ou culpa."
    },
    results: {
      title: "Como isso ajuda na prática",
      items: [
        "Menos decisões repetitivas",
        "Mais clareza no dia a dia",
        "Redução da ansiedade",
        "Vida organizada fora da cabeça"
      ]
    },
    ctaFinal: {
      title: "Organizar a vida é um ato de cuidado",
      button: "Entrar no ecossistema",
      link: "#produtos"
    }
  }
};
