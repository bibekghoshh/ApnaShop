import React from 'react'
import Header from '../components/Header/Header';
import Hero from '../components/Home/Hero';
import Categories from '../components/Home/Categories';
import BestDeals from '../components/Home/BestDeals';
import Events from '../components/Events/Events';
import Sponsored from '../components/Footer/Sponsored';
import Footer from '../components/Footer/Footer';
import FeaturedProduct from '../components/ProductCard/FeaturedProduct';

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Categories/>
        <BestDeals/>
        <Events/>
        <FeaturedProduct/>
        <Sponsored/>
        <Footer/>

    </div>
  )
}

export default HomePage;