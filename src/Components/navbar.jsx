import React from 'react'
import './navbar.css'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
function Navbar() {
  return (
    <>
    <div id="navbarmain">
        <div id="navsearch"> <input type="text" id="navsearch" placeholder="Search here"/>
       
        </div>
        <div id="icon">
                 <FaArrowRightArrowLeft /> </div>
        <div id="icon"><FaRegHeart /></div>
        
        <div id="icon"><BsCart3 /></div>
        <h6 id="it">0 items</h6>
       

        <button id="btn"><h6  id="login">Login</h6> <IoPersonOutline id="iconn"/></button>
       
    </div>
    </>
  )
}

export default Navbar