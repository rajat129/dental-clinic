import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.css'; 

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];
 
const Slider = () => {
    return (
      <div className="row">
        <div className="slide-container s">
          <Slide>
            
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                  <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"></img>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                  <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                  <img src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="></img>
                </div>
              </div>
            
          </Slide>
        </div>

        <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="myform">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" placeholder="enter email" class="form-control" id="email"></input>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="Email" placeholder="enter email" class="form-control" id="email"></input>
                                </div>
                                <div class="form-group">
                                    <label for="email">Phone number</label>
                                    <input type="number" placeholder="enter email" class="form-control" id="email"></input>
                                </div>
                                <div class="form-group">
                                    <label>appointment for</label>
                                    <select class="form-control">
                                        <option>dental cleansing</option>
                                        <option>root canal</option>
                                        <option>dental implant</option>
                                        <option>other</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="radio1" id="rad" class="form-check-input"></input>
                                    <label for="rad" class="form-check-label">4:00pm - 5:00pm</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="radio1" id="rad1" class="form-check-input"></input>
                                    <label for="rad1" class="form-check-label">6:00pm - 7:00pm</label>
                                </div>
                                
                                <button class="btn btn-primary">Book an appointment</button>
                            </form>
                        </div>
                    </div>
            </div>
             
          </div>

      
    )
}

export default Slider;