import React from 'react';
import './styles/tailwindcss.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App bg-zinc-800 text-white">
      <div className="max-w-6xl w-11/22 mx-auto flex flex-col justify-between min-h-screen">
        <Header />
        <Portfolio />
        <Footer />
      </div>       
    </div>
  )
}

export default App;
