import React, { useState } from 'react';
import './tabs.css';
import { Tab } from '../../components';
import { coffee, fastFood, pizza, desiMenu, desserts } from './imports';

const tabsData = [
  {
    title: 'Get delivered while it is still hot.',
    image: coffee,
    menu: 'Coffee',
    tab: 0,
  },
  {
    title: 'Get delivered while it is still fast.',
    image: fastFood,
    menu: 'Fast Food',
    tab: 1,
  },
  {
    title: 'Get delivered while it is still flat.',
    image: pizza,
    menu: 'Pizza',
    tab: 2,
  },
  {
    title: 'Get delivered while it is still cool.',
    image: desiMenu,
    menu: 'Desi Menu',
    tab: 3,
  },
  {
    title: 'Get delivered while it is still cold.',
    image: desserts,
    menu: 'Desserts',
    tab: 4,
  },
];

const Tabs = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='tabs section__padding section__margin'>
      <div className='tabs__menu'>
        {tabsData.map((item, index) => (
          <button
            key={index + item.menu}
            className={
              toggleState === index
                ? 'tabs__menu-button--active tabs__menu-button'
                : 'tabs__menu-button'
            }
            onClick={() => toggleTab(item.tab)}
          >
            <img
              src={item.image}
              className='tabs__menu-button-image'
              onClick={() => toggleTab(item.tab)}
            />
            {item.menu}
          </button>
        ))}
      </div>
      <div className='tabs__mob-menu'>
        {tabsData.map((item, index) => (
          <button
            key={index + item.menu}
            className={
              toggleState === index
                ? 'tabs__mob-menu-button--active tabs__mob-menu-button'
                : 'tabs__mob-menu-button'
            }
            onClick={() => toggleTab(item.tab)}
          >
            <img
              src={item.image}
              className='tabs__mob-menu-button-image'
              onClick={() => toggleTab(item.tab)}
            />
          </button>
        ))}
      </div>
      <div className='tabs__container'>
        {tabsData.map((item, index) => (
          <Tab
            title={item.title}
            image={item.image}
            key={item.tab + index}
            tab={item.tab}
            toggleState={toggleState}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
