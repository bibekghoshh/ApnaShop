import React from "react";
import { useNavigate } from "react-router-dom";

const DropDown = ({ categoriesData, setDropDown }) => {
    const navigate=useNavigate();

    const submitHandle=(data)=>{
        navigate(`/products?category=${data.title}`)
        setDropDown(false);
        window.location.reload();
    }
  return (
    <div className="absolute flex flex-col gap-2 py-2 pl-2 text-sm bg-white rounded-b-md w-52 drop-shadow-lg">
      {categoriesData &&
        categoriesData.map((data, index) => (
          <div key={index} className="flex items-center gap-1 cursor-pointer" onClick={()=>submitHandle(data)}>
            <img className="w-7" src={data.image_Url} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
