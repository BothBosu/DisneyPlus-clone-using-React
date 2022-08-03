import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="images/slider-badging.jpg" alt=""/>
        </Wrap>
        <Wrap>
            <img src="images/slider-badag.jpg" alt=""/>
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)` 
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: whitesmoke;
        }        
    }

    li.slick-active button::before {
        color: white;
    }
    
    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        transition: 300ms;
        &:hover {
            border: 4px solid whitesmoke;
        }
    }

`