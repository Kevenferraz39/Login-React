<center><h1>Login com react</h1></center>

## Índice

- [Índice](#Índice)
- [Instalação](#instalação)

## Instalação

1. Instale o Express e o JWT como dependências:
```bash
npm install express jsonwebtoken

2. Crie o servidor Express com um endpoint de login:

```bash
// server.js
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// Middleware para verificar se o token é válido
const validateToken = (req, res, next) => {
 const token = req.header('Authorization');
 if (!token) return res.status(401).send('Acesso negado. Token não fornecido.');

 try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;
    next();
 } catch (error) {
    res.status(400).send('Token inválido.');
 }
};

// Endpoint de login
app.post('/login', (req, res) => {
 // Valide as credenciais do usuário
 const { username, password } = req.body;

 // Caso as credenciais sejam válidas, crie e envie um token JWT
 if (username && password) {
    const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
    res.header('Authorization', token).send('Usuário logado com sucesso.');
 } else {
    res.status(400).send('Credenciais inválidas.');
 }
});

// Proteja o endpoint para apenas usuários autenticados
app.get('/protected', validateToken, (req, res) => {
 res.send('Bem-vindo ao conteúdo protegido.');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}.`));
```
3. No lado do cliente, crie o componente de login:

```bash
// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const response = await axios.post('http://localhost:3001/login', { username, password });

       // Guarde o token JWT em um cookie HTTP Secure ou no armazenamento local seguro
       document.cookie = `token=${response.data}`;
    } catch (error) {
       console.error('Erro no login:', error);
    }
 };

 return (
    <form onSubmit={handleSubmit}>
       <label>
          Nome de usuário:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
       </label>
       <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </label>
       <button type="submit">Entrar</button>
    </form>
 );
};

export default Login;
