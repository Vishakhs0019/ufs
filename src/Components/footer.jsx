import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div>
        <div id="footer">
    <div id="f1">
        <input type="text" id="footersearch" placeholder='Email Address'/>

    </div>
    <div id="f2">
       <h4>Navigation</h4>
       <ul id="f2item">Home</ul>
        <ul id="f2item">About</ul>
      <ul id="f2item">E-Books</ul>
      <ul id="f2item">Contact</ul>
      <ul id="f2item">Blog</ul>
       

    </div>
    <div id="f3">
       <h4>Categories</h4>
       <ul id="f2item">ForkLift Parts</ul>
        <ul id="f2item">ForkLift Sevices</ul>
      <ul id="f2item">ForkLift Rentals</ul>
      <ul id="f2item">Equipments</ul>
      

    </div>
    <div id="f4">
       <h4>Need Help/Contact US</h4>
       <ul id="f2item">1120 OLKEIGN dRIVE</ul>
        <ul id="f2item">East Point,GA 30344</ul>
       

    </div>
        </div>
        
    </div>
  )
}

export default Footer