import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Login from './Pages/Login';
import RequestPage from './Pages/RequestPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
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
