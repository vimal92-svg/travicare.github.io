import React from 'react';
import image2 from "../assets/images/image 2.png";
import './Head.css';
function Header2() {
  return (
    <div className ='nav2'>
     <span >HOME </span>
     <span >ABOUT </span>
     <span>PACKAGES </span>
     <div className='im1'>
     <img src={image2}></img>
     </div>
     <div className='nav12'>
     <span>BLOGS </span>
     <span >CONTACT </span>
     <button className='Booknowbtn1'>BOOkNOW</button>
    
     </div>
     
     </div>
     
  )
}

export default Header2;