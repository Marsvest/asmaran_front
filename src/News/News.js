import React from 'react';
import './News.css';
import NewsImage from './image.png'

const News = () => {
  const newsItems = [
    { date: '01.01.2024', title: 'НОВОСТЬ', image: NewsImage },
    { date: '02.01.2024', title: 'НОВОСТЬ', image: NewsImage },
    { date: '03.01.2024', title: 'НОВОСТЬ', image: NewsImage }
  ];

  return (
    <div className="news-section">
      <h3>ПОСЛЕДНИЕ НОВОСТИ</h3>
      <div className="news-items">
        {newsItems.map((news, index) => (
          <div key={index} className="news-item">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-info">
              <p className="news-date">{news.date}</p>
              <p className="news-title">{news.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
