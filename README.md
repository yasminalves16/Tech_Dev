# DevTech

- [DevTech](#devtech)
  - [1. Sobre](#1-sobre)
  - [2. Documentação API](#2-documentação-api)
  - [3. Problema a ser solucionado](#3-problema-a-ser-solucionado)
  - [4. Tecnologias](#4-tecnologias)
  - [5. Instalação](#5-instalação)
    - [5.1 Requisitos](#51-requisitos)
    - [5.2 Instalação](#52-instalação)
  - [6. Desenvolvedores](#6-desenvolvedores)

<a name="sobre"></a>

## 1. Sobre

DevTech é um projeto que foi desenvolvido no quarto módulo do curso de Desenvolvimento Full Stack da Kenzie Academy Brasil, onde colocamos em prática o aprendizado técnico adquirido durante o módulo e as habilidades interpessoais ao trabalhar em equipe. A aplicação é uma API que simula a API de uma rede social, permitindo o usuário fazer cadastro de uma conta, login, cadastro de postagens, comentários em postagens, responder os comentários etc.

<a name="links"></a>

## 2. Documentação API

→ _[Clique aqui para acessar a doc da API DevTech]("https://yasminalves16.github.io/tech-dev-doc/#req_c9f149ba12e341648ebf24dda9a41f64")_

<a name="problema"></a>

## 3. Problema a ser solucionado

Observamos a falta de uma rede social com o propósito de reunir desenvolvedores que estimulasse a propagação de ideias, debates e conhecimentos entre a comunidade tech.

<a name="techs"></a>

## 4. Tecnologias

- _TypeScript_
- _NodeJS_
- _Express_
- _TypeORM_
- _Multer_
- _AWS-SDK_
- _PostgreSQL_

<a name="instalacao"></a>

## 5. Instalação

### 5.1 Requisitos

- Gerenciador de pacotes Yarn
- Banco de dados PostgreSQL

### 5.2 Instalação

5.2.1 - Crie um novo banco com nome de sua preferência no PostgreSQL

5.2.2 - Instale as dependências requisitadas para o projeto utilizando o Yarn

`yarn`

5.2.3 Crie um arquivo na raiz do projeto chamado .env e altere as variáveis de ambiente conforme o .env.example do projeto

```
NODE_ENV = "development"
JWT_SECRET=""
DATABASE_URL="postgres://seu_usuario:sua_senha@localhost:5432/nome_do_database"
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

5.2.4 Para rodar o projeto utilize o comando `yarn dev` no terminal, se tudo der certo receberá uma mensagem como essa:

      query: SELECT * FROM current_schema()
      query: CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
      query: SHOW server_version;
      Running at http://localhost:3000

<a name="devs"></a>

## 6. Desenvolvedores

- <a name="henrique" href="https://www.linkedin.com/in/henriqueyujiandrade/" target="_blank">Henrique Andrade</a>
- <a name="lestar" href="https://www.linkedin.com/in/lestar-henriques-221922172/" target="_blank">Lestar de Angelo</a>
- <a name="pedro" href="https://www.linkedin.com/in/pedro-htbl/" target="_blank">Pedro Henrique</a>
- <a name="victoria" href="https://www.linkedin.com/in/victoriavianx/" target="_blank">Victoria Viana</a>
- <a name="yasmin" href="https://www.linkedin.com/in/devyasmin/" target="_blank">Yasmin Alves</a>
