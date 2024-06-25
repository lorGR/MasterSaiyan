import React, { useState } from "react";

import { handleLogin } from "../utils/utils";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    async function handleLoginSubmitted(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const loginMessage = await handleLogin(username, password);
        loginMessage ? setMessage(loginMessage) : setMessage('')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmitted}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="password">Password:</label>
                <input type="password" name="username" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
            {message.length > 0 && <p>{message}</p>}
        </div>
    )
}

export default Login;