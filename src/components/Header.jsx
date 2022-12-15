import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section
      id='header'
      className="flex items-center justify-center flex-col"
    >
      <div className="text-center relative pt-4">
        <h1 className="font-vasek text-5xl text-white mb-1 md:mb-3 font-bold pb-2">
          Anthony-th
        </h1>
        <p className="font-yesteryear text-xl md:text-x1 mb-3 font-medium">
          Software Engineer & Front-end Developer{' '}
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
        </p>
        <div className="absolute w-full top-0 left-0 justify-between flex font-yesteryear opacity-90">
          <Link className='hover:text-[#ee1f80] border-t-0 border-solid border px-2 rounded-b-md' to='/' title='Home'>Home</Link>
          <Link className='hover:text-[#ee1f80] border-t-0 border-solid border px-2 rounded-b-md' to='/about' title='About me'>About</Link>
        </div>
      </div>
    </section>
  )
}

export default Header;