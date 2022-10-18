import React from 'react';
import Accueil from "./components/Accueil/Accueil.jsx";
import Chambres from "./components/Chambres/Chambres.jsx";
import { Routes, Route } from 'react-router-dom';




function App() {

return (
  <div><Routes>
    <Route path='/' element={< Accueil/>}/>
    <Route path='/chambres' element={<Chambres/>} />
  </Routes>
    </div>

);
}

export default App;