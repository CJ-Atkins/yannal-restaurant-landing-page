import React from 'react';
import './testimonial.css';
import rating from '../../assets/rating.svg';

const Testimonial = ({ name, picture, location, testimonial }) => {
  return (
    <div className='testimonial'>
      <img className='testimonial__image' src={picture} />
      <div className='testimonial__content'>
        <p className='testimonial__name'>{name}</p>
        <p className='testimonial__location'>{location}</p>
        <img className='testimonial__rating' src={rating} />
        <p className='testimonial__testimonial'>{testimonial}</p>
      </div>
    </div>
  );
};

export default Testimonial;
