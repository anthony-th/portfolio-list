import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="App bg-zinc-800 text-white min-w-[300px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export {Layout}