import React from 'react'
import '../styles/comingSoon.css'
import { useState, useEffect } from 'react';
import { useRef } from 'react';

function ComingSoon() {
  const carousel = useRef();
  const [isDragging, setisDragging] = useState(false);
  const [isMouseMove, setisMouseMove] = useState(false);
  const [startMouseX, setStartMouseX] = useState(Number);
  const [startCarouselX, setStartCarouselX] = useState(0);
  const [mouseX, setMouseX] = useState(Number);

  useEffect(() => {
    if (isDragging) {
      carousel.current.classList.remove("cscarousel-animation")
      if (isMouseMove) {
        carousel.current.style.transform = 'translateX(' + (startCarouselX + (mouseX - startMouseX)) + 'px)';
      }
    }
    if (!isDragging) {
      let translateValue = Number(carousel.current.style.transform.slice(
        carousel.current.style.transform.indexOf('(') + 1,
        carousel.current.style.transform.indexOf('px'),
      ));
      if (translateValue > 0) {
        carousel.current.classList.add("cscarousel-animation")
        carousel.current.style.transform = 'translateX(0px)';
        setStartCarouselX(0);
      }
      if (translateValue < -220) {
        carousel.current.classList.add("cscarousel-animation")
        carousel.current.style.transform = 'translateX(-220px)';
        setStartCarouselX(-220);
      }
    }
    console.log(carousel.current.style.transform)
  }, [isDragging, isMouseMove, mouseX, startCarouselX]);

  return (
    <div>
      <div style={{height:'50px', textAlign:'left'}}>
        <p id='header'>Coming Soon</p>
      </div>
        <hr id='lineStyle'></hr>
        <div className='csbody'>
          <div className='cswrapper-container'>
            <ul className='comingsoon-carousel' ref={carousel} 
              onMouseDown={(e) => {setisDragging(true);setMouseX(e.pageX);setStartMouseX(e.pageX);}} 
              onMouseUp={() => {
                setisDragging(false);
                setisMouseMove(false);
                setStartCarouselX(Number(carousel.current.style.transform.slice(
                  carousel.current.style.transform.indexOf('(') + 1,
                  carousel.current.style.transform.indexOf('px'),
                  )));
                }}
              onMouseLeave={() => {
              setisDragging(false);
              setisMouseMove(false);
              setStartCarouselX(Number(carousel.current.style.transform.slice(
              carousel.current.style.transform.indexOf('(') + 1,
              carousel.current.style.transform.indexOf('px'),
              )));
              }}
              onMouseMove={(e) => {if (isDragging) {setisMouseMove(true); setMouseX(e.pageX)}}}
                      >
                <li className='cs-cards cs-overlay'>
                  <div className='cs-img'>
                    <img id='coming-soon-img' src={require('../assets/11.png')} draggable='false'></img>
                      <div className='cstext-overlay'>
                        <h3>Symphony Classics</h3>
                        <hr></hr>
                        <p className='csmovie-duration'>3 hr 10 mins | PG13</p>
                        <p className='csmovie-rating'>Musical, Documentary</p>
                      </div>
                  </div>
                 </li>
                <li className='cs-cards cs-overlay'>
                  <div className='cs-img'>
                    <img id='coming-soon-img' src={require('../assets/12.png')} draggable='false'></img>
                      <div className='cstext-overlay'>
                        <h3>Whacky!</h3>
                        <hr></hr>
                        <p className='csmovie-duration'>1 hr 10 mins | PG13</p>
                        <p className='csmovie-rating'>Cartoon, Kids Friendly</p>
                      </div>
                  </div>
                 </li>
                <li className='cs-cards cs-overlay'>
                  <div className='cs-img'>
                    <img id='coming-soon-img' src={require('../assets/13.png')} draggable='false'></img>
                      <div className='cstext-overlay'>
                        <h3>I'm Me: Postary</h3>
                        <hr></hr>
                        <p className='csmovie-duration'>2 hr 00 mins | NC16</p>
                        <p className='csmovie-rating'>Action, Violence</p>
                      </div>
                  </div>
                 </li>
                <li className='cs-cards cs-overlay'>
                  <div className='cs-img'>
                    <img id='coming-soon-img' src={require('../assets/14.png')} draggable='false'></img>
                      <div className='cstext-overlay'>
                        <h3>Tavern Mysterium</h3>
                        <hr></hr>
                        <p className='csmovie-duration'>2 hr 40 mins | PG13</p>
                        <p className='csmovie-rating'>Mystery, Thriller</p>
                      </div>
                  </div>
                 </li>
                <li className='cs-cards cs-overlay'>
                  <div className='cs-img'>
                    <img id='coming-soon-img' src={require('../assets/15.png')} draggable='false'></img>
                      <div className='cstext-overlay'>
                        <h3>Give it to Mave!</h3>
                        <hr></hr>
                        <p className='csmovie-duration'>1 hr 30 mins | PG13</p>
                        <p className='csmovie-rating'>Family Friendly Content</p>
                      </div>
                  </div>
                 </li>
                <li className='cs-cards cs-overlay'>
                  <div className='cs-img'>
                    <img id='coming-soon-img' src={require('../assets/16.png')} draggable='false'></img>
                      <div className='cstext-overlay'>
                        <h3>IYANG: The Next Princess</h3>
                        <hr></hr>
                        <p className='csmovie-duration'>2 hr 05 mins | NC16</p>
                        <p className='csmovie-rating'>Some course language and Nudity</p>
                      </div>
                  </div>
                 </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ComingSoon