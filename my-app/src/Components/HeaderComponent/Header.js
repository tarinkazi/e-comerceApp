import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Helper/StateProvider";
import {auth} from '../../firebase';

function Header() {
  const [{ basket, user}, dispatch] = useStateValue();

  const handleAuthentication =() => {
    if(user) {
      auth.signOut();
    }  
    
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello {user? user.email:'Guest'} </span>
            <span className="header_optionLineTwo">{user? 'Sign out':'Sign In'}</span>
          </div>
        </Link>

        <Link to ="/orders">
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link>

    <Link to ="/about">
        <div className="header_option">
          <span className="header_optionLineOne">your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_BasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

        
      </div>
    </div>
  );
}

export default Header;
