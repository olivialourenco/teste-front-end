# ----- Teste Front-End Econverse

Este projeto é uma Landing Page desenvolvida para o processo seletivo da Econverse. O objetivo foi criar uma interface fiel ao layout proposto, utilizando React, TypeScript e Sass, focando em organização e fidelidade visual.

## Como rodar o projeto

Para visualizar o projeto na sua máquina, siga os passos abaixo:

### Instale as dependências:
npm install

### Inicie o servidor de desenvolvimento:
npm run dev

O projeto estará disponível no endereço indicado no seu terminal (geralmente http://localhost:5173).

## Tecnologias que utilizei

**React e TypeScript:** Para criar a estrutura da página e garantir que os dados dos produtos sejam manipulados sem erros.

**Sass:** Utilizado para toda a estilização, permitindo o uso de variáveis para cores e tamanhos, mantendo o código limpo.

**Context API:** Usei para que a lista de produtos seja carregada apenas uma vez e compartilhada entre todas as vitrines do site.

**Aviso importante:** Não utilizei nenhuma biblioteca de componentes pronta (como Bootstrap ou Tailwind). Todo o layout e as interações foram criados do zero com CSS e React, respeitando as regras do teste.

## Decisões técnicas e soluções

### Consumo da API e o problema do CORS

Durante o desenvolvimento, notei que o navegador bloqueia o acesso direto aos dados da API da Econverse por uma segurança chamada CORS. Para resolver isso e conseguir mostrar os produtos reais no teste, usei um "proxy", que funciona como um intermediário para buscar os dados.

Como esses intermediários gratuitos podem falhar, criei um plano de segurança: se a internet ou o link falharem, o site carrega automaticamente um arquivo local (products.json) com as mesmas informações. Assim, a vitrine nunca fica vazia.

### Formatação de Preços

Identifiquei que os valores no arquivo de dados representam o preço cheio em reais (por exemplo, 15000 equivale a R$ 15.000,00). Por isso, configurei o código para exibir o valor direto no padrão brasileiro, sem fazer divisões, garantindo que os preços dos iPhones e dispositivos fiquem corretos.

### Vitrines e Carrossel

O projeto possui três vitrines. Elas usam a mesma base de código para evitar repetição, mas cada uma tem seu próprio estilo visual. O carrossel (deslizar os produtos) foi feito manualmente com lógica de programação e CSS, sem o uso de plugins prontos, permitindo o controle total sobre a exibição de 4 itens por vez no computador.

## Diferenciais do projeto

**Organização e Semântica:** Usei as tags corretas do HTML para que o site seja bem entendido por buscadores e leitores de tela, melhorando o SEO e a acessibilidade.

**Fidelidade ao Design:** Foquei em seguir cada detalhe do Figma, como fontes, cores e espaçamentos.

**Modal de Produto:** Ao clicar em um produto, um balão de detalhes (modal) abre com as informações específicas daquele item, funcionando perfeitamente em todas as vitrines.
