import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfoliopage from "./pages/Portfoliopage";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Pagenotfound from "./pages/Pagenotfound";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/portfolio"} element={<Layout />}>
          <Route index element={<Portfoliopage />} />
        </Route>
        <Route path={"/contact"} element={<Layout />}>
          <Route index element={<Aboutpage />} />
        </Route>
        <Route path={"*"} element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
