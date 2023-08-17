import React, { useState } from "react";
import {  motion, AnimatePresence } from "framer-motion";
import Loader, { App} from "./Loader";

const FramerMotionContainer = () => {
  const [showTime, setShowTime] = useState(true);
  setTimeout(() => {
    setShowTime(false);
  }, 4000);

  

  return (
    <div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ delay: 0.5, duration: 2.5 }}
          className="flex justify-center mt-20 border p-6"
        >
          <motion.h1 animate={{ fontSize: 150, color: "#e53935" }}>
            Hellooo from Framer Motion
          </motion.h1>
        </motion.div>
      </div>

      <div className="container mx-auto">
        <div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ delay: 0.5, duration: 2.5 }}
          className="flex justify-center mt-20 border p-6"
        >
          <motion.h1
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
          >
            Hellooo Framer Motion is Bouncing Now
          </motion.h1>
        </div>
      </div>
      <div className="container mx-auto mt-20 border p-6">
        <div className="flex justify-center mb-2">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left
          </motion.h1>
        </div>
        <div className="flex justify-center mb-2">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 2, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left 2
          </motion.h1>
        </div>
        <div className="flex justify-center mb-2">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 3, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left 3
          </motion.h1>
        </div>
        <div className="flex justify-center ">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 4, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left 4
          </motion.h1>
        </div>
      </div>
      <div className="container mx-auto mt-20 border p-6">
        <div className="flex justify-center mb-2">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left
          </motion.h1>
        </div>
        <div className="flex justify-center mb-2">
          <motion.h1
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 2, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left 2
          </motion.h1>
        </div>
        <div className="flex justify-center mb-2">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 3, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left 3
          </motion.h1>
        </div>
        <div className="flex justify-center ">
          <motion.h1
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 4, type: "spring", stiffness: 10 }}
          >
            Hellooo Framer Motion is Coming From Left 4
          </motion.h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div
          //   initial={{ rotateZ: 0 }}
          //   animate={{ rotateZ: 360 }}
          //   transition={{ delay: 0.5, duration: 2.5 }}
          className="flex justify-center mt-20  p-6 bg-[#c9bebe]"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="border p-3"
          >
            Hellooo Framer Motion is Bouncing Now
          </motion.button>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center mt-20  p-6 bg-[#c9bebe]">
          <motion.ul className="text-3xl">
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              React
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Next
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Vau
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              JavaScript
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Python
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Django
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ruby
            </motion.li>
          </motion.ul>
        </div>
      </div>

     

      <div className="container mx-auto">
        <div className="flex justify-center mt-20  p-6 bg-[#c9bebe]">
          <div>
            <p className="text-3xl">Make The World A Greener, Better Place</p>
            <AnimatePresence>
              {showTime && (
                <motion.p
                  exit={{x:-1000, y: -1000 } }
                  transition={{ type: "spring", stiffness: 5 }}
                  className="text-2xl text-center"
                >
                  Celebrate And Promote Earth Day
                </motion.p>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showTime && (
                <motion.p
                  exit={{x:1000, y: -1000 } }
                  transition={{ type: "spring", stiffness: 5 }}
                  className="text-2xl text-center"
                >
                  Celebrate And Promote Earth Day
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 bg-[#c9bebe]">
        <Loader/>
      </div>
      <div className="container mx-auto mt-10 bg-[#c9bebe] flex justify-center py-28">
        <App/>
      </div>
    </div>
  );
};

export default FramerMotionContainer;
