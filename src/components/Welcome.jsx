import React from 'react';
import { NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <div className='flex flex-col justify-center items-center max-w-[600px] gap-2 min-w-[300px]'>
      <h1 className='font-raleway text-4xl text-center align-middle'>Hello! I'm&nbsp;
        <span className='text-[#ee1f80]'>Anthony</span>.<br />
        I'm a front-end web developer.
      </h1>
      <NavLink to="/portfolio">
        <button 
          className='font-raleway hover:rounded-lg border border-[#ee1f80] px-3 py-1 rounded-sm hover:bg-[#ee1f80] transition-all duration-500'
        >
          Open Portfolio
        </button>
      </NavLink>
    </div>
  )
}

export default Welcome;