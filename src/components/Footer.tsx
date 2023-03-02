import React from "react";
import { motion } from "framer-motion";
import { textFadeIn } from "../shared/types";

function Footer() {
  return (
    <div className={"py-5 text-center"}>
      <motion.p
        {...textFadeIn}
        className={"text-sm mt-2 font-yesteryear text-white/50"}
      >
        &copy; 2022{" "}
        <a
          className={"hover:text-[#ee1f80] transition-all"}
          href={"https://github.com/anthony-th"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Anthony-th
        </a>
        . All rights reserved.
      </motion.p>
    </div>
  );
}

export default Footer;
