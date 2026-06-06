# Diretrizes de Marca — Simplifier (Brand Guidelines)

Este documento estabelece as diretrizes de design, tipografia, cores e componentes padrão para a presença digital da **Simplifier**, garantindo consistência, sofisticação e alta conversão em todo o ecossistema.

---

## 1. Tipografia Padrão

A tipografia da Simplifier expressa precisão estrutural combinada com calor humano e credibilidade.

### **Título Principal (Headings & Headlines) & Corpo de Texto**
* **Família de Fontes:** `Plus Jakarta Sans` (Padrão Unificado para todo o site: títulos, subtítulos, botões e corpo de texto).
* **Estilos Principais para Títulos:** `font-extrabold` (peso 800) ou `font-black` (peso 900).
* **Variações Estilísticas:** Para criar dinamismo visual sofisticado, utilize termos ou palavras de destaque escritas em **itálico (`italic`)**, combinando tons de **Dark Teal** ou **Orange Brand**.
* **Classe de utilidade Tailwind:** `.font-title` (mapeada no `index.html` para `'Plus Jakarta Sans', sans-serif`).

*Exemplo de aplicação:*
```tsx
<h1 className="font-title text-5xl md:text-7xl font-extrabold tracking-tight text-dark-teal">
  Organização, <span className="italic text-orange-brand">Direcionamento</span>
</h1>
```

### **Corpo de Texto & Subtítulos (Body & Subheadlines)**
* **Família de Fontes:** `Plus Jakarta Sans`
* **Estilos Principais:** `font-light` (peso 300) ou `font-medium` (peso 500) para legendas.
* **Classe de utilidade Tailwind:** `font-sans` (classe padrão herdada pelo HTML).

---

## 2. Paleta de Cores do Site

A paleta fundamenta o equilíbrio entre "transformação profunda" (Teal/Laranja) e "credibilidade sólida" (Slate/Warm Charcoal).

| Cor | Código Hex | Função e Aplicação |
|---|---|---|
| **Primary Teal** | `#157D9A` | Acelerador de conversão principal, botões de ação primários, tags importantes e links ativos. |
| **Dark Teal** | `#0d5164` | Usado para os títulos principais, destaques marcantes e na cor de fundo das seções institucionais escuras (como seções de CTA final). |
| **Light Teal** | `#f0f8fa` | Cor de fundo secundária, fundos de cards leves, bordas organizadoras e detalhes suaves. |
| **Orange Brand** | `#ED8932` | Tom de destaque principal. Usado em itálicos de alta sofisticação no título, tags de destaque e banners especiais. |
| **Brown Brand** | `#402005` | Cor de contraste quente premium. Usado como fundo do card "E-commerce" e detalhes escuros sofisticados. |
| **Gray Brand** | `#4a5568` | Usada em todo o texto corrido, parágrafos comuns e detalhes técnicos de alta legibilidade. |

---

## 3. Botões Padrão (Tamanho, Formato e Efeitos)

O botão principal da Simplifier é projetado com transições fluidas, conforto de clique realçado e formato focado em alta atratividade tátil ("gordinho").

### **Formato e Espaçamento Principal**
* **Border Radius:** `rounded-xl` (12px)
* **Padding (Chunky / Gordinho):** Superior/Inferior `py-5` (20px) / Lateral `px-10` (40px)
* **Fonte:** `font-bold text-lg` (ou text-base para botões secundários)
* **Sombra:** `shadow-md hover:shadow-xl`
* **Efeito Hover:** `hover:scale-[1.02] hover:bg-[#0d5164] transition-all duration-300`

### **Estrutura Completa de Código do Botão Padrão (E-commerce / Home / Geral)**
Sempre utilize essa exata combinação de classes Tailwind e elemento indicador (`→` com barra extensora) para criar o visual assinado da marca:

```tsx
<a 
  href={LINK_DESTINO}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 bg-[#157D9A] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#0d5164] transition-all group shadow-md hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto"
>
  Falar com a Simplifier
  <span className="w-10 h-[2px] bg-white/70 block transition-transform group-hover:translate-x-1.5 duration-200 shrink-0"></span>
  <span className="-ml-1 text-white">→</span>
</a>
```

### **Botão Secundário / Alternativo (Outline ou Leve)**
Usado para ações complementares (como "tirar dúvidas"):
```tsx
<a 
  href={LINK_SECUNDARIO}
  className="w-full sm:w-auto inline-flex items-center justify-center border border-primary-teal/30 text-primary-teal px-10 py-5 rounded-xl font-semibold text-base hover:bg-light-teal/55 transition-all hover:scale-[1.02]"
>
  Ainda tenho dúvidas — conversar antes
</a>
```

---

## 4. Filosofia de Design Visual

1. **Amostras de Negative Space:** Deixamos ao menos `py-24` de espaçamento para as seções respirarem livremente. Menos poluição visual gera mais foco.
2. **Layout Bento Card Coeso:** Os cartões sobre e-commerce, automações e customização de sistemas usam bordas finas com cantos muito arredondados (`rounded-3xl` ou `rounded-2xl`) para suavizar o visual tecnológico.
3. **Foco Único na Solução:** Exibição clara e objetiva do valor, sem lixo de informações ou dados irrelevantes de log/telemetria.
