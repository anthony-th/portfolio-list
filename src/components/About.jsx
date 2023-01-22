import React, { useState } from 'react';
import { cardsContainer } from '../shared/types';
import { cardsItem } from '../shared/types';
import GithubImg from '/images/github.png';
import GithubImgHover from '/images/github-hover.png';
import TelegramImg from '/images/telegram.png';
import TelegramImgHover from '/images/telegram-hover.png';
import { motion } from 'framer-motion';

function About() {
  const [isHoverGit, setIsHoverGit] = useState(false);
  const [isHoverTelegram, setIsHoverTelegram] = useState(false);
  return (
    <motion.div
      className='flex flex-col md:flex-col items-center justify-between text-6xl pt-8'
      variants={cardsContainer}
      animate='visible'
      initial='hidden'
    >
      <form action='https://getform.io/f/7a51d866-1164-4a86-b40f-678f01bcfcdd' method='POST' className='flex flex-col gap-3 items-center mb-8'>
        <motion.h2
          variants={cardsItem}
          className='text-4xl text-center font-yesteryear pb-2'
        >
          <span className='text-[#ee1f80]'>C</span>ontact
        </motion.h2>
        <motion.input
          variants={cardsItem}
          type='text'
          name='name'
          placeholder='name'
          className='rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1'
          required
        />
        <motion.input
          variants={cardsItem}
          type='text'
          name='email'
          placeholder='email'
          className='rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1'
          required
        />
        <motion.textarea
          variants={cardsItem}
          name='message'
          placeholder='message'
          rows='4'
          className='rounded bg-transparent border-solid border px-2 focus:border-[#ee1f80] focus:outline-none text-base min-w-[300px] font-roboto py-1 mb-2'
          required
        />
        <motion.button
          variants={cardsItem}
          type='submit'
          className='font-yesteryear rounded bg-[#ee1f80] text-2xl py-1 pb-[0.07rem] px-4 hover:bg-[#ffffff] hover:text-[#ee1f80]'
        >
          Submit
        </motion.button>
      </form>
      <motion.div
        variants={cardsItem}
        className='flex gap-1'
      >
        <a href='https://github.com/anthony-th'>
          <img
            className='w-[33px] h-[33px]'
            src={isHoverGit ? GithubImgHover : GithubImg}
            onMouseEnter={() => setIsHoverGit(true)}
            onMouseLeave={() => setIsHoverGit(false)}
            alt='github page'
            title='github page'
          />
        </a>
        <a href='https://t.me/im_printcode'>
          <img
            className='w-[33px] h-[33px]'
            src={isHoverTelegram ? TelegramImgHover : TelegramImg}
            onMouseEnter={() => setIsHoverTelegram(true)}
            onMouseLeave={() => setIsHoverTelegram(false)}
            alt='telegram link'
            title='telegram link'
          />
        </a>
      </motion.div>
    </motion.div>
  )
}

export default About;