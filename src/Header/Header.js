import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="#" className="header-link active">Asmaran</a>
        <a href="#" className="header-link">Wiki</a>
        <a href="#" className="header-link">Shop</a>
        <a href="#" className="header-link">News</a>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">Регистрация</a>
        <a href="#" className="header-link">Выход</a>
      </div>
    </div>
  );
};

export default Header;
