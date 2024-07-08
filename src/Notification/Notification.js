import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ message, color, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true); // Запуск анимации исчезновения через 6.5 секунд
    }, 6500);

    const closeTimer = setTimeout(() => {
      onClose(); // Закрытие уведомления через 7 секунд
    }, 7000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <div className={`notification ${fadeOut ? 'fade-out' : ''}`} style={{ backgroundColor: color }}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
