import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardsItem } from "../shared/types";
import { PortfolioItemProps } from "../shared/types";
import { HiOutlineCode } from 'react-icons/hi';

function PortfolioItem({
  imgUrl,
  title,
  stack,
  deployUrl,
  projectUrl,
}: PortfolioItemProps) {
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(true);
  const onLeave = () => setHover(false);
  let iconStyle = { fontSize: "4.5em", transition: "0.3s" };
  let isHovericonStyle = { fontSize: "4.5em", color: "#02c6de", transition: "0.3s" }; 

  return (
    <motion.div
      className={
        "w-fit group border border-white rounded-md overflow-hidden relative hover:border-stone-300"
      }
      variants={cardsItem}
    >
      <div
        className={"relative w-fit h-40 md:h-48 min-w-[300px] min-h-[160px]"}
      >
        {loading && (
          <div
            className={
              "absolute z-20 w-full h-full flex items-center justify-center bg-zinc-900"
            }
          >
            <span className={"text-white font-bold text-xl"}>Loading...</span>
          </div>
        )}
        <img
          src={imgUrl}
          alt={title}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          className={
            "w-fit h-40 md:h-48 object-cover group-hover:blur-sm group-hover:opacity-40 duration-500 group-hover:scale-125 group-hover:grayscale"
          }
        />
      </div>
      <div
        className={
          "w-full rounded-md h-full duration-700 translate-y-[-100%] bg-transparent absolute z-10 top-0 flex group-hover:translate-y-[0%] group-hover:duration-700"
        }
      >
        <div
          className={
            "flex items-center flex-col absolute md:left-4 md:top-5 md:gap-4 left-3 top-2 gap-2"
          }
        >
          <a
            href={projectUrl}
            className={"hover:cursor-pointer"}
            aria-label={projectUrl}
            target={"_blank"}
            rel={"noopener noreferrer"}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            { hover ? <HiOutlineCode style={isHovericonStyle} /> : <HiOutlineCode style={iconStyle} /> }
          </a>
          <a
            href={deployUrl}
            className={
              "px-3 py-1 hover:bg-white hover:outline hover:outline-1 hover:outline-red-500 hover:text-red-500 uppercase bg-red-500 rounded-md z-20 hover:shadow-lg hover:cursor-pointer duration-300 font-medium"
            }
            aria-label={deployUrl}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            view
          </a>
        </div>
        <div className={"w-full p-3 pt-1 absolute bottom-0"}>
          <h2
            className={
              "md:text-2xl text-lg mb-2 font-semibold flex justify-end select-none"
            }
          >
            {title}
          </h2>
          <p
            className={
              "flex flex-wrap gap-2 flex-row items-center text-white justify-end text-xs"
            }
          >
            {stack.map((item) => (
              <span
                key={item}
                className={
                  "inline-block px-1.5 leading-4 font-semibold border border-white rounded-md text-xs md:text-sm py-1 select-none bg-[#292929]/30"
                }
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className={"gap-1 w-full absolute -top-4 group-hover:top-0 group-hover:opacity-75 opacity-0 text-sm font-light flex justify-center select-none duration-500"}>
        <h2
          className={
            "border-b-2 border-[#02c6de]"
          }
        >
          source code
        </h2>
        <h2>
          and
        </h2>
        <h2
          className={
            "border-b-2 border-red-500"
          }
        >
          deploy
        </h2>
      </div>
    </motion.div>
  );
}

export default PortfolioItem;
