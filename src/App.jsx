/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Login from './Pages/Login';
import RequestPage from './Pages/RequestPage';
// import { useEffect } from 'react';
// import JobInputPage from './Pages/JobInputPage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/select-request' element={<RequestPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
