import React from 'react';

function Header() {
  return (
    <section
      id='header'
      className="flex items-center justify-center flex-col pt-16 pb-6"
    >
      <div className="text-center">
        <h1 className="text-4x1 md:text-7x1 text-white mb-1 md:mb-3 font-bold">
          Anthony-th
        </h1>
        <p className="text-base md:text-x1 mb-3 font-medium">
          Software Engineer & Front-end Developer{' '}
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
        </p>
      </div>
    </section>
  )
}

export default Header;