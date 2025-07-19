# Web - Frontend React

Aplicação frontend construída com React, TypeScript e Vite para o sistema de salas de perguntas inteligentes.

## 🛠️ Tecnologias

- **React 19** - Biblioteca UI com hooks modernos
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **TanStack Query** - Gerenciamento de estado do servidor
- **React Hook Form + Zod** - Formulários com validação
- **React Router Dom** - Roteamento SPA
- **Sonner** - Notificações toast
- **Lucide React** - Ícones SVG

## 📋 Pré-requisitos

- Node.js 18+
- Backend da aplicação rodando (veja `/server/README.md`)

## ⚙️ Configuração

1. **Navegue para a pasta web:**
   ```bash
   cd web
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz da pasta web:
   ```env
   VITE_API_URL="http://localhost:3333"
   ```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`

### Build de Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 📱 Funcionalidades

### Páginas Principais

- **Home** (`/`) - Lista de salas e criação de novas salas
- **Sala** (`/room/:roomId`) - Interface da sala com perguntas
- **Gravação** (`/room/:roomId/audio`) - Interface de gravação de áudio

### Funcionalidades Implementadas

- ✅ Criar salas com nome e descrição
- ✅ Listar todas as salas
- ✅ Gravar áudio em tempo real (WebRTC)
- ✅ Fazer perguntas sobre o conteúdo gravado
- ✅ Visualizar respostas geradas por IA
- ✅ Interface responsiva e acessível

## 🎨 Design System

O projeto utiliza **shadcn/ui** como base para componentes, customizado com Tailwind CSS.

### Componentes UI Disponíveis

- `Button` - Botões com variantes
- `Card` - Containers de conteúdo
- `Form` - Componentes de formulário
- `Input` - Campos de entrada
- `Badge` - Tags e labels
- `Skeleton` - Estados de carregamento

### Tema e Cores

- **Modo Escuro**: Interface principal em tons escuros
- **Cores de Destaque**: Sistema de cores consistente
- **Responsivo**: Mobile-first design

## 📁 Estrutura do Código

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── create-room-form.tsx
│   ├── question-form.tsx
│   ├── question-item.tsx
│   ├── question-list.tsx
│   └── room-list.tsx
├── http/                # Hooks de API
│   ├── types/           # Tipos TypeScript da API
│   ├── use-create-room.ts
│   ├── use-create-question.ts
│   ├── use-room-questions.ts
│   └── use-rooms.ts
├── lib/                 # Utilitários
│   ├── dayjs.ts         # Configuração de datas
│   ├── env.ts          # Validação de env vars
│   └── utils.ts        # Funções auxiliares
├── pages/              # Páginas da aplicação
│   ├── create-room.tsx
│   ├── record-room-audio.tsx
│   └── room.tsx
├── App.tsx             # Componente raiz
├── main.tsx            # Entry point
└── index.css           # Estilos globais
```

## 🔌 Integração com API

### Hooks Personalizados

- `useRooms()` - Lista salas
- `useCreateRoom()` - Cria nova sala
- `useRoomQuestions(roomId)` - Lista perguntas da sala
- `useCreateQuestion(roomId)` - Cria pergunta

### Gerenciamento de Estado

- **TanStack Query** para cache e sincronização
- **React Hook Form** para formulários
- **Estado local** com hooks do React

## 🎙️ Gravação de Áudio

### Funcionalidades

- Detecção automática de suporte do navegador
- Gravação em chunks de 5 segundos
- Upload automático em background
- Feedback visual do estado de gravação

### APIs Utilizadas

- **MediaRecorder API** - Gravação de áudio
- **getUserMedia** - Acesso ao microfone
- **FormData** - Upload de arquivos

### Configuração de Áudio

```javascript
const audio = await navigator.mediaDevices.getUserMedia({
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44_100,
  }
})
```

## 🔧 Desenvolvimento

### Adicionando um Novo Componente

1. Crie o arquivo em `src/components/`
2. Use TypeScript para tipagem
3. Siga os padrões do projeto (props interface)
4. Implemente responsividade com Tailwind

### Adicionando uma Nova Página

1. Crie o arquivo em `src/pages/`
2. Configure a rota em `App.tsx`
3. Implemente navegação nos componentes

### Estilização

- Use classes Tailwind CSS
- Mantenha consistência com o design system
- Utilize variáveis CSS customizadas quando necessário

## 📱 Responsividade

O projeto é mobile-first e suporta:

- **Mobile** (sm): 640px+
- **Tablet** (md): 768px+
- **Desktop** (lg): 1024px+
- **Desktop Large** (xl): 1280px+

## 🧪 Testes

Para executar os testes (quando implementados):

```bash
npm run test
```

## 📦 Build e Deploy

### Variáveis de Ambiente de Produção

```env
VITE_API_URL="https://sua-api-producao.com"
```

### Build Otimizada

```bash
npm run build
```

O build gera arquivos estáticos na pasta `dist/` prontos para deploy.

## 🚨 Troubleshooting

### Problemas Comuns

1. **API não encontrada**: Verifique se o backend está rodando
2. **Microfone não funciona**: Confirme permissões do navegador
3. **Build falha**: Verifique se todas as env vars estão definidas

### Navegadores Suportados

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Permissões Necessárias

- **Microfone**: Para gravação de áudio
- **HTTPS**: Necessário para MediaRecorder em produção
