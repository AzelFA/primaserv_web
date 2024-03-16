import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import kapal from './kapal.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS for Carousel

export default class Testimonials extends Component {
  render() {
    return (
      <div className="container" style={{ height: '100vh', position: 'relative' }}>
        <h2 style={{ textAlign: 'center', color:'#DA2121', marginBottom: '90px', marginTop:'30px'}}>OUR TESTIMONY</h2>
        <style>{`
          .container {
            height: 100vh;
            position: relative;
          }
          .carousel-root {
            width: 100%;
            margin: auto;
          }
          .carousel .slide {
            background: #fff;
            color: black;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .carousel .slide img {
            width: 139px;
            height: 139px;
            border-radius: 50%;
          }
          .myCarousel {
            width: 60%;
            padding: 4%;
          }
          .myCarousel h3 {
            color: #222;
            font-weight: 600;
            font-size: 17px;
            margin-bottom: 8px;
          }
          .myCarousel h4 {
            color: #787878;
            font-size: 14px;
            font-weight: 500;
            margin-top: 0;
          }
          .myCarousel p {
            color: #222;
            font-size: 15px;
            font-weight: 400;
            line-height: 1.4;
            margin-top: 10px;
          }
          .carousel .control-prev.control-arrow {
            left: 20px;
            z-index: 2;
          }
          .carousel .control-next.control-arrow {
            right: 20px;
            z-index: 2;
          }
          .carousel.carousel-slider .control-arrow {
            background: #000;
            color: #fff;
            font-size: 24px;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
          }
        `}</style>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
          className="testimonial mySwiper"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="control-arrow control-prev"
              >
                &#10094;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="control-arrow control-next"
              >
                &#10095;
              </button>
            )
          }
        >
          <div className="slide swiper-slide">
            <img src={kapal} alt="kapal" className="image" />
            <div className="myCarousel">
              <h3>alief</h3>
              <h4>Designer</h4>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum auctor metus nec turpis sagittis, ac tincidunt justo
                consectetur.”
              </p>
            </div>
          </div>

          <div className="slide swiper-slide">
            <img src={kapal} alt="kapal" className="image" />
            <div className="myCarousel">
              <h3>best</h3>
              <h4>Designer</h4>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum auctor metus nec turpis sagittis, ac tincidunt justo
                consectetur.”
              </p>
            </div>
          </div>

          <div className="slide swiper-slide">
            <img src={kapal} alt="kapal" className="image" />
            <div className="myCarousel">
              <h3>absolute</h3>
              <h4>Designer</h4>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum auctor metus nec turpis sagittis, ac tincidunt justo
                consectetur.”
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
