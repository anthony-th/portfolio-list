import React from "react";
import { handleClick } from "../shared/types";

function ResumeButton() {
  return (
    <a
      href={"https://drive.google.com/file/d/1WkM_TYCnzl7AHm-vGC9xdZPvZefjAoaU/view"}
      className={"font-raleway border border-[#ee1f80] px-3 py-1 rounded-sm transition-all duration-500 w-[90px] opacity-50 cursor-not-allowed"}
      target={"_blank"}
      onClick={handleClick}
      rel={"noopener noreferrer"}
    >
      <h2 className={"flex items-center justify-center w-full tracking-wide"}>
        Resume
      </h2>
    </a>
  );
}

export default ResumeButton;
