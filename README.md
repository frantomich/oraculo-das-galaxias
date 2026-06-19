# Oráculo das Galáxias

Um pequeno aplicativo web interativo que gera previsões e conselhos cósmicos para aventureiros espaciais usando a API Gemini (Google GenAI).

**Principais características**

- Gera respostas curtas e enigmáticas através do modelo Gemini (via `src/services/oracle.ts`).
- UI leve em React com componentes reutilizáveis em `src/components`.
- Estilização com Tailwind / CSS local e utilitários em `src/lib`.

**Stack**

- Bundler: Vite
- Frontend: React + TypeScript
- Estilos: TailwindCSS
- IA: Google GenAI (Gemini 3.5 Flash)


**Instalação**

1. Instale as dependências:

```
npm install
```

2. Crie um arquivo `.env` na raiz com a sua chave Gemini:

```
VITE_GEMINI_API_KEY="sua chave aqui"
```

3. Rode em modo desenvolvimento:

```
npm run dev
```

**Scripts úteis**

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — compila o projeto para produção
- `npm run preview` — serve a build para preview

**Como usar**

1. Abra o app no navegador (geralmente `http://localhost:5173`).
2. Selecione um sistema estelar no cartão principal (`src/components/OracleCard.tsx`).
3. Clique em "Revelar!" para abrir o diálogo que consulta o Oráculo e exibe a previsão (`src/components/OracleDialog.tsx`).

As chamadas à API estão centralizadas em `src/services/oracle.ts` (usa `@google/genai`).

**Estrutura importante**

- `src/components/OracleCard.tsx` — formulário e seleção do destino.
- `src/components/OracleDialog.tsx` — diálogo que exibe a resposta do oráculo.
- `src/services/oracle.ts` — integração com Gemini (configuração do prompt).
- `src/lib/utils.ts` — utilitários de classe CSS (`cn`).

**Observações / Segurança**

- A chave da API deve ser mantida privada (não comitar `.env` em repositórios públicos).
- O prompt system em `oracle.ts` limita as respostas a 50 palavras e força português brasileiro.
