import React, { useState, useEffect } from 'react';
import './Registration.css';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', color: '', visible: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setNotification({ message: 'Пароли не совпадают!', color: '#f44336', visible: true });
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

      if (response.ok) {
        setNotification({ message: 'Успешно зарегистрирован!', color: '#4caf50', visible: true });
      } else {
        setNotification({ message: `Ошибка регистрации!`, color: '#f44336', visible: true });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({ message: 'Ошибка сети. Повторите позднее...', color: '#f44336', visible: true });
    }
  };

  useEffect(() => {
    if (notification.visible) {
      const hideTimer = setTimeout(() => {
        setNotification({ ...notification, visible: false });
      }, 7000); // Полное скрытие через 7 секунд

      return () => {
        clearTimeout(hideTimer);
      };
    }
  }, [notification]);

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
      {notification.visible && (
        <Notification
          message={notification.message}
          color={notification.color}
          onClose={() => setNotification({ ...notification, visible: false })}
        />
      )}
    </div>
  );
};

export default Registration;
