import React from 'react'
import Header from '../components/Header/Header';
import Hero from '../components/Home/Hero';
import Categories from '../components/Home/Categories';
import BestDeals from '../components/Home/BestDeals';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Categories/>
        <BestDeals/>
    </div>
  )
}

export default HomePage;