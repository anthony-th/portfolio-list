import React from 'react';
import { NavLink } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'border-[#ee1f80] border-l-2 border-solid text-[#ee1f80]/90 pl-2 text-lg select-none' : 'hover:text-[#ee1f80] border-l-2 border-[transparent] border-solid pl-2 select-none text-lg';

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
        <p className="text-[#ee1f80] font-vasek absolute text-4xl max-w-xl font-bold top-[39px] right-[13px] rotate-[-15deg] select-none">
          Portfolio
        </p>
        <div className="absolute w-full top-2 left-1 flex font-yesteryear gap-1 flex-col items-start">
          <NavLink className={setActive} to='/' title='Home'>Home</NavLink>
          <NavLink className={setActive} to='contact' title='Contact'>Contact</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Header;