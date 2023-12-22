import React from "react";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const NavBar = ({active}) => {
  return (
    <div className="flex gap-12 text-white">
      {navItems &&
        navItems.map((item,index) => (
          <div key={index}>
            <Link to={item.url} className="">{item.title}</Link>
          </div>
        ))}
    </div>
  );
};

export default NavBar;
