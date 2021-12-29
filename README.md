# Desafio Hoobox

Construir uma API para a realização de login e cadastro de usuários/cadastro e listagem de pacientes.

<a href="https://github.com/j-rdel/desafio-hoobox-front">Link para repositório front-end</a>

------

## Tecnologias utilizadas 💻

- NodeJS
- Express
- Cors
- JWT
- Knex

------
### Como utilizar

```bash

# Clone o repositório em sua máquina
$ git clone https://github.com/j-rdel/desafio-hoobox-api.git

# Acesse o repositório
$ cd desafio-hoobox-api

# Instale as dependencias
$ yarn install
#ou
$ npm install

# Acesse a pasta src/ para rodar as migrations com o knex
$ cd src
$ knex migrate:latest

# Caso sua máquina ainda não possui o knex instalando globalmente utilize o seguinte comando e quando instalado tente rodar novamente o comando acima
$ npm install knex -g

# Volte para o diretório raiz do projeto e inicie a API
$ yarn start
#ou
$ npm start

```