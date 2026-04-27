# Landing Page Econverse — Teste Front-end

Landing page da Econverse construída com **React**, **TypeScript**, **Vite** e **Sass**. O foco foi entregar uma home fiel ao Figma, com vitrines dinâmicas, bom desempenho e código fácil de navegar — sem atalhos com libs de UI prontas.

---

## 🚀 Como executar

Na raiz do projeto:

```bash
npm install
npm run dev
```

O Vite sobe o servidor local (geralmente em `http://localhost:5173`). Para validar o bundle de produção:

```bash
npm run build
```

**Requisito:** Node.js 18+ (LTS recomendado).

---

## 🛠 Tecnologias utilizadas

| Stack | Uso no projeto |
|--------|----------------|
| **React** | Componentes da página e composição da UI |
| **TypeScript** | Tipagem dos produtos, estados e contratos da API |
| **Sass** | Pré-processador pedido no desafio — estilos com variáveis (cores, breakpoints) alinhadas ao layout |
| **Vite** | Dev server rápido, build enxuto |
| **Context API** | `VitrineProductsProvider` para compartilhar a lista de produtos na home com uma única busca |

**Importante:** não usei **Material, Chakra, Bootstrap, Tailwind** nem outra biblioteca de componentes. Tudo que você vê em layout e interação foi feito com HTML/CSS/Sass e React — do jeito que o teste pediu.

---

## 💡 Soluções e decisões técnicas

### Consumo de API e CORS

A API oficial da Econverse não libera `localhost` do jeito que precisamos para testar no navegador: entra **CORS** e o `fetch` direto quebra, mesmo com a API respondendo 200.

Para ainda assim conseguir testar a URL real no dia a dia, o `fetch` passa por um **proxy** público na frente do endpoint. Funciona para demo e entrega, com a ressalva de que proxy gratuito pode oscilar (rede, limite, instabilidade).

O que não dá é depender só disso. Por isso entrou um **fallback local** (`src/data/products.json` com o mesmo formato da API): se o proxy cair, der timeout, ou a resposta vier inválida, a aplicação hidrata a vitrine com esse mock. A vitrine **não fica vazia** no meio de uma apresentação.

### Regra de negócio: preços

Os valores vêm do JSON como **números inteiros em reais** (ex.: `15000` = R$ 15.000,00). A formatação usa `Intl.NumberFormat` em pt-BR e **não divide por 100** — evita tratar o campo como centavo e mantém a leitura alinhada a preços de tecnologia no enunciado.

### Componentização das vitrines

As três vitrines (Vitrine, Vitrine2, Vitrine3) compartilham a mesma **base** — tipos, fetch + fallback, `ProductCard`, `ProductSlider`, modal — mas cada bloco tem **seu próprio Sass** e classes BEM, preservando a identidade visual de cada seção no Figma sem copy-paste descontrolado de lógica.

---

## ✨ Diferenciais implementados

- **HTML5 semântico** — `section`, listas de produtos em `ul`/`li`, títulos com `h2`/`h3`, `article` no card, modal com `role="dialog"`. Ajuda acessibilidade e SEO sem complicar o bundle.
- **Layout alinhado ao Figma** — espaçamentos, tipografia e componentes (incluindo setas e vitrines) pensados no pixel.
- **Modal reativo e carrossel** — abertura por produto, navegação por setas, 4 itens no viewport no desktop — **sem Swiper, sem Embla, sem nada disso**; só CSS + estado em React.
- **Performance e organização** — uma carga de produtos via Context, carrossel com `transform` e resize observado, Sass modular por seção, zero peso de framework de UI.

Se algo não bater com o teu ambiente, abre uma issue ou chama no teste — boa leitura do repo.
