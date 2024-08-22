import React, { useState } from 'react';
import './App.css';
import {  } from 'react-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';


function App() {

  const [admin, setAdmin] = useState({});

  return (
    <div className="App">
      {
        !admin ? <Login/> : <Admin/> 
      }
    </div>
  );
}

export default App;
