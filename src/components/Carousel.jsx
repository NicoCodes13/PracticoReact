import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <article className='carousel'>
    <div className='carousel__container'>{children}</div>
  </article>
);

export default Carousel;
