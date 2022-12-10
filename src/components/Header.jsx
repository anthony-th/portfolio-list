import React from 'react';

function Header() {
  return (
    <section
      id='header'
      className="flex items-center justify-center flex-col pt-6"
    >
      <div className="text-center">
        <h1 className="font-vasek text-5xl text-white mb-1 md:mb-3 font-bold pb-2">
          Anthony-th
        </h1>
        <p className="font-yesteryear text-xl md:text-x1 mb-3 font-medium">
          Software Engineer & Front-end Developer{' '}
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
        </p>
      </div>
    </section>
  )
}

export default Header;