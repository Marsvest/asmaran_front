import React, { useState } from 'react';
import './Registration.css';
import '../Header/Header'
import Header from '../Header/Header';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    const user = {
      email,
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        // Успешная регистрация
        alert("Успешно зарегистирован!");
      } else {
        // Ошибка регистрации
        alert(`Ошибка регистрации: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed: Network error');
    }
  };

  return (
    <div>
      <Header />
      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>РЕГИСТРАЦИЯ</h2>
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
              type="text"
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
          <p className="login-link">Войти</p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
