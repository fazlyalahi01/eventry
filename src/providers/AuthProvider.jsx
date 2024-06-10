'use client'

import React, { useState } from 'react';

import { AuthContext } from '../contexts';

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    console.log(auth, "auth");

    React.useEffect(() => {
        const storedAuth = localStorage.getItem("auth");
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
        }
    }, [])

    React.useEffect(() => {
        if (auth) {
            localStorage.setItem("auth", JSON.stringify(auth))
        } else {
            localStorage.removeItem("auth")
        }
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}