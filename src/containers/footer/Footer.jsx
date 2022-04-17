import React from 'react';
import './footer.css';
import logoWhite from '../../assets/logo-white.svg';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__subscribe'>
        <h1 className='footer__subscribe-header'>Get Special Discounts</h1>
        <p className='footer__subscribe-info'>
          Input email address and complete your suscription to get our special
          offer.
        </p>
        <form className='footer__form'>
          <input
            placeholder='email@email.com'
            type='email'
            className='footer__form-input'
          />
          <button className='footer__form-button'>Subscribe</button>
        </form>
      </div>
      <div className='footer__links'>
        <div className='footer__links-column-1'>
          <img className='footer__logo' src={logoWhite} alt='logo' />
          <div className='footer__social-links'>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
        <div className='footer__links-column-2'>
          <h2 className='footer__links-column-title'>Contact</h2>
          <div className='footer__contact-info'>
            <IoLocationOutline size={30} className='footer__contact-icon' />
            <p>F1 - 320 Jeff Heights, Main Blvd, Gulberg, Lahore, Pakistan</p>
          </div>
          <div className='footer__contact-info'>
            <FiPhone size={20} className='footer__contact-icon' />
            <p>+92 - 300 - 115 - 222 -444</p>
          </div>
          <div className='footer__contact-info'>
            <FiMail size={18} className='footer__contact-icon' />
            <p>support@yannal.com</p>
          </div>
        </div>
        <div className='footer__links-column-3'>
          <h2 className='footer__links-column-title'>Support</h2>
          <ul className='footer__links-list'>
            <a className='footer__links-list-item' href='#'>
              Faq
            </a>
            <a className='footer__links-list-item' href='#'>
              Shipping & Returns
            </a>
            <a className='footer__links-list-item' href='#'>
              Contact Us
            </a>
            <a className='footer__links-list-item' href='#'>
              Our Partners
            </a>
          </ul>
        </div>
        <div className='footer__links-column-4'>
          <h2 className='footer__links-column-title'>Info</h2>
          <ul className='footer__links-list'>
            <a className='footer__links-list-item' href='#'>
              Dates
            </a>
            <a className='footer__links-list-item' href='#'>
              Parties
            </a>
            <a className='footer__links-list-item' href='#'>
              Birthdays
            </a>
            <a className='footer__links-list-item' href='#'>
              Menu
            </a>
          </ul>
        </div>
      </div>
      <p>©2021 Yannal Resturant</p>
    </div>
  );
};

export default Footer;
