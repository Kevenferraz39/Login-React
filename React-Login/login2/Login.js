loREimport React, { useState } from 'react';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@email.com' && password === 'userpassword') {
      alert('Logged in successfully');
      setEmail('');
      setPassword('');
    } else {
      alert('Invalid email or password');
    }
 };

 const handleReset = () => {
    setEmail('');
    setPassword('');
 };

 return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
 );
};

export default Login;