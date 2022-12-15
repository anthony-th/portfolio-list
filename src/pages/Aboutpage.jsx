import React from 'react';
import '../styles/tailwindcss.css';
import Header from '../components/Header';

function Aboutpage() {
  return (
    <div className="App bg-zinc-800 text-white min-w-[300px]">
      <div className="max-w-6xl w-11/22 mx-auto flex flex-col justify-between min-h-screen">
        <Header />
      </div>       
    </div>
  )
}

export default Aboutpage;
