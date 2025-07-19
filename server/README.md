# Server - Backend API

API REST construída com Fastify e TypeScript para o sistema de salas de perguntas inteligentes.

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **Google Gemini AI** - Transcrição e geração de respostas
- **Docker** - Containerização do banco de dados
- **Zod** - Validação de dados

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- Conta Google Cloud (para Gemini AI)

## ⚙️ Configuração

1. **Clone o repositório e navegue para a pasta server:**
   ```bash
   cd server
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz da pasta server:
   ```env
   # Banco de dados
   DATABASE_URL="postgresql://postgres:docker@localhost:5432/nlw_agents"
   
   # Google Gemini AI
   AI_API_KEY="sua_api_key_do_gemini"
   ```

4. **Inicie o banco de dados com Docker:**
   ```bash
   docker-compose up -d
   ```

5. **Execute as migrações do banco:**
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

6. **Popule o banco com dados de teste (opcional):**
   ```bash
   npm run db:seed
   ```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

A API estará disponível em `http://localhost:3333`

## 📊 Scripts Disponíveis

- `npm run dev` - Executa em modo de desenvolvimento com hot reload
- `npm start` - Executa em modo de produção
- `npm run db:generate` - Gera migrações do banco
- `npm run db:migrate` - Executa migrações pendentes
- `npm run db:seed` - Popula o banco com dados de teste

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com as seguintes tabelas:

- **rooms** - Salas criadas pelos usuários
- **questions** - Perguntas feitas nas salas
- **audio_chunks** - Chunks de áudio transcritos com embeddings

### Migrações

As migrações são gerenciadas pelo Drizzle ORM. Para criar uma nova migração:

```bash
# Modifique o schema em src/db/schema/
npm run db:generate
npm run db:migrate
```

## 🔌 Endpoints da API

### Salas
- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala

### Perguntas
- `GET /rooms/:roomId/questions` - Lista perguntas de uma sala
- `POST /rooms/:roomId/questions` - Cria uma pergunta na sala

### Áudio
- `POST /rooms/:roomId/audio` - Upload de chunk de áudio

## 🧠 Integração com IA

O projeto utiliza Google Gemini para:

1. **Transcrição de Áudio**: Converte áudio em texto
2. **Geração de Embeddings**: Cria vetores para busca semântica
3. **Geração de Respostas**: Responde perguntas baseadas no conteúdo

### Configuração do Gemini

1. Acesse [Google AI Studio](https://aistudio.google.com/)
2. Gere uma API Key
3. Adicione a chave no arquivo `.env`

## 🐳 Docker

O projeto inclui um `docker-compose.yml` para o banco PostgreSQL:

```bash
# Iniciar serviços
docker-compose up -d

# Parar serviços
docker-compose down

# Ver logs
docker-compose logs -f
```

## 📁 Estrutura do Código

```
src/
├── db/                 # Configuração do banco
│   ├── connection.ts   # Conexão com PostgreSQL
│   ├── seed.ts        # Script de população
│   ├── schema/        # Schemas das tabelas
│   └── migrations/    # Migrações do banco
├── http/              # Rotas da API
│   └── routes/        # Endpoints específicos
├── services/          # Serviços externos
│   └── gemini.ts      # Integração com Google Gemini
├── env.ts             # Validação de variáveis de ambiente
└── server.ts          # Configuração do servidor
```

## 🔧 Desenvolvimento

### Adicionando uma Nova Rota

1. Crie o arquivo em `src/http/routes/`
2. Implemente usando o padrão Fastify + Zod
3. Registre a rota em `src/server.ts`

### Modificando o Schema

1. Edite os arquivos em `src/db/schema/`
2. Gere a migração: `npm run db:generate`
3. Execute a migração: `npm run db:migrate`

## 🧪 Testes

Para executar os testes (quando implementados):

```bash
npm test
```

## 📝 Logs

O servidor utiliza o sistema de logs padrão do Fastify. Em desenvolvimento, os logs são exibidos no console.

## 🚨 Troubleshooting

### Problemas Comuns

1. **Erro de conexão com banco**: Verifique se o Docker está rodando
2. **API Key inválida**: Confirme a chave do Gemini no `.env`
3. **Migração falhou**: Verifique se o banco está acessível

### Reset do Banco

```bash
docker-compose down -v  # Remove volumes
docker-compose up -d    # Recria o banco
npm run db:migrate      # Executa migrações
npm run db:seed         # Popula dados
```
