import React from 'react';
import image3 from "../assets/images/image 3.png";
import './Home.css'
function Header() {
  return (
    <div className ='navbar'>
     <span >HOME </span>
     <span >ABOUT </span>
     <span>PACKAGES </span>
     <div className='img'>
     <img src={image3}></img>
     </div>
     <div className='nav1'>
     <span>BLOGS </span>
     <span >CONTACT </span>
     <button className='Booknowbtn'>BOOkNOW</button>
    
     </div>
     </div>
     
  )
}

export default Header;