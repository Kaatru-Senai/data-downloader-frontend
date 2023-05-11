/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter , Routes, Route, Navigate  } from 'react-router-dom';
import Login from './Pages/Login';
import RequestPage from './Pages/RequestPage';
import DataFormat from './Pages/DataFormat';
import DatabaseInput from './Pages/DatabaseInput';
import Download from './Pages/Download';
import DataSource from './Pages/DataSource';
import DeviceSelection from './Pages/DeviceSelection';
import { useSelector } from 'react-redux';
import DataInfo from './Components/DataInfo';
// import { useEffect } from 'react';
// import JobInputPage from './Pages/JobInputPage';

function App() {
  const isUser=useSelector((state)=>state.data.isUser);
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/select-request' element={isUser?<RequestPage/>:<Navigate to="/"/>}/>
            <Route path='/select-datasource' element={isUser?<DataSource/>:<Navigate to="/"/>}/>
            <Route path='/select-devices' element={isUser?<DeviceSelection/>:<Navigate to="/"/>}/>
            <Route path='/select-datatype' element={isUser?<DataFormat/>:<Navigate to="/"/>}/>
            <Route path='/select-database' element={isUser?<DatabaseInput/>:<Navigate to="/"/>}/>
            <Route path='/download' element={isUser?<Download/>:<Navigate to="/"/>}/>
            <Route path='/device-stats' element={isUser?<DataInfo/>:<Navigate to="/"/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
