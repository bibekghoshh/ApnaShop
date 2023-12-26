import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProductDetailsCard = ({ setOpen, data }) => {
 
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
 

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };


  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[80%] 800px:w-[60%] h-[80vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute z-50 right-3 top-3"
              onClick={() => setOpen(false)}
            />

            <div className="flex flex-col w-full lg:flex-row">
              <div className="w-full md::w-[50%] ">
                <img
                  src={`${data.image_Url && data.image_Url[0]?.url}`}
                  alt=""
                  className=" w-[600px]"
                />
                <div className="flex ">
                  <Link to={`/shop/preview/${data.shop._id}`} className="flex">
                    <img
                      src={`${data.image_Url && data.image_Url[0]?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                    <div>
                      <h3 className="text-blue-500">{data.shop.name}</h3>
                      <h5 className="pb-3 text-[15px]">
                        {data?.shop?.ratings} Ratings
                      </h5>
                    </div>
                  </Link>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">(50) Sold out</h5>
              </div>

              <div className="w-full 800px:w-[50%] pt-10 pl-[5px] pr-[5px] ">
                <h1 className="mb-5 text-2xl font-medium">{data.name}</h1>
                <p className="text-sm w-[90%]">{data.description}</p>

                <div className="flex gap-3 pt-3">
                  <h4 className="text-lg font-medium">
                    ₹ {data.discount_price}
                  </h4>
                  <h3 className="line-through text-slate-400">
                    ₹{data.price ? data.price : null}
                  </h3>
                </div>
                <div className="flex items-center justify-between pr-3 mt-12">
                  <div className="flex items-center">
                    <button
                      className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out shadow-lg rounded-l-md bg-gradient-to-r from-teal-400 to-teal-500 hover:opacity-75"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-medium text-gray-800 bg-gray-200">
                      {count}
                    </span>
                    <button
                      className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out shadow-lg rounded-r-md bg-gradient-to-r from-teal-400 to-teal-500 hover:opacity-75"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <button
                  className="px-2 py-2 mt-8 bg-black rounded"
                >
                  <span className="text-[#fff] flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
