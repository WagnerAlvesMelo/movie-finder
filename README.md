![example workflow](https://github.com/WagnerAlvesMelo/movie-finder/actions/workflows/main.yml/badge.svg)

# Link da aplicação: https://wagneralvesmelo.github.io/movie-finder/

Aplicação criada com a finalidade de permitir que o usuário busque informações de filmes da preferência do mesmo.

## Requisitos Funcionais
- Deve ser possível buscar uma lista de filmes tendo como parâmetro o nome
- Deve ser possível visualizar uma lista com os posters dos filmes e ao apontar o cursor para um determinado filme mostrar título, ano de lançamento, tipo e IMDBID e um botão + INFO para ver detalhes do filme
- Ao clicar no botão +INFO deve ser necessário ver título, ano, classificação, data de lançamento, gênero, diretor, escritor, atores, resumo, idioma, país de orígem, poster, metascore, avaliação do IMDB, número de votos da IMDB e tipo

## Requisitos Não Funcionais
- Ao clicar em buscar deve haver uma animação que move o campo de busca para o topo da tela
- A busca deve ser realizada através do botão enter ou um clique no botão de buscar dentro da caixa de texto
- A paginação da lista de filmes deve ser realizada de 6 em 6 e com scroll infinito
- Deve haver um botão voltar na tela de detalhes do filme que leva para o topo da tela anterior com a listagem dos filmes

## Tecnologias usadas
- ReactJS
- ReactContext
- MaterialUI
- StyledComponents
- Github pages
- Github actions

### Arquitetura do projeto
A arquitetura do projeto segue os conceitos de Clean Architecture, isolando as camadas de negócio das camadas de interação e frameworks. Referência dos conceitos da arquitetura: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

### Estrutura de pastas
Domain - responsável por declarar os casos de uso e as entidades do sistema;\
Service - responsável por implementar os casos de uso;\
Infra - responsável por adaptar protocolos e bibliotecas de forma genérica para serem usados pela camada de serviço;\
Repository - responsável pelas comunicações com API's externas\
Presentation - responsável pela interface do sistema. Ex: componentes, páginas, hooks e etc;\
Main - responsável por instanciar e estruturar as classes do projeto e suas dependências

## Instalação do projeto localmente
### Requisitos:
- NodeJS (versão recomendada: v14.18.3 ou superior)
- NPM
- Yarn (para instalar execute o comando npm i -g yarn tendo o Node e o NPM instalados na máquina ou container)

Para instalar as dependências do projeto execute o seguinte script:
```
yarn
```
Para formatar os espaçamentos gerados pelo Github:
```
yarn eslint --fix .
```

Para iniciar o projeto execute o comando:
```
yarn start
```

