# NLW Agents Server

## Descrição

Backend do projeto NLW Agents, utilizando Node.js, TypeScript, Drizzle ORM e PostgreSQL.

## Tecnologias e Bibliotecas Utilizadas

- Node.js
- TypeScript
- Drizzle ORM
- PostgreSQL
- Docker (para banco de dados)

## Padrões de Projeto

- Estrutura modular de pastas (`src/`)
- Separação de responsabilidades (conexão, schema, server)
- Variáveis de ambiente para configuração

## Setup do Projeto

### Pré-requisitos

- Node.js >= 18
- Docker e Docker Compose

### Instalação

1. Clone o repositório:
   ```bash
   git clone <repo-url>
   cd server
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Copie o arquivo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
4. Suba o banco de dados com Docker Compose:
   ```bash
   docker-compose up -d
   ```
5. Execute as migrações (se necessário):
   ```bash
   # Ajuste conforme o ORM utilizado
   # Exemplo para Drizzle:
   npm run migrate
   ```
6. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Configuração

- Edite o arquivo `.env` para ajustar as variáveis de ambiente, especialmente a `DATABASE_URL`.

## Estrutura de Pastas

```
server/
├── src/
│   ├── db/
│   │   ├── connection.ts
│   │   ├── migrations/
│   │   └── schema/
│   ├── env.ts
│   └── server.ts
├── package.json
├── tsconfig.json
├── docker-compose.yml
└── .env.example
```

## Rotas

As principais rotas disponíveis na API:

| Método | Rota       | Descrição            |
| ------ | ---------- | -------------------- |
| GET    | /health    | Health check da API  |
| GET    | /rooms     | Lista todas as salas |
| POST   | /rooms     | Cria uma nova sala   |
| GET    | /rooms/:id | Detalhes de uma sala |
| PATCH  | /rooms/:id | Atualiza uma sala    |
| DELETE | /rooms/:id | Remove uma sala      |

## Observações

- O banco de dados padrão é `agents` (veja `.env.example`).
- O usuário e senha padrão do banco são `docker`.
