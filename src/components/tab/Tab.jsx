import React from 'react';
import './tab.css';
import deilveryMan from '../../assets/delivery-man.png';
import leaf from '../../assets/leaf.png';

const Tab = ({ title, image, tab, toggleState }) => {
  return (
    <div className={toggleState === tab ? 'tab tab--active' : 'tab'}>
      <img src={leaf} className='tab__leaf-image' />
      <div className='tab__faster-delivery'>
        <h3>Fast Food Delivery Service</h3>
        <img className='tab__delivery-man' src={deilveryMan} />
      </div>
      <h1 className='tab__title'>{title}</h1>
      <p className='tab__description'>
        Bring together your discussions memberships and content. Start your
        7-day free trial.
      </p>
      <button className='tab__button'>Get Started</button>
      <img className='tab__image' src={image} />
    </div>
  );
};

export default Tab;
