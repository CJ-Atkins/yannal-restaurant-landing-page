import React from 'react';
import './menu.css';
import { Dish } from '../../components';
import { dishData } from './data';
import { FiChevronRight } from 'react-icons/fi';

const Menu = () => {
  return (
    <div className='menu section__padding section__margin'>
      <h3 className='menu__title'>Popular Menu</h3>
      <h1 className='menu__heading'>Amazing Food Served With Delicacy</h1>
      <div className='menu__dish-container'>
        {dishData.map((item, index) => (
          <Dish
            title={item.title}
            description={item.description}
            image={item.image}
            key={item.title + index}
            price={item.price}
          />
        ))}
      </div>
      <button className='menu__button'>
        See All Menu <FiChevronRight size={32} className='menu__button-icon' />
      </button>
    </div>
  );
};

export default Menu;
