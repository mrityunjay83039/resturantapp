import React, { useState } from "react";
import HomeContainer from "./HomeContainer";
import { MenuContainer, RowContainer, CartContainer } from "./";
import { useStateValue } from "../context/StateProvider";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { motion } from "framer-motion";


const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between mb-4">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-400)}>
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(400)}>
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          foodItems={foodItems && foodItems.filter((e)=>e?.category === 'fruits')}
          scrollValue={scrollValue}
          flag={true}
        />

        <MenuContainer />

        {cartShow && <CartContainer/>}

      </section>
    </div>
  );
};

export default MainContainer;
