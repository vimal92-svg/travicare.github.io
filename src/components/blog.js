import React, { useContext } from "react";
import "./blog.css";
import blogimg1 from "../assets/images/blogimg1.svg";
import blogimg2 from "../assets/images/blogimg2.svg";
import blogimg3 from "../assets/images/blogimg3.svg";
import Arrow2 from '../assets/images/Arrow 2.svg';
import Line5 from '../assets/images/Line5.svg';
import Arrow1 from '../assets/images/Arrow 1.svg';
import { MobileContext } from '../App';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

export default function Blog() {

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
    webMobile: {
      breakpoint: { max: 500, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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

  return (
    <div>
      {screenSize <= 500
        ? (<div>
          <div className="mob-blog-conatiner">
            <div className="blog-header-text">
              From <br />
              the Blog
            </div>
            <div className="blog-sub-text">
              Lorem Ipsum is simply dummy text of the printing <br />
              and typesetting industry. Lorem Ipsum has been <br />
              the industry's standard dummy text ever since the <br />
              1500s, when an unknown printer took a galley
            </div>
          </div>
          <div className="blog-carousal-container">
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
            >
              <div className="mob-blog-card">
                <div className='blog-img-conatiner'>
                  <img src={blogimg1} className='blog-card-img' />
                </div>
                <div className="blog-img-sub-text">
                  <div>By : Jeffery Refer </div>
                  <div>In : Retreats</div>
                  <div>2022, Dec 25</div>
                </div>
                <div className="blog-card-main-text">
                  Whether you’re in it for the <br />
                  programs or for the signature <br />
                  retreats,
                </div>
              </div>
              <div className="mob-blog-card">
                <div className='blog-img-conatiner'>
                  <img src={blogimg2} className='blog-card-img' />
                </div>
                <div className="blog-img-sub-text">
                  <div>By : Jeffery Refer </div>
                  <div>In : Retreats</div>
                  <div>2022, Dec 25</div>
                </div>
                <div className="blog-card-main-text">
                  Whether you’re in it for the <br />
                  programs or for the signature <br />
                  retreats,
                </div>
              </div>
              <div className="mob-blog-card">
                <div className='blog-img-conatiner'>
                  <img src={blogimg3} className='blog-card-img' />
                </div>
                <div className="blog-img-sub-text">
                  <div>By : Jeffery Refer </div>
                  <div>In : Retreats</div>
                  <div>2022, Dec 25</div>
                </div>
                <div className="blog-card-main-text">
                  Whether you’re in it for the <br />
                  programs or for the signature <br />
                  retreats,
                </div>
              </div>
            </Carousel>
          </div>
        </div>)
        : <div className="blog-main">
          <div className="blog-text">
            <div className="from-the-blog">
              From the Blog
            </div>
            <div className="blog-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy <br></br>text
              ever since the 1500s, when an unknown printer took a galley
            </div>
          </div >
          <div className="blog-images">
            <div className="blog-images-1">
              <img src={blogimg1} alt="" className="blog-logo" />
              <div className="blog-images-1-text">
                <div>By : Jeffery Refer </div>
                <div>In : Retreats</div>
                <div>2022, Dec 25</div>
              </div>
              <div className="blog-images-1-para">
                Whether you’re in it for the programs or for the signature retreats,
              </div>
            </div>
            <div className="blog-images-2">
              <img src={blogimg2} alt="" className="blog-logo2" />
              <div className="blog-images-2-text">
                <div>By : Jeffery Refer </div>
                <div>In : Retreats</div>
                <div>2022, Dec 25</div>
              </div>
              <div className="blog-images-2-para">
                Deeply personalized and truly comprehensive, Amanzoe’s Individual
                Wellness Programs
              </div>
            </div>
            <div className="blog-images-3">
              <img src={blogimg3} alt="" className="blog-logo3" />
              <div className="blog-images-3-text">
                <div>By : Jeffery Refer</div>
                <div>In: Retreats</div>
                <div>2022, Dec 25</div>
              </div>
              <div className="blog-images-3-para">
                A complete and well-rounded wellness experience awaits you at Avaton
                Resort.
              </div>
            </div>
          </div>
        </div >}
    </div >
  );
}