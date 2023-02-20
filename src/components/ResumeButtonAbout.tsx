import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeButtonAbout() {
  return (
    <a
      href={"https://drive.google.com/file/d/1WkM_TYCnzl7AHm-vGC9xdZPvZefjAoaU/view"}
      className={
        "font-yesteryear bg-transparent text-2xl py-0 px-2 hover:bg-[#ffffff] hover:text-[#292929] transition-colors duration-500  rounded border hover:border-white min-w-[116px] min-h-[36px] pt-[0.07em] relative bottom-3 border-t-0"
      }
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      <h2 className={"flex items-center justify-center w-full tracking-wide"}>
        <span className={"text-[#ee1f80]"}>R</span>esume
        <AiOutlineDownload className={"ml-2"} />
      </h2>
    </a>
  );
}

export default ResumeButtonAbout;
