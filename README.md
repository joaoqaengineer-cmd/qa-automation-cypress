# 🧪 QA Automation Portfolio – Cypress

Este repositório faz parte do meu portfólio como **QA Engineer**, com foco em **automação de testes end‑to‑end utilizando Cypress**, boas práticas de código e organização de projeto.

O objetivo principal é demonstrar **pensamento de qualidade**, **cobertura de cenários reais** e **estrutura profissional**, similares às encontradas em projetos de empresas.

---

## 🎯 Aplicação testada

* **Sistema:** SauceDemo
* **URL:** [https://www.saucedemo.com/](https://www.saucedemo.com/)
* **Tipo:** Aplicação web para demonstração de testes automatizados

---

## 🧠 O que este projeto demonstra

* Automação de testes E2E com Cypress
* Cobertura de **fluxos positivos e negativos**
* Uso do padrão **Page Object Model (POM)**
* Organização por funcionalidade
* Testes legíveis, reutilizáveis e fáceis de manter

---

## 🧪 Cenários automatizados – Login

Os testes de login cobrem regras essenciais de negócio:

### ✅ Login com sucesso

* Usuário válido
* Redirecionamento para a página de produtos

### ❌ Login inválido

* Credenciais incorretas
* Bloqueio de acesso
* Exibição de mensagem de erro

### ⚠️ Campos obrigatórios

* Tentativa de login sem preencher usuário e/ou senha
* Validação de mensagens obrigatórias

### 🚫 Usuário bloqueado

* Usuário `locked_out_user`
* Sistema impede autenticação mesmo com senha correta

---

## 🧱 Estrutura do projeto

```bash
cypress/
 ├─ e2e/
 │   └─ login.cy.js        # Casos de teste de login
 │
 ├─ pages/
 │   └─ login.page.js      # Page Object da tela de login
 │
 └─ cypress.config.js
```

---

## 🧩 Page Object Model (POM)

O projeto utiliza **Page Object** para separar:

* 🔹 Lógica de interação com a interface
* 🔹 Regras e validações dos testes

### Benefícios:

* Menor duplicação de código
* Manutenção facilitada
* Testes mais limpos e legíveis

Exemplo de uso no teste:

```js
LoginPage.login('standard_user', 'secret_sauce')
```

---

## 🚀 Tecnologias utilizadas

* **JavaScript**
* **Cypress**
* **Node.js**
* **Git & GitHub**

---

## ▶️ Como executar o projeto

### Pré‑requisitos

* Node.js instalado
* Git instalado

### Passos

```bash
git clone https://github.com/joaoqaengineer-cmd/qa-automation-cypress.git
cd qa-automation-cypress

npm install
npx cypress open
```

Ou em modo headless:

```bash
npx cypress run
```

---

## 📌 Próximas evoluções

* Uso de **fixtures** para dados de teste
* Criação de **comandos customizados** (`cy.login()`)
* Relatórios de execução
* Integração com CI/CD

---

## 👤 Autor

**João Guilherme**
QA Engineer | Testes Manuais & Automatizados
Foco em qualidade, aprendizado contínuo e boas práticas de software.

🔗 LinkedIn: [https://www.linkedin.com/in/joão-guilherme-silva-b57bb2383/](https://www.linkedin.com/in/joão-guilherme-silva-b57bb2383/)

---

> Este projeto é parte do meu desenvolvimento profissional como QA e está em constante evolução.
