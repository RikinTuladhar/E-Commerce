import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/slider.css"
import {
  faPenToSquare,
  faMagnifyingGlass,
  faUserPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Slider = () => {
    const [Slider, setSlider] = useState(1);
  
    const handleSlider = (slideNum) => {
      setSlider(slideNum);
    };
    const handleNextSlide = () => {
      const nextSlide = Slider === 3 ? 1 : Slider + 1;
      setSlider(nextSlide);
    };
  
    const handlePrevSlide = () => {
      const prevSlide = Slider === 1 ? 3 : Slider - 1;
      setSlider(prevSlide);
    };
    return (
      <>
        <div className="wrapper">
          {Slider === 1 && (
            <div
              className={`slider ${Slider === 1 ? "active" : ""}`}
              id="content1"
            >
              <div className="content">
                <h1 className="slider-heading hedvig">Make Your</h1>
                <h2 className="slider-heading2 hedvig">
                  <span>First Post </span>
                </h2>
                <h4 className="slider-heading3">
                  🌟 Hey there, Ever had that thought or idea swirling in your
                  mind, itching to burst into the digital world? Well, guess what?
                  Now's the perfect time to let it out! Ready to make your mark?
                  We're excited to welcome your first post. 💫
                </h4>
              
                  <a className="btns" href="/Login">
                    Post Blog <FontAwesomeIcon icon={faPenToSquare} />
                  </a>
            
              </div>
              {/* <div className="Slider_img_div">
                <img className="Slider_img" src={Post_img}/>
                <img className="Slider_img" src={Flw}/>
              </div> */}
            </div>
          )}
          {Slider === 2 && (
            <div
              className={`slider ${Slider === 2 ? "active" : ""}`}
              id="content2"
            >
              <div className="content">
                <h1 className="slider-heading">Search</h1>
                <h2 className="slider-heading2">
                  <span>Contents </span>
                </h2>
                <h4 className="slider-heading3">
                  🎉 Embrace the magic of curiosity, Dive into the sea of
                  knowledge, and let the waves of inspiration carry you to new
                  shores. Discover the endless possibilities that unfold when you
                  seek to learn and explore. Happy searching! 💕
                </h4>
                <a href="/Blogs" className="btns">
                  Search <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </div>
              {/* <div className="Slider_img_div">
                <img className="Slider_img" src={Seach_Con}/>
              </div> */}
            </div>
          )}
          {Slider === 3 && (
            <div
              className={`slider ${Slider === 3 ? "active" : ""}`}
              id="content3"
            >
              <div className="content">
                <h1 className="slider-heading">Find new</h1>
                <h2 className="slider-heading2">
                  <span>Connections</span>
                </h2>
                <h4 className="slider-heading3">
                  🌻 Step into the your realm, where every click unveils
                  opportunities to forge new connections and create meaningful
                  bonds. Discover the joy of connecting with like-minded souls,
                  like a sweet melody in the symphony of your digital journey.🤗
                </h4>
                <a href=''  className="btns">
                  Find People <FontAwesomeIcon icon={faUserPlus} />
                </a>
              </div>
              {/* <div className="Slider_img_div">
                <img className="Slider_img" src={Find_ppl}/>
              </div> */}
            </div>
          )}
          <button className="chevron-btn leftx" onClick={handlePrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="chevron-btn rightx" onClick={handleNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </>
    );
  };

export default Slider
