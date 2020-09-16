/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const [videos, categories] = useInitialState(API);

  return (
    <div className='app'>
      <Header />
      <Search />
      {categories.map(
        (category) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          videos[category].length > 0 && ( // operando por cortocircuito
            <Categories key={category} title={category}>
              <Carousel>
                {videos[category].map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
            // eslint-disable-next-line comma-dangle
          )
      )}
      <Footer />
    </div>
  );
};

export default App;
