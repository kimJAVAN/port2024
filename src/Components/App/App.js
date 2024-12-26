import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // BrowserRouter로 수정
import Main from '../Main/Main.js';
import Popol from '../Popol/Popol.js';

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/popol' element={<Popol />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
