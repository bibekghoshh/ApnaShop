import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center w-full bg-no-repeat min-h-[63vh] "
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className="w-[90%] md:w-[60%] flex flex-col gap-6">
        <h1 className="text-5xl font-medium text-slate-800">
          Discover Limitless Choices
        </h1>
        <p>
          Empowering Entrepreneurs, Connecting Communities: Your One-Stop Shop
          for Limitless Choices. Unleash Possibilities, Support Local. <br />{" "}
          Discover, Shop, Thrive - Where Every Vendor Matters. Elevate Your
          Shopping Experience, Celebrate Diversity. Your Marketplace, Your
          Rules. From Artisans to Innovators, Find It All Here. Embrace Variety,
          Embrace Change. Welcome to ApnaShop - Where Every Purchase Tells a
          Story
        </p>
        <Link to="/products">
          <button className="px-4 py-[6px] text-slate-200 text-lg font-medium bg-blue-400 rounded-md">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
