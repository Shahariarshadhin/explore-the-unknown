import { ToggleButton } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const loaderVariants = {
  mango: {
    x: [-40, 40],
    y: [0, -60],
    transition: {
      x: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
      },
    },
  },
  django: {
    y: [20, -80],
    x: 0,
    transition: {
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        // ease:'easeOut'
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("mango", "django");
  return (
    <>
      <div className="flex">
        <motion.div
          drag
          variants={loaderVariants}
          animate={animation}
          className="loader "
        ></motion.div>
        <motion.div
          drag
          variants={loaderVariants}
          animate={animation}
          className="loader1"
        ></motion.div>
        <motion.div
          drag
          variants={loaderVariants}
          animate={animation}
          className="loader2"
        ></motion.div>
        <motion.div
          drag
          variants={loaderVariants}
          animate={animation}
          className="loader3"
        ></motion.div>
        <motion.div
          drag
          variants={loaderVariants}
          animate={animation}
          className="loader4"
        ></motion.div>
      </div>
      <div onClick={() => cycleAnimation()} className="flex justify-center ">
        <span className="border p-2 mb-8 cursor-pointer">
          Change The Loader
        </span>
      </div>
    </>
  );
};

export default Loader;


export function App() {
    return (
      <motion.div
        className="box "
        drag
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    );
  }


