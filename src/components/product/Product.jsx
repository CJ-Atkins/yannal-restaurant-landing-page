import React from 'react';
import './product.css';

const Product = ({ image, rating, style, dish, price }) => {
  return (
    <div className='product-container'>
      <img className='product-container__image' src={image} alt='' />
      <img className='product-container__rating' src={rating} alt='' />
      <p>{style}</p>
      <h2>{dish}</h2>
      <button>Add to Cart {price}</button>
    </div>
  );
};

export default Product;
