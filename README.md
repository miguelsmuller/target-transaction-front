# Teste Desenvolvedor Full Stack - Target Sistemas

## Regras de Negócio Fornecidas pela Target

### Descrição
O objetivo deste projeto é criar uma tela de extrato de conta corrente que permita listar os lançamentos da conta corrente, independentemente de serem avulsos ou não. Além disso, os usuários devem ter a capacidade de inserir, alterar e cancelar lançamentos avulsos válidos nessa tela.

### Critérios de Aceitação de Negócio

- Cada lançamento deve possuir as seguintes propriedades: Id, descrição, data, valor, avulso e status.
- O status pode ser "Válido" ou "Cancelado".
- O Id deve ser o identificador único do lançamento.
- A descrição deve ser alfanumérica para ajudar os usuários a identificar o lançamento.
- A data deve corresponder à data em que o lançamento foi feito na conta corrente.
- O valor do lançamento pode ser positivo ou negativo.
- O lançamento pode ser avulso (lançamento manual do usuário) ou não (lançamento automático por algum processo).
- A tela de extrato deve incluir um filtro de intervalo de datas, com o intervalo inicial configurado para 2 dias. Isso significa que a tela inicialmente exibirá os dados do extrato dos últimos 2 dias.
- Ao alterar as datas no filtro, a tela deve atualizar os lançamentos de acordo com as novas datas.
- Deve ser possível incluir um lançamento válido no extrato de forma avulsa, identificando-o como avulso no extrato.
- Deve ser possível alterar um lançamento avulso e válido no extrato, permitindo alterar apenas o valor e a data.
- Deve ser possível cancelar um lançamento válido e avulso no extrato.
- Deve existir um totalizador mostrando o valor total de todos os lançamentos listados no extrato.
- Deve existir uma rota na API para inserir um lançamento NÃO AVULSO na conta corrente, incluindo descrição, valor e data. Esse lançamento deve ser gerado como "Não Avulso" e "Válido".

### Critérios de Aceitação Técnicos

- Frontend deve ser desenvolvido em Angular.
- Backend deve ser desenvolvido em .NET, preferencialmente na versão .NET 6.
- Recomenda-se a utilização de uma Single Page Application (SPA) para criar um serviço comum para a API e o aplicativo (o Visual Studio já cria um modelo desse tipo para a API).
- É obrigatório o uso do Entity Framework como ORM para persistência de dados.
- Recomenda-se a utilização do Material Angular para criar elementos de interface do usuário, como inputs, tabelas e grids.
- A comunicação entre o aplicativo e a API deve ser RESTful, utilizando JSON para as operações que envolvem objetos.
- Não há restrições quanto à arquitetura, mas é recomendável adotar alguma arquitetura para organizar o código do frontend e do backend.


## TransactionFrontForTarget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
