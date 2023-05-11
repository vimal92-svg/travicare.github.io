import React, { useEffect, useState, useContext } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Homepage.css';
import Rectangle5 from '../assets/images/Rectangle 5.svg';
import logo1 from '../assets/images/letter.svg';
import Line4 from '../assets/images/Line 4.svg';
import imag from '../assets/images/imag.svg';
import Rectangle2 from '../assets/images/Rectangle 2.svg'
import font from '../assets/images/font.svg'
import Navigationbar from './Navigationbar';
import './navbar.css';
import logo2 from '../assets/images/newlet.svg'
import { MobileContext } from '../App';

const MobileMenu = () => (
  <>
    <p><a href='#HOME'>HOME</a></p>
    <p><a href='#ABOUT'>ABOUT</a></p>
    <p><a href='#PACKAGES'>PACKAGES</a></p>
    <p><a href='#BLOG'>BLOG</a></p>
    <p><a href='#CONTACT'>CONTACT</a></p>
    <p><a href='#BOOKNOW'>BOOK&nbsp;NOW</a></p>
  </>
)

function Homepage() {

  const screenSize = useContext(MobileContext);
  const [navClass, setNavClass] = useState('homenavbar1');
  const [navHeader, setnavHeader] = useState(logo1);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [mobNavHandler, setMobNavHandler] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset != 0) {
        setNavClass('stick-homenavbar1');
        setnavHeader(logo2);
        setMobNavHandler(true);
      } else {
        setNavClass('homenavbar1');
        setnavHeader(logo1);
        setMobNavHandler(false);
      };
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollWidth,
      behavior: 'smooth',
    });
  };

  const mobileScrollToBottom = () => {
    window.scrollTo({
      top: 752,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {screenSize <= 500 ?
        (<div>
          <div className='mobile-home-container'>
            <img className="mobile-home-bgimage" src={Rectangle2} alt="mobile-home-image" />
            {!mobNavHandler
              ?
              (<>
                <div className='mobile-nav-icon'>
                  {toggleMenu
                    ? <RiCloseLine color='#D9D9D9' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#D9D9D9' size={27} onClick={() => setToggleMenu(true)} />
                  }
                  {toggleMenu && (
                    <div className='mob-nav-menu-container scale-up-center'>
                      <div className='mob-nav-menu-container-links'>
                        <MobileMenu />
                      </div>
                    </div>
                  )}
                </div><div className='mobile-home-logo'>
                  <img src={logo1} alt="Logo" />
                </div>
              </>)
              :
              <div className='mobile-scrolldown-navbar'>
                <div className='mobile-nav-logo'>
                  <img src={logo2} alt="Logo" />
                </div>
                <div className='mobile-scroll-nav-icon'>
                  {toggleMenu
                    ? <RiCloseLine color='#7B7B3B' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#7B7B3B' size={27} onClick={() => setToggleMenu(true)} />
                  }
                  {toggleMenu && (
                    <div className='mob-nav-menu-container scale-up-center'>
                      <div className='mob-nav-menu-container-links'>
                        <MobileMenu />
                      </div>
                    </div>
                  )}
                </div>
              </div>}
            <div className="mobile-header-main-text">a unique greek hideaway</div>
            <div className="mobile-header-sub-text">
              IF YOU ARE LOOKING FOR A SUPERB RETREAT CENTRE IN
              GREECE, THEN YOU ARE IN THE RIGHT PLACE!
            </div>
            <div className="mobile-mouse">
              <img onClick={mobileScrollToBottom} src={imag} alt="" className='imgscroll' />
            </div>
          </div>
        </div>
        ) :
        <div>
          <img className="home-backgroundimage" src={Rectangle2} alt="" /><div>
            <div className={navClass}>
              <div className="navleft">
                 <div className='tab'>HOME</div>
                <div className='tab'>ABOUT</div>
                <div className='tab'>PACKAGES </div>
              </div>
                <div className="navcenter">
                <img src={navHeader} alt="Logo" className="travlogo1" />
              </div>
              <div className="navright">
                 <div className='tab'>BLOG</div>
                <div className='tab'>CONTACT</div>
                <div className="tab booknow">BOOK&nbsp;NOW</div>
              </div>
            </div>
          </div><div className="text-box">
            <div className="text1">a&nbsp;unique&nbsp;greek&nbsp;hideaway</div>
            <div className="text2">
              <span>iF YOU ARE LOOKING FOR A SUPERB RETREAT CENTRE IN</span><br></br>
              <span>GREECE, THEN YOU ARE IN THE RIGHT PLACE!</span>
            </div>

            <div className="mouse">
              <img onClick={scrollToBottom} src={imag} alt="" className='imgscroll' />
            </div>
          </div>
        </div>}
    </div>
  );
}
export default Homepage;