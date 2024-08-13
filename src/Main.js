import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Vets from "./pages/Vets";
import Consulta from "./pages/Consulta";
import Engrielo from "./pages/Engrielo";

const Main = () => {
  return(
    <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/vets' element={<Vets />} />
          <Route path='/consulta' element={<Consulta />} />
          <Route path='/engrielo' element={<Engrielo />} />
        </Routes>
    </main>
  )
}

export default Main;
