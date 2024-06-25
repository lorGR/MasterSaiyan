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
  )
}

export default App;