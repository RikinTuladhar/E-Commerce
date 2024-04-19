import React, { useState } from 'react'

const Slider = () => {
    
    return (
     <>
       <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/Images/slide1.jpg" class="d-block w-100" alt="image1"/>
          </div>
          <div class="carousel-item">
            <img src="/Images/slide2.jpg" class="d-block w-100" alt="image2"/>
          </div>
          <div class="carousel-item">
            <img src="/Images/slide3.jpg" class="d-block w-100" alt="image3"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     </>
    );
  };

export default Slider
