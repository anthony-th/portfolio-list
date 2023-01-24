import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='bg-zinc-800 text-white min-w-[300px] min-h-screen flex flex-col justify-between items-center'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export {Layout};