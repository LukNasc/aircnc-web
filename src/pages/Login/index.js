import React, { useState } from 'react';
import api from '../../services/api';


export default function Login({ history }) {
    const [email, setEmail] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/users', { email });
        const { _id } = response.data;

        localStorage.setItem('user', _id);
        history.push('/dashboard');
    }

    return (
        <>
            <p>
                Ofereça <b>spots</b> para programadores  e encontre <b>talentos</b> para a sua empresa
          </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor email"
                    autoComplete="off"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}