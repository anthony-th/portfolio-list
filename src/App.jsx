import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Pagenotfound from './pages/Pagenotfound';
import { Layout } from './components/Layout';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='*' element={<Pagenotfound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
