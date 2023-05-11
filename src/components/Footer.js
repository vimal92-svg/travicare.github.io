import React, { useContext } from 'react';
import './Footer.css';
import { MobileContext } from '../App';
function Footer() {

  const screenSize = useContext(MobileContext);
  return (
    <div>
      {screenSize <= 500
        ? (<div className="footer-content">

          <div class="footer-main">
            <div className="footer-head">

              <p>WE FOCUS ON THAT SWEET SPOT WHERE LUXURY Retreats</p>
            </div>
            <div className="footer-header">

              <p> Home</p>
              <p>About Brand </p>
              <p> Packages </p>
              <p> Blog </p>
              <p> Contact Us </p>
            </div>
          </div>

          <div class="footer-side">
            <div class="footer-email">
              <h4 className="footer-side-head">Email:</h4>
              <p> hello@travicare.com</p>
              <p>info@travicare.com</p>
            </div>
            <div class="footer-phone">
              <h4 className="footer-no">Phone</h4>
              <p> +30 21-1234-567 </p>
              <p>+30 21-1234-567 </p>
            </div>
            <div class="footer-address">
              <h4 className="footer-locations">Address:</h4>
              <p> Anexartisias 78, Ioannina</p>
              <p>Epirus Greece</p>
            </div>
          </div>

          <div className="footer-site">

            <p> Facebook </p>
            <p>Instagram </p>
            <p> Twitter </p>
            <p> Youtube </p>
          </div>
          <div className="footer-separator"></div>
          <div class="footer-copy">
            <p>
              © Copyright 2023 travicare. website powered by digitalbuddha
            </p>
          </div>
        </div>)
        :
        <div className="footer-container">

          <div class="footer-div1">
            <div className="footer-title">

              <p>WE FOCUS ON THAT SWEET SPOT WHERE LUXURY Retreats</p>
            </div>
            <div className="footer-comp">

              <p> Home</p>
              <p>About Brand </p>
              <p> Packages </p>
              <p> Blog </p>
              <p> Contact Us </p>
            </div>
          </div>

          <div class="footer-div2">
            <div class="email">
              <h4 className="footercomponenttit">Email:</h4>
              <p> hello@travicare.com</p>
              <p>info@travicare.com</p>
            </div>
            <div class="phone">
              <h4 className="footercomponenttitl">Phone</h4>
              <p> +30 21-1234-567 </p>
              <p>+30 21-1234-567 </p>
            </div>
            <div class="address">
              <h4 className="footercomponenttitle">Address:</h4>
              <p> Anexartisias 78, Ioannina</p>
              <p>Epirus Greece</p>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer-social">

            <p> Facebook </p>
            <p>Instagram </p>
            <p> Twitter </p>
            <p> Youtube </p>
          </div>
          <div class="footer-div4">
            <p>
              © Copyright 2023 travicare. website powered by digitalbuddha
            </p>
          </div>
        </div>}
    </div>
  );
}
export default Footer;
