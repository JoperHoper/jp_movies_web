import React from 'react'
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../styles/promotions.css'

function Promotions() {
  const carousel = useRef();
  const [isDragging, setisDragging] = useState(false);
  const [isMouseMove, setisMouseMove] = useState(false);
  const [startMouseX, setStartMouseX] = useState(Number);
  const [startCarouselX, setStartCarouselX] = useState(0);
  const [mouseX, setMouseX] = useState(Number);

    useEffect(() => {
      if (isDragging) {
        carousel.current.classList.remove("promocarousel-animation")
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
          carousel.current.classList.add("promocarousel-animation")
          carousel.current.style.transform = 'translateX(0px)';
          setStartCarouselX(0);
        }
        if (translateValue < -400) {
          carousel.current.classList.add("promocarousel-animation")
          carousel.current.style.transform = 'translateX(-400px)';
          setStartCarouselX(-400);
        }
      }
      console.log(carousel.current.style.transform)
    }, [isDragging, isMouseMove, mouseX, startCarouselX]);
  
  return (
    <div>
      <div style={{height:'50px', textAlign:'left'}}>
      <p id='header'>Promotions</p>
      </div>
      <hr id='lineStyle'></hr>
      <div className='body'>
        <div className='promowrapper-container'>
          <ul className='promotion-carousel' ref={carousel}
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
            onMouseMove={(e) => {if (isDragging) {setisMouseMove(true); setMouseX(e.pageX)}}}>
            <li className='promo-cards'>
              <div className='promo-img'>
                <img id='promotion-img' src={require('../assets/Promo1.png')} draggable='false'></img>
              </div>
            </li>
            <li className='promo-cards'>
              <div className='promo-img'>
                <img id='promotion-img' src={require('../assets/Promo2.png')} draggable='false'></img>
              </div>
            </li>
            <li className='promo-cards'>
              <div className='promo-img'>
                <img id='promotion-img' src={require('../assets/Promo3.png')} draggable='false'></img>
              </div>
            </li>
            <li className='promo-cards'>
              <div className='promo-img'>
                <img id='promotion-img' src={require('../assets/Promo4.png')} draggable='false'></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Promotions