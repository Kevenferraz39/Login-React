// Register.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const history = useHistory();

 const handleSubmit = async (e) => {
    e.preventDefault();
    // Realize o registro do usuário no banco de dados
    history.push('/');
 };

 return (
    <div>
      <h1>Registrar</h1>
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
        <button type="submit">Registrar</button>
      </form>
    </div>
 );
};

export default Register;