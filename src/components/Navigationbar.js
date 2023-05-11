import React from 'react';
import './navbar.css';
import logo2 from '../assets/images/newlet.svg';

function Navigationbar () {
  return (
    <div className="stickynav">
      <div className="homenavbar2">
        <div className="navleft">
          <div className="tab">HOME</div>
          <div className="tab">ABOUT</div>
          <div className="tab">PACKAGES </div>
        </div>
        <div className="navcenter">
          <img src={logo2} alt="" className="travlogo1" />
        </div>
        <div className="navright">
          <div className="tab">BLOG</div>
          <div className="tab">CONTACT</div>
          <div className="tab booknow">BOOK&nbsp;NOW</div>
        </div>
      </div>
    </div>
  );
}

export default Navigationbar;
