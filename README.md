# cep-api

1. [Descrição](#1-descrição)
2. [Inicio rápido](#2-inicio-rápido)
3. [Componentes](#3-componentes)

## 1. Descrição

A mepoupe-api é uma API que visa prover informações do lagradouro de acordo com o CEP e calcular a média entre 2 números.

Este projeto é codificado em [Javascript](<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript>) e utiliza as tecnologias [NodeJS](<https://pt.wikipedia.org/wiki/Node.js>), [Express](<https://expressjs.com/pt-br/>) e [TypeScript](<https://www.typescriptlang.org/>).

## 2. Inicio rápido

Para rodar o projeto, executo os comandos dentro do diretório raiz do projeto.

O primeiro comando irá instalar todas as dependências necessárias para o projeto.

``` bash
npm install
```

O segundo comando irá realizar o build da aplicação criando o diretório dist no projeto.

``` bash
npm run build
```

O terceiro comando pode ser dividido em 2, onde um será para rodar em desenvolvimento(dev) e outro para exibição(start) da aplicação.

``` bash
npm run dev-start or npm run start
```

Em ambos os casos, o projeto irá subir na porta 4000, e portando você pode verificar se ele subiu com sucesso acessando o endereço abaixo:

```
localhost:4000/
```

## 3. Componentes

Esta API possui a seguinte estrutura de componentes:

| Componente    | Descrição                          | Endpoint                            |
| ------------- | ---------------------------------- | ----------------------------------- |
| **_Average_** | Calcula a média entre dois números | <http://localhost:4000/users>       |
| **_Cep_**     | Consulta CEP                       | <http://localhost:4000/cep>         |
| **_Doc_**     | Documentação da API                | <http://localhost:4000/doc>         |
| **_Info_**    | Informações da API                 | <http://localhost:4000/info>        |

### 3.1. Average

A fim de calcular a média entre dois números, foi configurado o seguinte endpoint: <http://localhost:4000/users>.

### 3.2. Cep

A fim de realizar a consulta de CEP, foi configurado o seguinte endpoint: <http://localhost:4000/cep>. Obs.: Necessário estar logado.

### 3.3. Doc

A fim de ter a documentação da aplicação, foi configurado o seguinte endpoint: <http://localhost:4000/doc>.

### 3.4. Info

A fim de ter informações da API e para verificar se está pronta para requisições, foi configurado o seguinte endpoint: <http://localhost:4000/info>.
