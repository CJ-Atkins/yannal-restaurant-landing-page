import React from 'react';
import './testimonials.css';
import { Testimonial } from '../../components';
import { testimonialData } from './data';
import underline from '../../assets/underline.svg';

const Testimonials = () => {
  return (
    <div className='testimonials section__padding section__margin'>
      <h3 className='testimonials__title'>Testimonial</h3>
      <h1 className='testimonials__heading'>
        What are they saying
        <img className='testimonials__heading-underline' src={underline} />
      </h1>
      <div className='testimonials__container'>
        {testimonialData.map((item, index) => (
          <Testimonial
            name={item.name}
            picture={item.picture}
            location={item.location}
            testimonial={item.testimonial}
            key={item.name + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
