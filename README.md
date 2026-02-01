# 🧪 QA Automation – Cypress E2E

Projeto base de **automação de testes end-to-end** utilizando **Cypress**, criado com foco em boas práticas de QA, organização de código e escalabilidade.

Este repositório serve como **fundação** para evolução contínua, incluindo novos cenários, camadas de teste e integrações futuras.

---

## 📌 Objetivo do Projeto

- Validar fluxos críticos da aplicação web
- Aplicar boas práticas de automação de testes
- Demonstrar organização profissional para ambiente real de times de QA
- Servir como base para evolução (API, CI/CD, relatórios, etc.)

A aplicação utilizada para testes é o **SauceDemo**, amplamente usada para fins educacionais e prática de automação.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Cypress** – Automação de testes E2E
- **Node.js**
- **Page Object Model (POM)**
- **Fixtures** para gerenciamento de dados de teste

---

## 📁 Estrutura do Projeto

```text
cypress/
├─ e2e/
│  └─ login.cy.js        # Cenários de teste
│
├─ pages/
│  └─ login.page.js     # Page Object da tela de login
│
├─ fixtures/
│  └─ users.json        # Massa de dados de teste
│
├─ support/
│  ├─ commands.js
│  └─ e2e.js
```

---

## 🧠 Estratégia de Testes

- Separação clara entre:
  - **Lógica de teste** (specs)
  - **Interação com a UI** (Page Objects)
  - **Dados de teste** (fixtures)
- Testes focados em comportamento, não implementação
- Cobertura de cenários:
  - Login com sucesso
  - Usuário bloqueado
  - Campos obrigatórios vazios
  - Validações de erro

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18+ ou 20+)
- npm ou yarn

### Instalação
```bash
npm install
```

### Executar testes em modo interativo
```bash
npx cypress open
```

### Executar testes em modo headless (CI/CD)
```bash
npx cypress run
```

---

## 📊 Evidências de Execução

- Screenshots automáticos em falhas
- Execução headless pronta para pipelines CI

---

## 🚀 Próximos Passos (Roadmap)

Este projeto será evoluído gradualmente com:

- [ ] Testes de API (`cy.request`)
- [ ] Integração com CI/CD (GitHub Actions)
- [ ] Relatórios de execução (Allure / Mochawesome)
- [ ] Custom Commands
- [ ] Testes de regressão e smoke
- [ ] Boas práticas de performance e estabilidade

---

## 👤 Autor

**João Guilherme**  
QA Engineer focado em testes manuais e automatizados, sempre buscando qualidade, clareza e melhoria contínua.

🔗 LinkedIn: www.linkedin.com/in/joão-guilherme-silva-b57bb2383 
🐙 GitHub: *(este repositório)*

---

> “Automação não é sobre testar mais rápido, é sobre testar melhor.”
