import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillFolderOpen } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { textFadeIn } from "../shared/types";

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "border-[#ee1f80] border-l-2 border-solid text-[#ee1f80]/90 pl-2 text-lg select-none flex items-center"
    : "hover:text-[#ee1f80] border-l-2 border-[transparent] border-solid pl-2 select-none text-lg transition-colors flex items-center";

function Header() {
  const [hoveredPortfolio, setHoveredPortfolio] = useState<boolean>(false);
  const [hoveredContact, setHoveredContact] = useState<boolean>(false);

  const handlePortfolioMouseEnter = () => {
    setHoveredPortfolio(true);
  };

  const handlePortfolioMouseLeave = () => {
    setHoveredPortfolio(false);
  };

  const handleContactMouseEnter = () => {
    setHoveredContact(true);
  };

  const handleContactMouseLeave = () => {
    setHoveredContact(false);
  };
  return (
    <section
      id={"header"}
      className={"flex items-center justify-center flex-col"}
    >
      <div className={"text-center relative py-4 pb-6 flex flex-col gap-3"}>
        <motion.h1
          {...textFadeIn}
          className={
            "font-vasek text-5xl text-white font-bold pb-2 text-right pr-10"
          }
        >
          Anthony-th
        </motion.h1>
        <motion.p
          {...textFadeIn}
          className={
            "font-yesteryear text-xl md:text-x1 font-medium border-[#ee1f80] border-b-2 border-solid"
          }
        >
          Software Engineer & Front-end Developer
        </motion.p>
        <motion.p
          {...textFadeIn}
          className={
            "text-[#ee1f80] font-vasek absolute text-4xl max-w-xl font-bold top-[39px] right-[13px] rotate-[-15deg] select-none"
          }
        >
          Portfolio
        </motion.p>
        <motion.div
          {...textFadeIn}
          className={
            "absolute w-full top-2 left-1 flex font-yesteryear gap-1 flex-col items-start"
          }
        >
          <NavLink
            className={setActive}
            to={"/portfolio"}
            title={"Portfolio"}
            onMouseEnter={handlePortfolioMouseEnter}
            onMouseLeave={handlePortfolioMouseLeave}
          >
            Portfolio
            {hoveredPortfolio && (
              <AiFillFolderOpen className={"ml-2 animate-bounce"} />
            )}
          </NavLink>
          <NavLink
            className={setActive}
            to={"/contact"}
            title={"Contact"}
            onMouseEnter={handleContactMouseEnter}
            onMouseLeave={handleContactMouseLeave}
          >
            Contact
            {hoveredContact && <FiDownload className={"ml-2 animate-bounce"} />}
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
