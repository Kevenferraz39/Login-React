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