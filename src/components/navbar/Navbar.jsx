import React, { useState } from 'react';
import './navbar.css';
import { logo, IconSearch, IconBasket, IconProfile } from './imports';
import { IoMenuOutline } from 'react-icons/io5';

const Menu = () => (
  <>
    {''}
    <p>
      <a href='#'>menu</a>
    </p>
    <p>
      <a href='#'>about us</a>
    </p>
    <p>
      <a href='#'>our specials</a>
    </p>
    <p>
      <a href='#'>our locations</a>
    </p>
    <p>
      <a href='#'>our chefs</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-menu'>
        <Menu />
      </div>
      <div className='navbar-links'>
        <a href='#'>
          <IconSearch />
        </a>
        <a href='#'>
          <IconBasket />
        </a>
        <a href='#'>
          <IconProfile />
        </a>
        <button
          className='navbar-responive-menu__button'
          onClick={() => setToggleMenu((prevCheck) => !prevCheck)}
        >
          <IoMenuOutline size={24} />
        </button>
      </div>
      {toggleMenu && (
        <div className='navbar-responsive-menu scale-up-tr'>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
