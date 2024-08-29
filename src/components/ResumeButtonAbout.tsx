import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { handleClick } from "../shared/types";

function ResumeButtonAbout() {
  return (
    <a
      href={""}
      className={
        "font-yesteryear bg-transparent text-2xl py-0 px-2 group transition-colors duration-500 rounded border min-w-[116px] min-h-[36px] pt-[0.07em] relative bottom-3 border-t-0 cursor-not-allowed opacity-50"
      }
      target={"_blank"}
      onClick={handleClick}
      rel={"noopener noreferrer"}
    >
      <h2 className={"flex items-center justify-center w-full tracking-wide group-hover:animate-none"}>
        <span className={"text-[#ee1f80]"}>R</span>esume
        <AiOutlineDownload className={"ml-2"} />
      </h2>
    </a>
  );
}

export default ResumeButtonAbout;
