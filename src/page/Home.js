import React from "react";

import logo from "../assest/logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };

  return (
    <div className=" w-full h-screen flex flex-row justify-center items-center">
      <div className=" w-fit h-fit flex flex-col items-center gap-[5rem]">
        <div className=" w-fit h-fit flex flex-col items-center gap-[1rem]">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 100, scale: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="  text-[48px] font-poppins font-[600]"
          >
            WELCOME TO
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              x: 0,
              y: 0,
            }}
            animate={{ opacity: [0, 99, 100], scale: 1, x: 0, y: 0 }}
            transition={{
              duration: 3,
              delay: 2,
            }}
            className="w-[350px] bg-gray-600"
          >
            <img src={logo} className=" w-full h-full" />
          </motion.div>
        </div>

        <form
          onSubmit={submitHandler}
          className=" w-fit h-fit flex flex-col items-center gap-[0.5rem]"
        >
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 4.5,
            }}
            className=" text-[24px] font-[600] font-poppins"
          >
            Join with us
          </motion.h3>

          <motion.input
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 5,
            }}
            type="text"
            placeholder="Phone Number"
            className=" w-[200px] h-[42px] rounded-[8px] ps-2 bg-[#808080] bg-opacity-10 border-opacity-50 border-2 border-[#808080] placeholder:text-[#808080]"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
