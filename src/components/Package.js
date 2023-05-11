import React, { useContext } from 'react';
import './Package.css';
import Rectangle14 from '../assets/images/Rectangle 14.svg';
import Rectangle17 from '../assets/images/Rectangle 17.svg';
import Rectangle11 from '../assets/images/Rectangle 11.svg';
import Arrow2 from '../assets/images/Arrow 2.svg';
import Line5 from '../assets/images/Line5.svg';
import Arrow1 from '../assets/images/Arrow 1.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MobileContext } from '../App';
// caroussel
function Package() {

  const screenSize = useContext(MobileContext);
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
      breakpoint: { max: 1024, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 1,
      paritialVisibilityGutter: 25,
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
          : <div className="arrow-slide-container">
            <div className="carousel-button-group">
              <img
                src={Arrow1}
                className={currentSlide === 0 ? 'disable' : ''}
                onClick={() => previous()}
              />
              <img src={Line5} />
              <img src={Arrow2} onClick={() => next()} />
            </div>
            <div className="slide-text">
              <div className="count">00{currentSlide + 3}</div>
              <img className="line" src={Line5} />
              <div className="count">006</div>
            </div>
          </div>}
      </div>
    );
  };

  return (
    <div>
      {screenSize <= 500
        ? (
          <div className='mob-package-carousal'>
            <Carousel
              responsive={responsive}
              partialVisbile
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
            // className='react-multi-carousel-item react-multi-carousel-item--active'
            >   
               <div className="package1-mob">
               <div className="package-date-mob">20 JAN 2023 - 20 FEB 2023</div>
              <div className="package-text-mob">
                <div className="package-t1-mob">
                  Package Name-1
                </div>
                <div className="package-l1-mob">
                  LOCATION NAME
                </div>
                <div className="package-r1-mob">
                  $ 1000.00 /Person
                </div>
                <div className="package-btn-mob">BOOK NOW</div>
              </div>
            
              </div>
              <div className="package2-mob">
               <div className="package-date-mob">10 FEB 2023 - 20 MAR 2023</div>
              <div className="package-text-mob">
                <div className="package-t1-mob">
                  Package Name-2
                </div>
                <div className="package-l1-mob">
                  LOCATION NAME
                </div>
                <div className="package-r1-mob">
                  $ 1000.00 /Person
                </div>
                <div className="package-btn-mob">BOOK NOW</div>
              </div>
            
              </div>
              <div className="package3-mob">
               <div className="package-date-mob">20MAR 2023 - 20 APR 2023</div>
              <div className="package-text-mob">
                <div className="package-t1-mob">
                  Package Name-3
                </div>
                <div className="package-l1-mob">
                  LOCATION NAME
                </div>
                <div className="package-r1-mob">
                  $ 1000.00 /Person
                </div>
                <div className="package-btn-mob">BOOK NOW</div>
              </div>
              
              </div>
              <div className="package1-mob">
               <div className="package-date-mob">20 JAN 2023 - 20 FEB 2023</div>
              <div className="package-text-mob">
                <div className="package-t1-mob">
                  Package Name-1
                </div>
                <div className="package-l1-mob">
                  LOCATION NAME
                </div>
                <div className="package-r1-mob">
                  $ 1000.00 /Person
                </div>
                <div className="package-btn-mob">BOOK NOW</div>
              </div>
             
              </div>
              <div className="package2-mob">
               <div className="package-date-mob">10 FEB 2023 - 20 MAR 2023</div>
              <div className="package-text-mob">
                <div className="package-t1-mob">
                  Package Name-2
                </div>
                <div className="package-l1-mob">
                  LOCATION NAME
                </div>
                <div className="package-r1-mob">
                  $ 1000.00 /Person
                </div>
                <div className="package-btn-mob">BOOK NOW</div>
              </div>
            
              </div>
              <div className="package3-mob">
               <div className="package-date-mob">20MAR 2023 - 20 APR 2023</div>
              <div className="package-text-mob">
                <div className="package-t1-mob">
                  Package Name-3
                </div>
                <div className="package-l1-mob">
                  LOCATION NAME
                </div>
                <div className="package-r1-mob">
                  $ 1000.00 /Person
                </div>
                <div className="package-btn-mob">BOOK NOW</div>
              </div>
             
              </div>
            </Carousel>
          </div>
        )
        : <div className="parent">
          <Carousel
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            <div className="package1">
              <div className="package-date">20 JAN 2023 - 20 feb 2023</div>
              <div className="package-text">
                <div className="package-t1">
                  Package Name-1
                </div>
                <div className="package-l1">
                  LOCATION NAME
                </div>
                <div className="package-r1">
                  $ 1000.00 /Person
                </div>
                <div className="package-des">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </span>
                </div>
                <div className="package-btn">BOOK NOW</div>
              </div>
            </div>
            <div className="package2">
              <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
              <div className="package-text">
                <div className="package-t1">
                  Package Name-2
                </div>
                <div className="package-l1">
                  LOCATION NAME
                </div>
                <div className="package-r1">
                  $ 1000.00 /Person
                </div>
                <div className="package-des">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </span>
                </div>
                <div className="package-btn">BOOK NOW</div>
              </div>
            </div>
            <div className="package3">
              <div className="package-date">MAR 2023 - 20 APR 2023</div>
              <div className="package-text">
                <div className="package-t1">
                  Package Name-3
                </div>
                <div className="package-l1">
                  LOCATION NAME
                </div>
                <div className="package-r1">
                  $ 1000.00 /Person
                </div>
                <div className="package-des">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </span>
                </div>
                <div className="package-btn">BOOK NOW</div>
              </div>
            </div>
            <div className="package1">
              <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
              <div className="package-text">
                <div className="package-t1">
                  Package Name-1
                </div>
                <div className="package-l1">
                  LOCATION NAME
                </div>
                <div className="package-r1">
                  $ 1000.00 /Person
                </div>
                <div className="package-des">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </span>
                </div>
                <div className="package-btn">BOOK NOW</div>
              </div>
            </div>
            <div className="package2">
              <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
              <div className="package-text">
                <div className="package-t1">
                  Package Name-2
                </div>
                <div className="package-l1">
                  LOCATION NAME
                </div>
                <div className="package-r1">
                  $ 1000.00 /Person
                </div>
                <div className="package-des">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </span>
                </div>
                <div className="package-btn">BOOK NOW</div>
              </div>
            </div>
            <div className="package3">
              <div className="package-date">10 FEB 2023 - 20 MAR 2023</div>
              <div className="package-text">
                <div className="package-t1">
                  Package Name-3
                </div>
                <div className="package-l1">
                  LOCATION NAME
                </div>
                <div className="package-r1">
                  $ 1000.00 /Person
                </div>
                <div className="package-des">
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </span>
                </div>
                <div className="package-btn">BOOK NOW</div>
              </div>
            </div>
          </Carousel>
        </div >
      }
    </div >
  );
}
export default Package;
