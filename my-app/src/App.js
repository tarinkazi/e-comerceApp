import React,{useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import About from './About';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './firebase';
import {useStateValue} from './StateProvider';




function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
   //runs when the app component loads..

   auth.onAuthStateChanged(authUser => {
    // console.log('The user is>>', authUser);

     if(authUser) {
       //The user is looged in

       dispatch({
         type: 'SET_USER',
         user: authUser
       })
     } else {
       //the user is logged out

       dispatch({
        type: 'SET_USER',
        user: null
      })
     }

   })
  }, [])

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
          <Route path="/payment" element={<Payment/>} />
        </Routes>


        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>

      </div>
    </Router>
    
    
  

  );
}

export default App;
