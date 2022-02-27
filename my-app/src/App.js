import React,{useEffect} from 'react';
import './App.css';
import Header from './Components/HeaderComponent/Header';
import Home from './Components/HomeComponents/Home';
import About from './About';
import Checkout from './Components/CheckoutComponent/Checkout';
import Login from './LoginComponent/Login';
import Payment from './Components/PaymentComponent/Payment';
import Orders from './Components/OrderComponent/Orders'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './firebase';
import {useStateValue} from './Helper/StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


const promise = loadStripe(
  "pk_test_51KEpeQAQJmyoEYMD8Fim8M8xMmXshUa8sHNukTf8vNrWfnUqpA5UtRFQ6yIsOX8uDlVccXXjH8OEyhx2P7mLUXHz00LEEfpeZY"
);

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


        <Elements stripe={promise}>
        <Routes>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
        </Elements>
          
        <Routes>
          <Route path="/orders" element={<Orders/>} />
        </Routes>
  


        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>

      </div>
    </Router>
    
    
  

  );
}

export default App;
