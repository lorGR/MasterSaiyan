import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Main from "./pages/Main";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', {
        username,
        password
      });
      const data = response.data;

      if (data.success) {
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
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={handleFormSubmit}>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       id='username'
    //       type="text" 
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       id='password'
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">submit</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
  )
}

export default App;