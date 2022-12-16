import React from 'react';
import { NavLink } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'border-[#ee1f80] border-l-2 border-solid text-[#ee1f80]/90 pl-2' : 'hover:text-[#ee1f80] border-l-2 border-[transparent] border-solid pl-2';

function Header() {
  return (
    <section
      id='header'
      className="flex items-center justify-center flex-col"
    >
      <div className="text-center relative pt-4">
        <h1 className="font-vasek text-5xl text-white mb-1 md:mb-3 font-bold pb-2 text-right pr-10">
          Anthony-th
        </h1>
        <p className="font-yesteryear text-xl md:text-x1 mb-3 font-medium border-[#ee1f80] border-b-2 border-solid">
          Software Engineer & Front-end Developer{' '}
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
        </p>
        <div className="absolute w-full top-2 left-1 flex font-yesteryear gap-1 flex-col w-[50px]">
          <NavLink className={setActive} to='/portfolio-list/' title='Home'>Home</NavLink>
          <NavLink className={setActive} to='/portfolio-list/about' title='About me'>About</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Header;