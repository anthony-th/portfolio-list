import React from "react";
import { motion } from "framer-motion";
import { cardsContainer, cardsItem } from "../shared/types";
import { MdSend } from "react-icons/md";
import { BsTelegram, BsGithub } from "react-icons/bs";
import ResumeButtonAbout from "./ResumeButtonAbout";

function About() {
  return (
    <motion.div
      className={
        "flex flex-col items-center justify-between text-6xl pt-6 gap-2"
      }
      variants={cardsContainer}
      animate={"visible"}
      initial={"hidden"}
    >
      <form
        action={"https://getform.io/f/7a51d866-1164-4a86-b40f-678f01bcfcdd"}
        method={"POST"}
        className={"flex flex-col gap-3 items-center pb-8"}
      >
        <motion.h2
          variants={cardsItem}
          className={"text-4xl text-center font-yesteryear pb-2"}
        >
          <span className={"text-[#ee1f80]"}>C</span>ontact
        </motion.h2>
        <motion.input
          variants={cardsItem}
          type={"text"}
          name={"name"}
          placeholder={"name"}
          className={
            "rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1"
          }
          required
        />
        <motion.input
          variants={cardsItem}
          type={"text"}
          name={"email"}
          placeholder={"email"}
          className={
            "rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1"
          }
          required
        />
        <motion.textarea
          variants={cardsItem}
          name={"message"}
          placeholder={"message"}
          rows={4}
          className={
            "rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1"
          }
          required
        />
        <motion.div
          variants={cardsItem}
          className={"min-w-[300px] flex justify-between"}
        >
          <button
            type={"submit"}
            className={
              "font-yesteryear bg-transparent text-2xl py-0 px-2 hover:bg-[#ffffff] group hover:text-[#292929] transition-colors duration-500  rounded border hover:border-white min-w-[116px] min-h-[36px] pt-[0.07em] relative bottom-3 border-t-0 flex items-center justify-center"
            }
          >
            <span className={"text-[#ee1f80] group-hover:text-[#292929]"}>
              S
            </span>
            ubmit
            <MdSend className={"ml-2"} />
          </button>
          <ResumeButtonAbout />
        </motion.div>
      </form>
      <motion.div variants={cardsItem} className={"flex gap-2"}>
        <a
          href={"https://github.com/anthony-th"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <BsGithub
            className={"text-black hover:text-[#ee1f80] w-[28px] h-[28px] transition-colors duration-500"}
            title={"github page"}
          />
        </a>
        <a
          href={"https://t.me/im_printcode"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <BsTelegram
            className={"text-black hover:text-[#ee1f80] w-[28px] h-[28px] transition-colors duration-500"}
            title={"telegram link"}
          />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default About;
