import React, { useState } from 'react';
import GithubImg from "/images/github.png";
import GithubImgHover from "/images/github-hover.png";
import { motion } from 'framer-motion';

function About() {
  const [isHover, setIsHover] = useState(false);
    const cardsItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  return (
    <motion.div
      className="flex flex-col md:flex-col items-center justify-between text-6xl pt-8"
      variants={cardsItem}
      animate="visible"
      initial="hidden"
    >
      <form action='https://getform.io/f/7a51d866-1164-4a86-b40f-678f01bcfcdd' method='POST' className='flex flex-col gap-3 items-center mb-8'>
        <h2 className='text-4xl text-center font-yesteryear pb-2'><span className='text-[#ee1f80]'>C</span>ontact</h2>
        <input type='text' name='name' placeholder='name' className='rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1' required />
        <input type='text' name='email' placeholder='email' className='rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1' required />
        <textarea name="message" placeholder='message' rows="4" className='rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1 mb-2' required />
        <button type='submit' className='font-yesteryear rounded bg-[#ee1f80] text-2xl py-1 pb-[0.07rem] px-4 hover:bg-[#ffffff] hover:text-[#ee1f80]'>Submit</button>
      </form>
      <a href='https://github.com/anthony-th'>
        <img className='w-[33px] h-[33px]' src={isHover ? GithubImgHover : GithubImg} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} alt="github page" title='github page' />
      </a>
    </motion.div>
  )
}

export default About;