import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.js';
import Popol from '../Popol/Popol.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/popol' element={<Popol/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;