import React from "react";
import { Link } from "react-router-dom";
import CountDown from "./CountDown";

const EventCard = ({ data }) => {
  return (
    <div className={`w-full block bg-white rounded-lg  lg:flex p-2 shadow-sm`}>
      <div className="flex justify-center w-full">
        <img className="w-[80%]" src={`${data.image_Url[0]?.url}`} alt="" />
      </div>
      <div className="flex flex-col justify-center w-full gap-5 px-4">
        <h2 className="text-2xl font-medium">{data.name}</h2>
        <p className="text-sm">{data.description}</p>
        <div className="flex justify-between py-2">
          <div className="flex gap-5">
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">₹{" "}
              {data.discount_price}
            </h5>
            <h5 className="font-[500] text-[16px] text-slate-600  line-through">
            ₹{data.price}
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data.total_sell} sold
          </span>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={` text-[#fff]`}>See Details</div>
          </Link>
          <div
            className={`$ text-[#fff] ml-5`}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
