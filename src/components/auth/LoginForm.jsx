"use client"

import React from "react";
import { fetchLoginUser } from "../../lib/queries"

export const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        const credentials = {
            email: email,
            password: password
        };

        console.log(credentials);

        try {
            const user = await fetchLoginUser(credentials);
            console.log(user);
        } catch (error) {

        }
    }
    return (
        <form className="login-form" onSubmit={handleSubmitLogin}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button
                type="submit"
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Login
            </button>
        </form>
    );
}