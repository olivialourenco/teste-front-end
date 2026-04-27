# Teste Front-end — Econverse (Home)

Aplicação React (TypeScript + Vite) com layout alinhado ao Figma: header, vitrines de produtos, banners e rodapé.

## Requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado: LTS)
- npm (vem com o Node)

## Como rodar o projeto

Na raiz do repositório:

```bash
npm install
```

Subir o servidor de desenvolvimento (HMR do Vite):

```bash
npm run dev
```

Abra o endereço exibido no terminal (em geral `http://localhost:5173`).

Build de produção (checagem TypeScript + bundle):

```bash
npm run build
```

Pré-visualização do build estático:

```bash
npm run preview
```

## Dados da vitrine: API, CORS, proxy e fallback

### CORS e uso do proxy

A API oficial da Econverse expõe o JSON em outro *origin* (`app.econverse.com.br`). Quando a página do projeto roda noutro domínio (ex.: `localhost` ou o deploy de teste), o navegador aplica a política de **CORS (Cross-Origin Resource Sharing)** e, em muitos casos, **bloqueia** a resposta `fetch` direto para a URL pública, mesmo que a API responda 200.

Para contornar isso em **ambiente de demonstração/aval**, o código usa um **proxy HTTP público** (prefixo na URL do `fetch`) encadeado à URL da lista de produtos. O fluxo fica, em síntese:

1. O cliente pede a URL: `https://<proxy>/https://app.econverse.com.br/.../produtos.json`
2. O serviço de proxy encaminha o pedido e devolve o corpo ao nosso *front* no mesmo eixo de requisições permitido.

**Nota:** serviços de proxy gratuitos podem exigir registo/whitelist ou sofrer instabilidade. Não os use como padrão em produção: em projectos reais, o CORS deveria ser resolvido no **servidor** (cabeçalhos `Access-Control-*` ou o próprio *backend* a expor a API).

### Fallback local (`products.json`)

Se o pedido com proxy **falhar** (CORS, rede, timeout, proxy indisponível, resposta inválida ou corpo inútil, etc.), a aplicação cai de volta para o ficheiro **`src/data/products.json`**, com a mesma forma `{ success, products }`, para as vitrines continuarem a exibir conteúdo. O fallback está centralizado no `VitrineProductsProvider` (uma carga partilhada pela home).

## Preço dos produtos (JSON)

O campo `price` no JSON representa o valor **inteiro em reais** (ex.: `15000` → `R$ 15.000,00`). A formatação utiliza `Intl.NumberFormat` em `pt-BR` e **não** divide o número por 100 (não tratar como “centavos”).

## Estrutura relevante (vitrine)

- `src/components/vitrine-shared/` — tipos, API, contexto de produtos, `ProductCard`, `ProductSlider`, `VitrineProductModal`
- `src/components/Vitrine/`, `Vitrine2/`, `Vitrine3/` — secções e estilos (SASS) por bloco, sem UI kits externos

Estilos globais e *tokens* de layout vivem em `src/styles/`; componentes usam SASS (variáveis) e BEM, sem Tailwind/Bootstrap.
