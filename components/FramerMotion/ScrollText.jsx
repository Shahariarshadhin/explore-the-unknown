import { Box, TextField } from "@mui/material";
import { Reorder, easeOut, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const ScrollText = (props) => {
  const [from, setFrom] = useState();

  return (
    <div>
      <div className="mt-20 flex ">
        <div>
          <div className=" flex justify-between">
            <button type="button" onClick={() => setFrom(<FadeInOut />)}>
              Add Items
            </button>
           { from &&  <div className="fixed right-56">
              <CloseIcon
                className="cursor-pointer"
                onClick={() => setFrom(!(<FadeInOut />))}  
              />
            </div>  }
          </div>
          <div>{from}</div>
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
          />
          <motion.circle
            cx="100"
            cy="300"
            r="80"
            stroke="#0099ff"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="230"
            x2="360"
            y2="370"
            stroke="#ff0055"
            custom={3}
            variants={draw}
          />
          <motion.line
            x1="220"
            y1="370"
            x2="360"
            y2="230"
            stroke="#ff0055"
            custom={3.5}
            variants={draw}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="230"
            rx="20"
            stroke="#00cc88"
            custom={4}
            variants={draw}
          />
          <motion.circle
            cx="100"
            cy="500"
            r="80"
            stroke="#00cc88"
            variants={draw}
            custom={3}
          />
          <motion.line
            x1="220"
            y1="430"
            x2="360"
            y2="570"
            stroke="#0099ff"
            variants={draw}
            custom={4}
          />
          <motion.line
            x1="220"
            y1="570"
            x2="360"
            y2="430"
            stroke="#0099ff"
            variants={draw}
            custom={4.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="430"
            rx="20"
            stroke="#ff0055"
            variants={draw}
            custom={5}
          />
        </motion.svg>
      </div>
      <div className="mt-20">
        <List />
      </div>
    </div>
  );
};

export default ScrollText;

export function List() {
  const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item} className="flex justify-center">
          <div className="border mb-2 mt-5 px-5 py-2 bg-teal-400">{item}</div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export function FadeInOut(props) {

  const [open, setOpen] = useState(false);

  //USe Formik

  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      productname: "",
      reading_time: "",
      headline: "",
      feature_description: "",
      support_description: "",
      post_tags: "",
      thumbnail: "",
      thumbnail2: "",
      price:"",
      shortbio:"",
      category: null,
    },

    //   validationSchema: eventUploadFormValidation,
    onSubmit: async (data) => {
      try {
        // const img = await getImgToB64(data.thumbnail);
        console.log(data);
        setOpen(!open);
        // resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <motion.div
      className="box2 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: easeOut,
      }}
    >
       <form onSubmit={handleSubmit} noValidate autoComplete="off"  className="p-20">
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />

          
        </div>
        
           
         
      </form>
    </motion.div>
  );
}
