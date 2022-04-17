import React from 'react';
import './products.css';
import { Product } from '../../components';
import {
  underline,
  rating,
  hotWings,
  riceCurry,
  chapatees,
  sweetSawaiyan,
  blurredLeaf01,
} from './imports';

const productsData = [
  { dish: 'Hot Wings', image: hotWings, style: 'Chinese', price: '£14.00' },
  {
    dish: 'Rice with Curry',
    image: riceCurry,
    style: 'Indian Style',
    price: '£22.00',
  },
  {
    dish: 'Chapatees',
    image: chapatees,
    style: 'Pakistani Style',
    price: '£18.00',
  },
  {
    dish: 'Sweet Sawaiyan',
    image: sweetSawaiyan,
    style: 'Western Style',
    price: '£16.00',
  },
];

const Products = () => {
  return (
    <div className='products '>
      <img className='products-blurred-leaf' src={blurredLeaf01} />
      <div className='section__padding'>
        <div className='products-heading'>
          <h4>Online Store</h4>
          <h1>
            Popular Products
            <img src={underline} />
          </h1>
        </div>
        <div className='products-item'>
          {productsData.map((item, index) => (
            <Product
              image={item.image}
              rating={rating}
              style={item.style}
              dish={item.dish}
              price={item.price}
              key={item.dish + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
