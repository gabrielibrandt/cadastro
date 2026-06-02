# 📇 Cadastro de Contatos

Projeto Full Stack desenvolvido para praticar conceitos fundamentais de desenvolvimento web utilizando HTML, CSS, JavaScript e C# com ASP.NET Core.

## 🚀 Funcionalidades

- Cadastrar contatos
- Listar contatos cadastrados
- Excluir contatos
- Interface responsiva
- Integração entre Frontend e Backend via API REST

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript
- Fetch API

### Backend
- C#
- ASP.NET Core Web API

---

## 📁 Estrutura do Projeto

```txt
CadastroContatos/

├── Backend/
│   ├── Controllers/
│   │   └── ContactsController.cs
│   │
│   ├── Models/
│   │   └── Contact.cs
│   │
│   ├── Program.cs
│   └── Backend.csproj
│
└── Frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 📚 Conceitos Aplicados

### HTML
- Estrutura semântica
- Formulários
- Inputs
- Botões

### CSS
- Flexbox
- Responsividade
- Estilização de formulários
- Hover effects

### JavaScript
- Manipulação do DOM
- Async/Await
- Fetch API
- Eventos

### C#
- Classes e Objetos
- Propriedades
- List<T>
- Controllers
- Métodos HTTP

### API REST
- GET
- POST
- DELETE

---

## 🔗 Endpoints

### Listar contatos

```http
GET /api/contacts
```

### Cadastrar contato

```http
POST /api/contacts
```

Exemplo:

```json
{
  "name": "João Silva",
  "email": "joao@email.com"
}
```

### Excluir contato

```http
DELETE /api/contacts/{id}
```

---

## ▶️ Como Executar

### Backend

Entre na pasta do backend:

```bash
cd back
```

Execute:

```bash
dotnet restore
dotnet run
```

A API ficará disponível em:

```txt
http://localhost:PORTA
```

> Substitua `PORTA` pela porta exibida no terminal.

---

### Frontend

Abra a pasta Frontend no VS Code e execute com a extensão Live Server.

Caso necessário, ajuste a URL da API no arquivo:

```javascript
script.js
```

Exemplo:

```javascript
const API = "http://localhost:5228/api/contacts";
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para consolidar conhecimentos básicos de desenvolvimento Full Stack, demonstrando comunicação entre frontend e backend, manipulação de dados e criação de APIs utilizando C# e ASP.NET Core.

---

## 👨‍💻 Autor

Desenvolvido por Gabrieli Brandt para fins de estudo e portfólio.
