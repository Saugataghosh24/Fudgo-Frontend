import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

const [menu,setMenu]= useState("home");

const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>{setMenu("home")}} className={menu==="home"? "active": ""}>Home</Link>
        <a href="#explore-menu" onClick={()=>{setMenu("menu")}} className={menu==="menu"? "active": ""}>Menu</a>
        <a href="#app-download" onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"? "active": ""}>Mobile-App</a>
        <a href="#footer" onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"? "active": ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="search-icon">
        <img src={assets.search_icon} alt="" />
        <p>Search</p>
        </div>
        <div onClick={()=>{setShowLogin(true)}} className="sigin">
        <img src={assets.profile_icon} alt="" />
        <p>Sign in</p> 
        </div>
        <Link to='/cart'>
        <div className="cart-icon">
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount()===0 ? "": "dot" }></div>
        </div>
        <p>Cart</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
