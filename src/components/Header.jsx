import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { textFadeIn } from '../shared/types';

const setActive = ({isActive}) =>
  isActive ?
    'border-[#ee1f80] border-l-2 border-solid text-[#ee1f80]/90 pl-2 text-lg select-none'
    : 'hover:text-[#ee1f80] border-l-2 border-[transparent] border-solid pl-2 select-none text-lg transition-colors';

function Header() {
  return (
    <section
      id='header'
      className='flex items-center justify-center flex-col'
    >
      <div className='text-center relative pt-4'>
        <motion.h1
          {...textFadeIn}
          className='font-vasek text-5xl text-white mb-1 md:mb-3 font-bold pb-2 text-right pr-10'
        >
          Anthony-th
        </motion.h1>
        <motion.p
          {...textFadeIn}
          className='font-yesteryear text-xl md:text-x1 mb-4 font-medium border-[#ee1f80] border-b-2 border-solid'
        >
          Software Engineer & Front-end Developer{' '}
        </motion.p>
        <motion.p
          {...textFadeIn}
          className='text-[#ee1f80] font-vasek absolute text-4xl max-w-xl font-bold top-[39px] right-[13px] rotate-[-15deg] select-none'
        >
          Portfolio
        </motion.p>
        <motion.div
          {...textFadeIn}
          className='absolute w-full top-2 left-1 flex font-yesteryear gap-1 flex-col items-start'
        >
          <NavLink className={setActive} to='/' title='Portfolio'>Portfolio</NavLink>
          <NavLink className={setActive} to='/contact' title='Contact'>Contact</NavLink>
        </motion.div>
      </div>
    </section>
  )
}

export default Header;