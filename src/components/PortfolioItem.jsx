import React from 'react';
import { cardsItem } from '../shared/types';
import { motion } from 'framer-motion';

function PortfolioItem({ imgUrl, title, stack, deployUrl, projectUrl }) {
  return (
    <motion.div
        className='group border border-white rounded-md overflow-hidden relative hover:border-stone-300'
        variants={cardsItem}
    >
      <img
          src={imgUrl}
          alt={title}
          className='w-full h-40 md:h-48 object-cover group-hover:blur-sm group-hover:opacity-50 duration-500 group-hover:scale-125 group-hover:grayscale'
      />
      <div className='w-full rounded-md h-full duration-700 translate-y-[-100%] bg-transparent absolute z-10 top-0 flex group-hover:translate-y-[0%] group-hover:duration-700'>
            <div className='flex items-center flex-col absolute md:left-4 md:top-5 md:gap-4 left-1 top-1 gap-4'>
                <a
                  href={projectUrl}
                  className='hover:opacity-75 hover:cursor-pointer'
                  aria-label={projectUrl}
                >
                  <img
                    src='./images/coding.png'
                    alt=''
                    className='w-20 h-20 object-cover'
                  />
                </a>              
                <a
                  href={deployUrl}
                  className='px-3 py-1 hover:opacity-75 uppercase bg-red-500 rounded-md z-20 hover:shadow-lg hover:cursor-pointer'
                  aria-label={deployUrl}
                >
                  view
                </a>
            </div>
            <div className='w-full p-3 pt-1 absolute bottom-0'>
              <h2 className='md:text-2xl text-lg mb-2 font-semibold flex justify-end select-none'>
                  {title} 
              </h2>
              <p className='flex flex-wrap gap-2 flex-row items-center text-white justify-end text-xs'>
                {stack.map(item => (
                    <span
                        key={item} 
                        className='inline-block px-1.5 leading-4 font-semibold border border-white rounded-md text-xs md:text-sm py-1 select-none'
                    >
                        {item}
                    </span>
                ))}
              </p>
            </div>
      </div>     
    </motion.div>
  );
}

export default PortfolioItem;