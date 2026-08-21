<p align="center">
  <img src="dist/images/logo-bytebank.svg" alt="Logo Bytebank" width="220" />
</p>

<h1 align="center">Bytebank</h1>

<p align="center">
  Simulação de aplicação bancária construída com TypeScript puro, HTML e CSS.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Regras de negócio](#-regras-de-negócio)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar](#️-como-executar)
- [Melhorias futuras](#-melhorias-futuras)
- [Autor](#-autor)

## 📖 Sobre o projeto

**Bytebank** é uma aplicação front-end que simula a tela inicial de um banco digital. Nela, o usuário visualiza o saldo da conta corrente e a data do último acesso, além de poder registrar novas transações financeiras — que atualizam o saldo automaticamente na interface.

O projeto foi desenvolvido em **TypeScript puro** (sem frameworks ou bibliotecas externas), com foco em boas práticas de tipagem, organização de módulos e separação de responsabilidades entre os componentes da interface e a lógica de negócio da conta.

## ✅ Funcionalidades

- 💰 Consulta do saldo atual da conta corrente
- 🗓️ Exibição da data de acesso, formatada por extenso (ex: *quinta-feira, 08/09/2022*)
- ➕ Registro de novas transações através de um formulário, informando:
  - Tipo (Depósito, Transferência ou Pagamento de Boleto)
  - Valor
  - Data
- 🔄 Atualização automática do saldo na tela logo após cada transação
- ⚠️ Validações de formulário: campos obrigatórios, valor maior que zero e saldo suficiente para transações de débito
- 💵 Formatação de valores monetários no padrão brasileiro (R$)
- 📃 Extrato de transações organizado por mês (dados de exemplo na interface)

## 📋 Regras de negócio

- Toda transação possui **somente** três informações: data, tipo e valor (que deve ser maior que zero).
- Transações do tipo **Depósito** somam o valor ao saldo da conta.
- Transações do tipo **Transferência** e **Pagamento de Boleto** subtraem o valor do saldo da conta.
- O saldo é sempre atualizado na tela imediatamente após cada transação.
- As informações da conta (saldo, data de acesso e transações) ficam centralizadas em um módulo próprio, `Conta`.
- O componente **Nova Transação** é responsável apenas por coletar os dados do formulário e repassá-los ao módulo `Conta`.
- O componente **Saldo** é responsável por exibir o saldo e a data de acesso, buscando essas informações a partir do módulo `Conta`.

## 🛠 Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/) (compilado para ES2025)
- HTML5
- CSS3 (organizado em módulos `base/` e `componentes/`)
- [Five Server](https://github.com/yandeu/five-server) — servidor local com live-reload para desenvolvimento

## 📂 Estrutura do projeto

```
bytebank-app/
├── src/                        # Código-fonte TypeScript
│   ├── components/
│   │   ├── nova-transacao-component.ts
│   │   └── saldo-component.ts
│   ├── types/
│   │   ├── Conta.ts
│   │   ├── FormatoData.ts
│   │   ├── TipoTransacao.ts
│   │   └── Transacao.ts
│   ├── utils/
│   │   └── formatters.ts
│   └── main.ts
├── dist/                       # Aplicação servida (HTML, CSS, imagens e JS compilado)
│   ├── assets/
│   ├── css/
│   ├── images/
│   ├── js/                     # Gerado automaticamente pelo compilador TypeScript
│   └── index.html
├── fiveserver.config.js        # Configuração do servidor de desenvolvimento
├── tsconfig.json                # Configuração do compilador TypeScript
├── Requisitos.txt              # Especificação das regras de negócio do projeto
└── .gitignore
```

## ▶️ Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (para o compilador TypeScript e o servidor local)
- [TypeScript](https://www.typescriptlang.org/) instalado globalmente:

```bash
npm install -g typescript
```

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/Juniklx/bytebank-app.git
cd bytebank-app
```

2. Compile os arquivos TypeScript (a saída é gerada em `dist/js`, conforme configurado no `tsconfig.json`):

```bash
tsc
```

> Use `tsc --watch` para recompilar automaticamente a cada alteração nos arquivos `.ts`.

3. Sirva a pasta `dist` com um servidor local. Você pode usar o **Five Server**, já configurado no projeto (`fiveserver.config.js`, porta `5500`):

```bash
npx five-server
```

Ou, se estiver no VS Code, instale a extensão **Five Server** e clique em "Go Live" — a configuração do `.vscode/settings.json` já aponta para a pasta `dist`.

4. Acesse no navegador:

```
http://localhost:5500
```

## 🚧 Melhorias futuras

- [ ] Tornar o extrato de transações dinâmico, exibindo o histórico real registrado pelo usuário
- [ ] Persistir os dados da conta (ex: `localStorage` ou uma API)
- [ ] Adicionar testes automatizados
- [ ] Melhorar a responsividade para dispositivos móveis
- [ ] Implementar autenticação de usuário

## 👤 Autor

Desenvolvido por [**Juniklx**](https://github.com/Juniklx).
