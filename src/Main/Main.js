import React from 'react';
import Header from '../Header/Header';
import News from '../News/News';

import './Main.css';
import './Media.css';
import './JoinUs.css';

import joinUsImage from './joinus.png';
import playNowImage from './playnow.png';
import leftImage from './media/left.png';
import centerImage from './media/center.png';
import rightImage from './media/right.png';

const Main = () => {
  return (
    <div>
      <div className='main-container'>
        <div className="submain-container">
          <Header />
          <div className="main-background">
            <button className="play-button">ИГРАТЬ</button>
          </div>
        </div>
        <News />
      </div>
      <div className="join-us-container">
        <div className="join-us-background" style={{ backgroundImage: `url(${joinUsImage})` }}>
          <div className="join-us-text">
            <h1>ПРИСОЕДИНИТЕСЬ</h1>
            <h1>К ....</h1>
          </div>
          <button className="news-button">СВЕЖИЕ НОВОСТИ</button>
        </div>
      </div>
      <div className="media-container">
        <div className="media-header">МЕДИА</div>
        <div className="media-subheader">ТЕКСТТЕКСТТЕКСТТЕКСТТЕКСТТЕКСТТЕКСТТЕКСТТЕКСТ</div>
        <div className="media-content">
          <img src={leftImage} alt="Left" className="media-image" />
          <img src={centerImage} alt="Center" className="media-image" />
          <img src={rightImage} alt="Right" className="media-image" />
        </div>
        <div className="media-footer">
          <p>Svitlana Vorobets Asks: FATAL: password authentication failed for user "root" in minikube</p>
          <p>I am writing an app using spring boot, postgres and minikube. But when I apply app and db files I got an error</p>
        </div>
      </div>
      <div className="join-us-container" style={{ height: '50vh' }}>
        <div className="join-us-background" style={{ backgroundImage: `url(${playNowImage})` }}>
          <div className="join-us-text" style={{ fontSize: '2em' }}>
            <h1>ПРИСОЕДИНИТЕСЬ</h1>
          </div>
          <button className="news-button">ИГРАТЬ СЕЙЧАС</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
