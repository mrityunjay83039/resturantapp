import React, { useState } from "react";
import Logo from "../img/logo.png";
import userIcon from "../img/avatar.png";
import { MdShoppingBasket, MdLogout, MdAdd } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full h-full gap-8">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover gap-2" alt="Logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
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
          <div className="w-5 h-5 bg-red-500 rounded-full flex justify-center items-center absolute -top-0 -right-3">
            <p className="text-white font-normal text-xs">1</p>
          </div>
        </div>
        <div className="relative">
          <motion.img
            onClick={login}
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : userIcon}
            alt="User"
            className="w-8 h-8 drop-shadow-xl cursor-pointer rounded-full"
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0.6, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "mrityunjay.83039@gmail.com" && (
                <Link
                  to={"/createItem"}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  New Item <MdAdd />
                </Link>
              )}

              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                Logout <MdLogout />{" "}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* For Moile device */}
      <div className="flex md:hidden">Mobile</div>
    </header>
  );
};

export default Header;
