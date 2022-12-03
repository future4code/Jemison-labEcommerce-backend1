
# Projeto Revisão Módulo 5 (Backend) - API Filmes e Personagens

### Descrição do Projeto

Neste projeto de revisão, criei uma API onde é possível criar entradas para as entidades Movies e Characters, localizadas em meu banco de dados, e relacioná-las, tornando possível obter arrays de objetos nos quais vemos em quais filmes o personagem X apareceu ou quais os personagens do filme Y.

É possível também deletar filmes e personagens se necessário.

### Stack

- Typescript
- Node
- knex
- express
- mySQL

### Instalação

Rode o comando abaixo para instalar todas as dependências relacionadas ao projeto.

`
npm i
`

### Documentação da API

[Documentação](https://documenter.getpostman.com/view/22437697/2s8YYLHLrb)

### Deploy

[Render - Deploy](https://api-revisao.onrender.com)

### Autor

[@sterx17](https://github.com/sterx17)

### Possíveis melhorias

Integrar essa API a uma API de filmes maior e proporcionar ao usuário a opção de, ao adicionar um personagem, inserir na entidade Filmes todos os filmes em que ele aparece automaticamente. E uma nova entidade ActingMembers que permita a mesma coisa.