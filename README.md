# Teste Desenvolvedor Full Stack - Target Sistemas

O projeto `Transaction Front` faz parte do monorepo `Transaction Challenge` que visa criar um domínio de transações de acordo com as regras de negócio fornecidas pela Target. Este front-end é desenvolvido em Angular e fornece a interface do usuário para listar, inserir, alterar e cancelar lançamentos na conta corrente.

## **Monorepo e Projetos Relacionados**

- **[Monorepo Transaction Challenge](https://github.com/miguelsmuller/transaction-challenge-for-target)**

- **[Transaction API](https://github.com/miguelsmuller/transaction-api-for-target)**


## **Rodando Localmente**

Para iniciar o servidor de desenvolvimento, execute `ng serve`. Navegue para `http://localhost:4200/`. A aplicação será automaticamente recarregada quando houver alterações nos arquivos de origem.


## **Makefile do Projeto**

Este Makefile inclui as seguintes metas:

- `build-image`: Constrói uma imagem Docker para o projeto.
- `run-image`: Inicia um contêiner Docker com o projeto em execução.
- `stop-image`: Para e remove o contêiner Docker do projeto.
- `tag-image`: Adiciona uma tag à imagem Docker.
- `publish-image`: Publica a imagem Docker em um registro (é necessário configurar o registro).


## **Aspectos Técnicos**

- Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.7.

- O estado da aplicação é gerenciado pelo arquivo `transaction.state.ts`. 

- O projeto está dockerizado e parametrizado para uso com um servidor web nginx embutido para servir a aplicação.


## **Regras de Negócio Fornecidas pela Target**

O objetivo deste projeto é criar uma tela de extrato de conta corrente que permita listar os lançamentos da conta corrente, independentemente de serem avulsos ou não. Além disso, os usuários devem ter a capacidade de inserir, alterar e cancelar lançamentos avulsos válidos nessa tela.


### **Critérios de Aceitação de Negócio**

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


### **Critérios de Aceitação Técnicos**

- Frontend deve ser desenvolvido em Angular.
- Backend deve ser desenvolvido em .NET, preferencialmente na versão .NET 6.
- Recomenda-se a utilização de uma Single Page Application (SPA) para criar um serviço comum para a API e o aplicativo (o Visual Studio já cria um modelo desse tipo para a API).
- É obrigatório o uso do Entity Framework como ORM para persistência de dados.
- Recomenda-se a utilização do Material Angular para criar elementos de interface do usuário, como inputs, tabelas e grids.
- A comunicação entre o aplicativo e a API deve ser RESTful, utilizando JSON para as operações que envolvem objetos.
- Não há restrições quanto à arquitetura, mas é recomendável adotar alguma arquitetura para organizar o código do frontend e do backend.





