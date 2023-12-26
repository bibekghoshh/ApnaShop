import React from 'react'
import Header from '../components/Header/Header';
import Hero from '../components/Home/Hero';
import Categories from '../components/Home/Categories';
import BestDeals from '../components/Home/BestDeals';
import Events from '../components/Events/Events';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Categories/>
        <BestDeals/>
        <Events/>
    </div>
  )
}

export default HomePage;