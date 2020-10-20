import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <section className='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </section>
);

export default Categories;
