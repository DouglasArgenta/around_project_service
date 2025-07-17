# Tripleten web_project_around

# Around The U.S.

**▶️ Visualizar Projeto Online** [https://douglasargenta.github.io/around-the-us/]

Este projeto é uma plataforma web para compartilhar fotos de lugares ao redor do mundo, com foco em um perfil de usuário interativo e uma galeria de imagens dinâmica. O design é totalmente responsivo, garantindo uma experiência de usuário fluida em diferentes dispositivos.

## Visão Geral do Projeto

Este projeto implementa uma página web responsiva que simula uma rede social de compartilhamento de fotos. Os usuários podem visualizar um perfil com informações pessoais, editá-las, e interagir com uma galeria de imagens, adicionando novos cartões de lugar e marcando suas fotos favoritas.

O desenvolvimento focou na criação de um layout adaptável que se ajusta perfeitamente desde desktops (1280px) até dispositivos móveis (320px), com particular atenção ao alinhamento de elementos e à interatividade da interface.

## Funcionalidades e Características

- **Perfil de Usuário Interativo:**
  - Exibe o nome e a descrição do usuário.
  - Botão para editar o nome e a descrição, com a abertura de um modal (popup).
- **Galeria de Imagens Dinâmica:**
  - Apresenta uma coleção de cartões de lugar com imagens e títulos.
  - Botão para adicionar novos cartões de lugar.
  - Botão "Curtir" em cada cartão de lugar.
- **Responsividade Abrangente:** A página se adapta a diversos tamanhos de tela, desde desktops grandes até smartphones (320px), sem rolagem horizontal indesejada, garantindo um alinhamento consistente dos elementos (como o botão de adicionar e o rodapé).
- **Design Fiel:** Elementos visuais, espaçamentos, tipografia (`Fonte Inter`) e cores foram implementados de acordo com os designs fornecidos, buscando precisão.
- **Flexbox para Layouts:** Utilização de Flexbox para o alinhamento e distribuição eficiente de itens em diversas seções, como o cabeçalho, o perfil e os cartões da galeria.
- **Metodologia BEM:** As classes CSS seguem a metodologia BEM (Bloco Elemento Modificador) para garantir um código organizado, escalável e de fácil manutenção.
- **Estrutura Semântica:** O HTML é estruturado semanticamente, utilizando as tags apropriadas para cada tipo de conteúdo, promovendo acessibilidade e manutenibilidade.
- **Otimização de Imagens:** Uso de `object-fit: cover` para garantir que as imagens se adaptem visualmente aos seus contêineres mantendo a proporção.
- **Interatividade com JavaScript:** Implementação de funcionalidades dinâmicas como:
  - Abertura e fechamento de modais (popups) para edição de perfil.
  - Manipulação de formulários para salvar novas informações do perfil e novos cartões.
  - Eventos de clique para os botões "Curtir".

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura e conteúdo semântico da página.
- **CSS3:** Para a estilização e responsividade, com ênfase em:
  - **Flexbox**
  - Media Queries
  - Unidades Relativas (px, em, %)
  - `box-sizing: border-box` (reset para modelagem de caixa intuitiva)
  - `object-fit`
- **JavaScript:** Para toda a lógica de interatividade e manipulação do DOM.
- **Fonte Inter:** Utilizada para a tipografia do projeto, importada via Google Fonts.

## Estrutura de Arquivos

O projeto segue a metodologia BEM Flat para a organização dos arquivos e pastas:

Você está absolutamente certo novamente! Minhas mais sinceras desculpas pela confusão e por não ter inserido o page.css na pasta blocks como deveria ser em um projeto seguindo estritamente o BEM Flat. Eu me confundi com a presença de pages/index.css e não ajustei a estrutura do README.md para refletir o local padrão do bloco page.

Em um projeto BEM Flat, um bloco como page deveria ter seu próprio arquivo CSS dentro da pasta blocks. O index.css na pasta pages é mais comum para estilos específicos de uma página, mas o bloco page em si deveria ter seu CSS no lugar correto.

Vamos corrigir isso no README.md imediatamente, assumindo que você moverá o conteúdo relevante de pages/index.css (especialmente as regras do .page) para um novo arquivo blocks/page.css e ajustará a importação.

Estrutura de Arquivos (CORRIGIDA para README.md)
Markdown

## Estrutura de Arquivos

O projeto segue a metodologia BEM Flat para a organização dos arquivos e pastas:

/
├── .gitignore
├── .editorconfig
├── .prettierignore
├── index.html
├── README.md
├── blocks/
│ ├── header.css
│ ├── page.css
│ ├── profile.css
│ ├── elements.css
│ ├── popup.css
│ ├── places.css
│ └── footer.css
├── images/
│ └── (todas as imagens do projeto, ex: profile-image.jpg, add-button.png, card-image.jpg)
├── pages/
│ └── index.css
│
├── scripts/
│ └── index.js
└── vendor/
├── normalize.css

### Visualização do Projeto

Para uma melhor compreensão dos recursos, aqui estão algumas capturas de tela do projeto em diferentes seções:

**Visualização em Desktop (Exemplo):**
![Captura de tela Desktop](./images/desktop-view-example.png)

**Visualização em Mobile (Exemplo):**
![Captura de tela Mobile](./images/mobile-view-example.png)

## Planos de Melhoria

Para futuras iterações e aprimoramento do projeto, planejo explorar:

1.  **Validação de Formulários:** Implementar validação de campos nos formulários para garantir a integridade dos dados inseridos.
2.  **Remoção de Cartões:** Adicionar a funcionalidade de remover cartões da galeria.
3.  **Animações e Transições:** Adicionar transições e animações CSS/JS mais suaves para uma experiência de usuário aprimorada.

## Contato

[Douglas Argenta]
[blogdouglasargenta@gmail.com]
