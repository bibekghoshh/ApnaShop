import React from 'react'
import { productData } from '../../static/data';
import ProductCard from './ProductCard'

const FeaturedProduct = () => {
  return (
    <div className="flex justify-center bg-gray-50">
      <div className="w-[90%]">
        <div className='pb-8 text-2xl font-medium'>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
            productData && productData.length !== 0 &&(
              <>
               {productData && productData.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct;