import React from "react";
import { brandingData, categoriesData } from "../../static/data";
import { useNavigate } from "react-router-dom";

const Categories = () => {
   const navigate= useNavigate();
  return (
    <div className="pb-16 pt-28 bg-gray-50">
      <div className="flex items-center justify-center">
        <div className=" justify-between p-5 w-[90%] shadow-sm rounded-md bg-white hidden sm:flex">
          {brandingData &&
            brandingData.map((data, index) => (
              <div key={index} className="flex items-center gap-2">
                <div>{data.icon}</div>
                <div>
                    <h3 className="text-sm font-medium md:text-base">{data.title}</h3>
                    <p className="text-xs md:text-sm">{data.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`mt-16 flex justify-center rounded-md`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] w-[90%] bg-white p-5 shadow-sm">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden hover:shadow-md p-2 hover:scale-105"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="w-[100px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
