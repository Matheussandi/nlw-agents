# NLW Agents - Salas de Perguntas Inteligentes

Uma aplicação moderna que permite criar salas onde você pode gravar áudio e fazer perguntas que são respondidas por IA baseadas no conteúdo gravado.

## 🌟 Funcionalidades

- **Criação de Salas**: Crie salas personalizadas com nome e descrição
- **Gravação de Áudio**: Grave áudio diretamente no navegador em tempo real
- **Perguntas Inteligentes**: Faça perguntas e receba respostas baseadas no áudio gravado
- **IA com Gemini**: Utiliza Google Gemini para transcrição e geração de respostas
- **Interface Moderna**: Interface responsiva construída com React e Tailwind CSS

## 🚀 Tecnologias

**Backend:**
- Node.js com TypeScript
- Fastify (API REST)
- Drizzle ORM + PostgreSQL
- Google Gemini AI
- Docker

**Frontend:**
- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Hook Form + Zod
- TanStack Query

## 📁 Estrutura do Projeto

```
├── server/          # API Backend
│   ├── src/
│   ├── docker/
│   └── ...
└── web/            # Frontend React
    ├── src/
    ├── public/
    └── ...
```

## 🛠️ Configuração Rápida

1. Clone o repositório
2. Configure as variáveis de ambiente
3. Execute o backend e frontend (veja READMEs específicos nas pastas)

## 📝 Como Usar

1. **Criar Sala**: Acesse a aplicação e crie uma nova sala
2. **Gravar Áudio**: Entre na sala e use a função de gravação
3. **Fazer Perguntas**: Digite suas perguntas sobre o conteúdo gravado
4. **Receber Respostas**: A IA irá responder baseada no áudio transcrito

## 📚 Documentação

- [Configuração do Backend](./server/README.md)
- [Configuração do Frontend](./web/README.md)

## 🤝 Contribuição

Este projeto foi desenvolvido durante o NLW da Rocketseat. Sinta-se à vontade para fazer melhorias e contribuições!

## 📄 Licença

Projeto desenvolvido para fins educacionais.
