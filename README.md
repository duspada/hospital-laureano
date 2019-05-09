#### Pré-requisitos:

- Versão mais recente do Mac OS
- [Brew](https://brew.sh/index_pt-br)
- Versão 8 do node.
- Watchman

Mais detalhes sobre a instalação das dependências no [guia do react native](https://facebook.github.io/react-native/docs/getting-started.html) na aba "Building Projects with Native Code".

## :rocket: Setup & Run

#### Antes de iniciar o desenvolvimento:

Faça fork do projeto
Crie um novo remote referenciando o repositório original
```sh
git remote add <nome_do_remote> <seu fork>
```

Mude para a branch `develop`:
```sh
git checkout develop
```

Para começar o desenvolvimento, crie uma nova branch a partir da `develop`:
```sh
git checkout -b <nome_da_branch>
```

Instale as dependências do yarn:
```sh
yarn install
```

Para rodar o projeto execute o comando:
```sh
yarn start
```

O projeto rodará na url: [http://localhost:3000/](http://localhost:3000/)

## Estrutura do Projeto

#### api/
Nesta pasta devem ficar as definições e funções relacionadas a camada de HTTP e utilizações de APIs REST.

#### assets/
Nesta pasta serão adicionadas as imagens, vetores, aúdios, etc. que serão compiladas com o aplicativo.

#### common/
Nesta pasta devem ficar os componentes e implementações (utils, helpers, etc) que são utilizados por toda aplicação.

#### redux/
Nesta pasta devem ficar todas as definições e implementações relacionadas a gestão do estado global da aplicação.
Na implementação dos redux/modules, recomenda-se a utilização do padrão [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux) para a organização.

#### routes/
Nesta pasta devem ficar arquivos referentes à navegação da aplicação. Basicamente, dentro dessa pasta ficam os arquivos que configuram e abstraem o roteamento/navegação da aplicação

#### scenes/
Nesta pasta devem ficar as funcionalidades do aplicativo, normalmente essa pasta ficaria dividida entre screens (as telas do aplicativo) porém isso pode ser diferente no caso da web onde se é utilizado o conceito de pages, então, recomenda-se a nomenclatura scenes ao invés de screens ou pages.


## :recycle: Fluxo de Rebase

Dê commit ou stash das suas alterações e mude para a branch `develop`:
```sh
git checkout develop
```

Atualize sua branch `develop` com o conteúdo do repositório original:
```sh
git pull <nome_do_remote> develop
```

Volte para sua branch com as alterações:
```sh
git checkout <nome_da_branch>
```

Dê rebase para aplicar as atualizações à sua branch:
```sh
git rebase teste_blue
```

Resolva os conflitos e rode os testes para ter certeza de que nada foi quebrado:
```sh
yarn test
```

Suba sua branch para seu remote (por padrão `origin`)
```sh
git push origin <nome_da_branch>
```

No GitLab abra um merge request da sua branch para a branch `develop` do repositório original.

## Git
Para nomes de branch o padrão sugerido é:
tipo/nome-da-atividade
Exemplo: Feature/Create-Login-Screen

Onde tipo deve ser relacionado ao que aquela branch busca resolver.

Os tipos que estamos utilizando são:
- feat (será implementada uma nova funcionalidade)
- fix (será implementada uma correção para resolver um problema existente)
- refactor (será realizado algum refactor em parte do código que já funciona)
- chore (será implementa alguma melhoria de infraestrutura ou soluções mais gerais que não são features)
- test (será desenvolvido algum novo cenário de teste para a aplicação ou atualização de testes existentes)
- docs (será feita alguma mudança na documentação)

Para as mensagens de commit também deve-se seguir a nomenclatura:
 tipo(nome-da-atividade): mensagem

## :heavy_check_mark:  Rodar os testes:

```sh
yarn test
```

## Built With
- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [Formik](https://github.com/jaredpalmer/formik)
- [Styled Components](https://www.styled-components.com/docs/basics#getting-started)
- [Jest](https://jestjs.io/docs/en/getting-started)

