![example workflow](https://github.com/WagnerAlvesMelo/movie-finder/actions/workflows/main.yml/badge.svg)

# Link da aplicação: https://wagneralvesmelo.github.io/movie-finder/

## Tecnologias usadas
- ReactJS
- ReactContext
- MaterialUI
- StyledComponents

### Arquitetura do projeto
A arquitetura do projeto segue os conceitos de Clean Architecture, isolando as camadas de negócio das camadas de interação e frameworks. Referência dos conceitos da arquitetura: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

### Estrutura de pastas
Domain - responsável por declarar os casos de uso e as entidades do sistema;\
Service - responsável por implementar os casos de uso;\
Infra - responsável por adaptar protocolos e bibliotecas de forma genérica para serem usados pela camada de serviço;\
Repository - responsável pelas comunicações com API's externas\
Presentation - responsável pela interface do sistema. Ex: componentes, páginas, hooks e etc;\
Main - responsável por instanciar e estruturar as classes do projeto e suas dependências.\

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

