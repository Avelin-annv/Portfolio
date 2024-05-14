import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import ComputerModel from "./ComputerCanvas";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div className="absolute inset-0 top-20">
        <div className="flex ">
          <div className="p-8 mt-[100px]">
            <h1 className={`${styles.paddingX + styles.mainHeadText}`}>
              👋 Hello there! I'm
              <span className="text-[#AA3A6A]"> Avelin</span>
            </h1>
          </div>
        </div>
        <div className="h-[100vw]">
          <ComputerModel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
