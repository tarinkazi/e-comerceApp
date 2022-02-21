import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import About from './About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (

    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>

        <Routes>
          <Route exact path="/checkout" element={<About/>} />
            
         
        </Routes>

      </div>
    </Router>
    
    
  

  );
}

export default App;
