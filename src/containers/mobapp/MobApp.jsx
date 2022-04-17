import React from 'react';
import './mobapp.css';
import { appleButton, googleButton, appImage } from './imports';

const MobApp = () => {
  return (
    <div className='mob-app section__margin'>
      <div className='mob-app__container section__padding '>
        <div className='mob-app__image-container'>
          <img className='mob-app__image' src={appImage} alt='' />
        </div>
        <div className='mob-app__info'>
          <h3 className='mob-app__info-title'>Download Our App</h3>
          <h1 className='mob-app__info-heading'>It's all here.</h1>
          <h1 className='mob-app__info-heading'>All in one app.</h1>
          <p className='mob-app__info-description'>
            Discover local, on-demand delivery or Pickup from restaurants,
            nearby grocery and convenience stores, and more.
          </p>
          <div className='mob-app__info-buttons'>
            <button className='mob-app__info-button'>
              <img src={appleButton} alt='' />
            </button>
            <button className='mob-app__info-button'>
              <img src={googleButton} alt='' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobApp;
