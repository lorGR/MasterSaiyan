import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleFormSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password
      });
      const data = response.data;
      
      if(data.success) {
        setMessage('Login successful');
      } else {
        setMessage('Login failed:' + data.message);
      }
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('An error occurred while logging in');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id='username'
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default App;