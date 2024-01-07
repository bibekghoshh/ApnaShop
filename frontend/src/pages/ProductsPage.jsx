import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import { productData } from "../static/data";
import Footer from "../components/Footer/Footer";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoriesData = searchParams.get("category");
  const [data, setData] = useState();

  useEffect(() => {
    if (categoriesData === null) {
      const d = productData;
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoriesData);
      setData(d);
    }
  }, [categoriesData]);

  return (
    <div className=" bg-gray-50">
      <Header activeHeading={3} />
      <br />
      <br />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] pb-10 w-[90%]">
          {data && data.map((i, index) => <ProductCard key={index} data={i} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="w-full text-2xl text-black pb-[110px]">
            No Products Found !
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
