import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agent from './components/Agent';
import SimpleMapPage from './components/Map/index';
import Navbar from './components/Navbar';
import TestConfig from './components/TestConfig';
import User from './components/User';
import Report from './components/Report';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}


const App =() =>{

  return (
    <div className='app-bg-container'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<SimpleMapPage/>}/>
          <Route exact path="/agents" element={<Agent/>}/>
          <Route exact path="/test-config" element={<TestConfig/>}/>
          <Route exact path="/user-account" element={<User/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
    

  );
}

export default App;
