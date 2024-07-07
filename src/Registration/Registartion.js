import React from 'react';
import './Registration.css';
import '../Header/Header'
import Header from '../Header/Header';

const Registration = () => {
  return (
    <div>
      <Header />
      <div className="registration-container">
        <form className="registration-form">
          <h2>РЕГИСТРАЦИЯ</h2>
          <div className="form-group">
            <input type="email" placeholder="E-mail" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Логин" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Пароль" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Повторите пароль" required />
          </div>
          <button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
          <p className="login-link">Войти</p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
