import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import ComputerModel from "./ComputerCanvas";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div className="absolute inset-0 top-20">
        <motion.div
          className="flex "
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <div className="p-8 mt-[100px]">
            <h1 className={`${styles.paddingX + styles.mainHeadText}`}>
              👋 Hello there! I'm
              <span className="text-[#972c5a]"> Avelin</span>
            </h1>
            <h2 className={styles.mainSubText}>
              I'm a <span className="text-[#972c5a]"> frontend</span> developer.
            </h2>
            <h3 className={styles.mainSubText}>
              I love building purposeful & engaging digital experiences.
            </h3>
          </div>
        </motion.div>
        {/* <motion.div
          className="h-[100vw]"
          
        >
          <ComputerModel />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
