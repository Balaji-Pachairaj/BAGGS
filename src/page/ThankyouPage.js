import { motion } from "framer-motion";
import React from "react";

const ThankyouPage = () => {
  return (
    <div className=" w-full h-screen flex flex-row justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 100, scale: 1, y: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="  text-[24px] font-poppins font-[600]"
      >
        Thank you
      </motion.h1>
    </div>
  );
};

export default ThankyouPage;
