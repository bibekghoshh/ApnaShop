import React, { useState } from "react";
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import { CiMenuFries } from "react-icons/ci";
import { FcExpand } from "react-icons/fc";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
    setSearchData(filteredProducts);
  };
  console.log(searchData);
  console.log(searchTerm);

  return (
    <div className="">
      <div className="flex items-center justify-between h-24 mx-12">
        <div className="w-40 h-16 overflow-hidden ">
          <Link to="/">
            <img
              className="object-cover w-full h-full transform"
              src="https://res.cloudinary.com/dq2yspfur/image/upload/v1703142070/AssestsOfApnashop/gvaievpnckk5scsierp0.jpg"
              alt=""
            />
          </Link>
        </div>
        {/* Search Box */}
        <div className="flex flex-row items-center ">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Products.."
            className="w-[40vw] px-4 py-[6px] border-2 border-blue-600 outline-none focus:border-blue-500 rounded-lg "
          />
          <IoSearchOutline className="relative right-10" size={25} />
          {searchData && searchData.length !== 0 ? (
            <div className="absolute top-16 w-[40vw] max-h-[90vh] drop-shadow-lg bg-white">
              {searchTerm &&
                searchData.map((data, index) => {
                  return (
                    <Link key={index} to={`/product/${data._id}`}>
                      <div className="flex items-center gap-3 px-2 py-2 ">
                        <img
                          className="w-10"
                          src={`${data.image_Url[0]?.url}`}
                          alt=""
                        />
                        <h1 className="text-black">{data.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>
        <div>
          <button className="flex items-center px-2 py-2 font-medium bg-blue-500 rounded-lg text-slate-100">
            Become a Seller <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="flex items-center h-16 bg-blue-500">
        <div className="flex justify-between w-full mx-20 ">
          {/* Categoriesss */}
          <div>
            <button
              className="relative flex items-center gap-3 px-4 py-4 mt-2 text-lg font-medium bg-white rounded-t-lg"
              onClick={() => setDropDown(!dropDown)}
            >
              <CiMenuFries />
              All Categories
              <FcExpand />
            </button>
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          {/* Navitemss */}
          <div className="flex items-center">
            <NavBar activeHeading={1} />
          </div>
          {/* User Informationn */}
          <div className="flex items-center gap-3 text-white">
            <div className="flex">
              <BsCart2 size={30}/><span className="relative top-[-5px] right-3 bg-green-500 w-fit h-fit px-1 rounded-full text-sm">{0}</span>
            </div>
            <div className="flex">
              <IoMdHeartEmpty size={30}/><span className="relative top-[-5px] right-3 bg-green-500 w-fit h-fit px-1 rounded-full text-sm">{0}</span>
            </div>
            <div className="cursor-pointer">
              <CgProfile size={30}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
