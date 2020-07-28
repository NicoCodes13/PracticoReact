import React from 'react';
import '../assets/styles/components/Search.scss';

const MainTitleText = '¿Qué quieres ver hoy?';
const InputPlaceHolder = 'Buscar...';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{MainTitleText}</h2>
    <input type='text' className='input' placeholder={InputPlaceHolder}></input>
  </section>
);

export default Search;
