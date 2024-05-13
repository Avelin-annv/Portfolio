import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
// import ComputerCanvas from "./ComputerCanvas";
import ComputerModel from "./ComputerCanvas";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div className="absolute inset-0 top-20">
        <div className="flex ">
          <div className="text-6xl p-8 mt-[100px] w-[50%]">
            <h1 className={styles.paddingX}>
              Hi, I am <span className="text-[#AA3A6A] text-7xl"> Avelin</span>
            </h1>
            <p className={styles.mainSubText + styles.paddingX}>
              I love building awesome web pages.
            </p>
          </div>

          {/* <div className="w-full h-[60vw]">
            <ComputerModel />
          </div> */}
        </div>
        <ComputerModel />
      </div>
    </section>
  );
};

export default Hero;
