import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom, type: "spring", stiffness: 10 },
  }),
};

const DynamicListShow = () => {
  const items = [
    {
      heading: "Hellooo Framer Motion is Commmmming...",
    },
    {
      heading: "Hellooo Framer Motion is Commmmming... 2",
    },
    {
      heading: "Hellooo Framer Motion is Commmmming... 3",
    },
    {
      heading: "Hellooo Framer Motion is Commmmming... 4",
    },
    {
      heading: "Hellooo Framer Motion is Commmmming... 5",
    },
  ];
  return (
    <div className="container mx-auto  flex justify-center ">
      <div>
        <AnimatePresence>
          {items.map((item, idx) => (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={(idx + 1) * 0.6}
            >
              <div key={idx}>
                <h1>{item.heading}</h1>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DynamicListShow;

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "white",
  },
};

const itemVariants2 = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: (custom) => ({
    opacity: 1,
    x: "10vw",
    transition: {
      x: {
        repeatType: "mirror",
        delay:0.5,
        duration: 9,
        
      },
    },
  }),
};
const itemVariants3 = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: (custom) => ({
    opacity: 1,
    x: "70vw",
    transition: {
      x: {
        repeatType: "mirror",
        delay:0.5,
        duration: 11,
        
      },
    },
  }),
};
const itemVariants4 = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: (custom) => ({
    opacity: 1,
    x: "40vw",
    transition: {
      x: {
        repeatType: "mirror",
        // delay:1,
        duration: 8,
        
      },
    },
  }),
};
const itemVariants5 = {
  hidden: { opacity: 0, y: "50vw" },
  visible: (custom) => ({
    opacity: 1,
    y: "-100vw",
    transition: {
      y: {
        repeatType: "mirror",
        delay:3.5,
        duration: 13,
        
      },
    },
  }),
};

export const Example = () => (
  <div className=" container mx-auto  pb-[480px] gap-10">
    <div className="container2">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="item "
        variants={itemVariants2}
        initial="hidden"
        animate="visible"
        exit="hidden"
        
      >
        <motion.path
          d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: "none",
          }}
        />
      </motion.svg>
    </div>
    <div className="container2">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="item "
        variants={itemVariants3}
        initial="hidden"
        animate="visible"
        exit="hidden"
        
      >
        <motion.path
          d="M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: "none",
          }}
        />
      </motion.svg>
    </div>
    <div className="container2">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="item "
        variants={itemVariants4}
        initial="hidden"
        animate="visible"
        exit="hidden"
       
      >
        <motion.path
          d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: "none",
          }}
        />
      </motion.svg>
    </div>
    <div className="container2">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="item "
        variants={itemVariants5}
        initial="hidden"
        animate="visible"
        exit="hidden"
       
      >
        <motion.path
         d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: "none",
          }}
        />
      </motion.svg>
    </div>
  </div>
);
