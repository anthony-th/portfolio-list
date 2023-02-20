import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ResumeButton from "./ResumeButton";

function Welcome() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center max-w-[600px] gap-4 min-w-[300px]"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="font-raleway text-4xl text-center align-middle"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hello! I'm&nbsp;
        <span className="text-[#ee1f80]">Anthony</span>.<br />
        I'm a front-end web developer.
      </motion.h1>
      <motion.div
        className="flex gap-4"
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <NavLink to="/portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-raleway hover:rounded-lg border border-[#ee1f80] px-3 py-1 rounded-sm hover:bg-[#ee1f80] transition-all duration-500 w-[90px]"
          >
            Portfolio
          </motion.button>
        </NavLink>
        <ResumeButton />
      </motion.div>
    </motion.div>
  );
}

export default Welcome;
