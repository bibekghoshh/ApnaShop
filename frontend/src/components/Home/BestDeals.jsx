import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = productData?.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-[90%]">
        <div className="mb-8">
          <h1 className="text-2xl font-medium">Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.length !== 0 && (
            <>
              {data.map((productDetails, index) => (
                <ProductCard data={productDetails} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
