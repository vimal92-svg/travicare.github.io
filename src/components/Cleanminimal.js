import React, { useContext, useState, useEffect } from 'react';
import '../components/Cleanminimal.css';
import cardimage from '../assets/images/cleanimg1.svg';
import cm2 from '../assets/images/cm2.svg';
import Carousel from 'react-multi-carousel';
import Arrow2 from '../assets/images/Arrow 2.svg';
import Line5 from '../assets/images/Line5.svg';
import Arrow1 from '../assets/images/Arrow 1.svg';
import 'react-multi-carousel/lib/styles.css';
import { MobileContext } from '../App';
// import { MouseContext } from '../App';

// corousel
function Cleanminimal() {

  const screenSize = useContext(MobileContext);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 499 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 1,
      paritialVisibilityGutter: 10,
    },
    webMobile: {
      breakpoint: { max: 500, min: 499 },
      items: 1,
      paritialVisibilityGutter: 100
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div>
        {screenSize <= 500
          ? (<div className='mobile-carousal-button-container'>
            <div className="carousel-button-group">
              <img
                src={Arrow1}
                className={currentSlide === 0 ? 'disable' : ''}
                onClick={() => previous()}
              />
              <img src={Line5} />
              <img src={Arrow2} onClick={() => next()} />
            </div>
          </div>)
          : null}
      </div>
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const handleMouseMove = event => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  const style = {
    position: "fixed",
    left: cursorPos.x,
    top: cursorPos.y,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    borderRadius: "100%",
    zIndex: 999,
    pointerEvents: "none",
    width: "50px",
    height: "50px",
    backgroundColor: "#7B7B3B",
  };

  const withoutCutsom = {
    display: 'none',
  }

  return (
    <div>
      {screenSize <= 500
        ? (<div
          className='mob-cm-carousal-container'>
          <Carousel
            responsive={responsive}
            partialVisible
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            <div className='mobile-c-m-card' >
              <div className='img-conatiner'>
                <img src={cardimage} className='mobile-card-img' />
              </div>
              <div className='card-main-text' >
                Clean and Minimal
              </div>
              <div className='card-sub-text'>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem Ipsum <br />
                has been the industry's standard dummy text <br />
                ever since the 1500s, when an unknown printer took a galley
              </div>
            </div>
            <div className='mobile-c-m-card' >
              <div className='img-conatiner'>
                <img src={cm2} className='mobile-card-img' />
              </div>
              <div className='card-main-text' >
                Clean and Minimal
              </div>
              <div className='card-sub-text'>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem Ipsum <br />
                has been the industry's standard dummy text <br />
                ever since the 1500s, when an unknown printer took a galley
              </div>
            </div>
            <div className='mobile-c-m-card' >
              <div className='img-conatiner'>
                <img src={cardimage} className='mobile-card-img' />
              </div>
              <div className='card-main-text' >
                Clean and Minimal
              </div>
              <div className='card-sub-text'>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem Ipsum <br />
                has been the industry's standard dummy text <br />
                ever since the 1500s, when an unknown printer took a galley
              </div>
            </div>
          </Carousel>
        </div>)
        :
        <div className='carousal-container' onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <div style={hover ? style : withoutCutsom} onMouseMove={handleMouseMove}>
            <div className='container-drag-text'>
              drag
            </div>
          </div>
          <Carousel
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            transitionDuration={500}
            swipeScrollTolerance={5000}
            useHardwareAcceleration={true}
          >
            <div className="clean-minimal-card">
              <div className="clean-minimal">CLEAN AND MINIMAL</div>
              <p className="clean-minimal-card-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className="clean-minimal-card">
              <img src={cardimage} className="img-responsive" />
            </div>
            <div className="clean-minimal-card">
              <div className="clean-minimal">CLEAN AND MINIMAL</div>
              <p className="clean-minimal-card-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            <div className='clean-minimal-card'>
              <img src={cardimage} className="img-responsive" />
            </div>
            <div className='clean-minimal-card'>
              <div className='clean-minimal'>CLEAN AND MINIMAL</div>
              <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='clean-minimal-card'>
              <img src={cardimage} className="img-responsive" />
            </div>
            <div className='clean-minimal-card'>
              <div className='clean-minimal'>CLEAN AND MINIMAL</div>
              <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className='clean-minimal-card'>
              <img src={cardimage} className="img-responsive" />
            </div>
            <div className='clean-minimal-card'>
              <div className='clean-minimal'>CLEAN AND MINIMAL</div>
              <p className='clean-minimal-card-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
          </ Carousel>
        </div>}
    </div>
  );
}

export default Cleanminimal;
