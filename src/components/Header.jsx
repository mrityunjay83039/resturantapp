import React from "react";
import Logo from "../img/logo.png";
import userIcon from "../img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

export const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full h-full gap-8">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover gap-2" alt="Logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </div>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
        </ul>
        <div className="relative flex items-center content-center">
          <MdShoppingBasket className="text-textColor h-6 w-6" />
          <div className="w-6 h-6 bg-red-500 rounded-full flex justify-center items-center absolute -top-0 -right-3">
            <p className="text-textColor font-normal text-sm">1</p>
          </div>
        </div>
        <div>
          <img
            src={userIcon}
            alt="User"
            className="w-8 h-8 drop-shadow-xl cursor-pointer"
          />
        </div>
      </div>

      {/* For Moile device */}
      <div className="flex md:hidden">Mobile</div>
    </header>
  );
};

export default Header;
