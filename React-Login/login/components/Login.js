// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const history = useHistory();

 const handleSubmit = async (e) => {
    e.preventDefault();
    // Realize a verificação de email e senha com o banco de dados
    history.push('/register');
 };

 return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
 );
};

export default Login;