import React, { useState, useEffect } from 'react';
import './Login.css';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';

const Login = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', color: '', visible: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    try {
      const response = await fetch('http://pybyte.ru/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setNotification({ message: 'Успешный вход!', color: '#4caf50', visible: true });
        // Здесь вы можете перенаправить пользователя или сохранить токен
      } else {
        setNotification({ message: `Неправильный логин/пароль!`, color: '#f44336', visible: true });
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
      }, 7000);

      return () => {
        clearTimeout(hideTimer);
      };
    }
  }, [notification]);

  return (
    <div>
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>ВХОД</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Логин"
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

export default Login;
