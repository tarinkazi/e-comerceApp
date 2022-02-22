import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import About from './About';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (

    <Router>
      <div className='App'>

      <Header/>

      <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        <Routes>
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>

        

        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>

      </div>
    </Router>
    
    
  

  );
}

export default App;
