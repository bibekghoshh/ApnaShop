import React from "react";
import { productData } from "../../static/data";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="flex items-center justify-center pb-10 bg-gray-50">
      <div className="w-[90%]">
        <div className="pb-5 text-2xl font-medium ">
          <h4>Popular Events</h4>
        </div>
        <div>
          {productData !== 0 && (
            <EventCard data={productData && productData[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
