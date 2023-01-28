import React from 'react';
import { NavLink } from 'react-router-dom';
import ResumeButton from './ResumeButton';

function Welcome() {
  return (
    <div className='flex flex-col justify-center items-center max-w-[600px] gap-4 min-w-[300px]'>
      <h1 className='font-raleway text-4xl text-center align-middle'>Hello! I'm&nbsp;
        <span className='text-[#ee1f80]'>Anthony</span>.<br />
        I'm a front-end web developer.
      </h1>
      <div className="flex gap-4">
        <NavLink to="/portfolio">
          <button 
            className='font-raleway hover:rounded-lg border border-[#ee1f80] px-3 py-1 rounded-sm hover:bg-[#ee1f80] transition-all duration-500'
          >
            Portfolio
          </button>
        </NavLink>
        <ResumeButton />
      </div>
    </div>
  )
}

export default Welcome;