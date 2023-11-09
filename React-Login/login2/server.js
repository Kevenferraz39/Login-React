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