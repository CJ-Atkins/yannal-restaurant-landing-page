import React from 'react';
import './dish.css';
import { BsFillShareFill, BsSuitHeart } from 'react-icons/bs';
import rating from '../../assets/rating.svg';

const Dish = ({ title, description, image, price }) => {
  return (
    <div className='dish'>
      <img className='dish__image' src={image} />
      <img className='dish__rating' src={rating} />
      <h1 className='dish__title'>{title}</h1>
      <p className='dish__description'>{description}</p>
      <p className='dish__price'>{price}</p>
      <div className='dish__buttons'>
        <button className='dish__button dish__button--like'>
          <BsSuitHeart className='dish__button-svg' size={14} />
        </button>
        <button className='dish__button dish__button--share'>
          <BsFillShareFill className='dish__button-svg' size={14} />
        </button>
      </div>
    </div>
  );
};

export default Dish;
