import React from 'react';
import './Login.css';
import Header from '../Header/Header';

const Login = () => {
    return (
        <div>
            <Header />
            <div className="login-container">
                <form className="login-form">
                    <h2>ВХОД</h2>
                    <div className="form-group">
                        <input type="email" placeholder="E-mail" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit">ВОЙТИ</button>
                    <p className="login-link">Зарегистрироваться</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
