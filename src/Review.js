import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './review.css';

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];
 
const Review = () => {
    return (
      <div className="slide-container sli">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <p>i was suffering from a serious teeth problem , i got the perfect treatment from dr goyals dental clinic . They are the best </p>
                    <p>-divyansh vahsiht</p>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    <p>i was suffering from a serious teeth problem , i got the perfect treatment from dr goyals dental clinic . They are the best </p>
                    <p>-Arpit jain</p>      
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    <p>i was suffering from a serious teeth problem , i got the perfect treatment from dr goyals dental clinic . They are the best </p>
                    <p>-deeksha gupta</p>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Review;