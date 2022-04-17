import React from 'react';
import './header.css';
import headerImage from '../../assets/header-image.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h4>Now taking online orders</h4>
        <div className='header-content__item'>
          <h1>kababs</h1>
          <h3>£14.97</h3>
        </div>
        <p>
          Restaurant style Yogurt Mint Sauce is delicious dip which is quick and
          easy to ... This is a standard Indian mint chutney served with
          poppadums along with mint and lemon.
        </p>
        <div className='header-content__buttons'>
          <button className='header-content__button1'>Add to Cart</button>
          <button className='header-content__button2'>Book a Table</button>
        </div>
        <div className='header-content__times'>
          <div>
            <h3>Dinner</h3>
            <p>1:00 - 3:00pm</p>
          </div>
          <div>
            <h3>Tea</h3>
            <p>7:00 - 10:00pm</p>
          </div>
        </div>
      </div>
      <div className='header-image'>
        <img src={headerImage} alt='header' />
      </div>
    </div>
  );
};

export default Header;
