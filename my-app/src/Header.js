import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { a } from "@material-ui/core";
import {useStateValue} from './StateProvider';

function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <a href="/">
      <img className="header_logo"
      src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" 
      />
      </a>
      
      <div
        className='header_search'>
          <input
          className="header_searchInput" type='text'>
          </input>
          <SearchIcon
          className='header_searchIcon'/>
      </div>

      <div className="header_nav">
        <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">your</span>
            <span className="header_optionLineTwo">Priem</span>
        </div>

      <a href="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_BasketCount">{basket?.length}</span>
        </div>
      </a>
        <a href ="/about">About</a>

      </div>
    </div>
  )
}

export default Header;