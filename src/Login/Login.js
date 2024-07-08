import React, { useState } from 'react';
import './Login.css';
import Header from '../Header/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        // Успешный вход
        alert("Login successful!");
        // Здесь вы можете перенаправить пользователя или сохранить токен
      } else {
        // Ошибка входа
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed: Network error');
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>ВХОД</h2>
          <div className="form-group">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">ВОЙТИ</button>
          <p className="login-link">Зарегистрироваться</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
