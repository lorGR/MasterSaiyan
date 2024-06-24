import React, { useState } from "react";

import { handleLogin } from "../utils/utils";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleLoginSubmitted(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        handleLogin(username, password);
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
        </div>
    )
}

export default Login;