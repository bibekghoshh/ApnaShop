import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineHeart,AiOutlineEye} from 'react-icons/ai';
import ProductDetailsCard from './ProductDetailsCard';

const ProductCard = ({ data,isEvent }) => {
    
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
  
  
    return (
      <>
        <div className="w-full h-[360px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
          <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
            <img
              src={`${data.image_Url && data.image_Url[0]?.url}`}
              alt=""
              className="w-full h-[170px] object-contain"
            />
          </Link>
          <Link to={`/shop/preview/${data?.shop._id}`}>
            <h5 className="text-sm text-blue-500">{data.shop.name}</h5>
          </Link>
          <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
            <h4 className="pb-3 font-[500]">
              {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
            </h4>
  
            <div className="flex">
            {/* <Ratings rating={data?.ratings} /> */}
            </div>
  
            <div className="flex items-center justify-between py-2">
              <div className="flex gap-2">
                <h5 className="text-lg font-medium">
                ₹{" "}
                  {data.discount_price === 0
                    ? data.discount_price
                    : data.discount_price}
                  
                </h5>
                <h4 className="line-through text-slate-400">₹
                  {data.price ? data.price: null}
                </h4>
              </div>
              <span className="font-[400] text-[17px] text-[#68d284]">
                {data?.total_sell} sold
              </span>
            </div>
          </Link>
  
          {/* side options */}
          <div>
            {click ? (
              <AiFillHeart
                size={22}
                className="absolute cursor-pointer right-2 top-5"
                color={click ? "red" : "#333"}
                title="Remove from wishlist"
              />
            ) : (
              <AiOutlineHeart
                size={22}
                className="absolute cursor-pointer right-2 top-5"
                color={click ? "red" : "#333"}
                title="Add to wishlist"
              />
            )}
            <AiOutlineEye
              size={22}
              className="absolute cursor-pointer right-2 top-14"
              onClick={() => setOpen(!open)}
              color="#333"
              title="Quick view"
            />
            <AiOutlineShoppingCart
              size={25}
              className="absolute cursor-pointer right-2 top-24"
              color="#444"
              title="Add to cart"
            />
            {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
          </div>
        </div>
      </>
    );
  };

export default ProductCard;