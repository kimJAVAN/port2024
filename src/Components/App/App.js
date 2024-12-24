import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // BrowserRouter로 수정
import Main from '../Main/Main.js';
import Popol from '../Popol/Popol.js';

function App() {
  return (
    <Router>
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
