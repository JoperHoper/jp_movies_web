import React from 'react'
import '../styles/nowshowing.css'
import { useState , useEffect} from 'react';
import { useRef } from 'react';


function NowShowing() {
  const carousel = useRef();
  const [isDragging, setisDragging] = useState(false);
  const [isMouseMove, setisMouseMove] = useState(false);
  const [startMouseX, setStartMouseX] = useState(Number);
  const [startCarouselX, setStartCarouselX] = useState(0);
  const [mouseX, setMouseX] = useState(Number);

    useEffect(() => {
      if (isDragging) {
        carousel.current.classList.remove("carousel-animation")
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
          carousel.current.classList.add("carousel-animation")
          carousel.current.style.transform = 'translateX(0px)';
          setStartCarouselX(0);
        }
        if (translateValue < -500) {
          carousel.current.classList.add("carousel-animation")
          carousel.current.style.transform = 'translateX(-500px)';
          setStartCarouselX(-500);
        }
      }
      console.log(carousel.current.style.transform)
    }, [isDragging, isMouseMove, mouseX, startCarouselX]);

  return(
    <div>
      <div style={{height:'50px', textAlign:'left'}}>
        <p id='header'>Now Showing</p>
      </div>
      <hr id='linestyle'></hr>
      <div className='body'>
        <div className='wrapper-container'>
          <ul className='nowshowing-carousel' ref={carousel} 
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

            <li className='cards overlay'>
              <div className='img'>
                <img id='now-showing-img' src={require('../assets/1.png')} draggable='false'></img>
                <div className='text-overlay'>
                <h3>TomOut</h3>
                <hr></hr>
                <p className='movie-duration'>2 hr 00 mins | NC16</p>
                <p className='movie-rating'>Action, Sexual Reference</p>
                </div>
              </div>
            </li>
            <li className='cards overlay'>
              <div className='img'>
                <img id='now-showing-img' src={require('../assets/2.png')} draggable='false'></img>
                <div className='text-overlay'>
                <h3>Coplay: Spy</h3>
                <hr></hr>
                <p className='movie-duration'>2 hr 10 mins | M18</p>
                <p className='movie-rating'>Sexual Scenes</p>
                </div>
              </div>
            </li>
            <li className='cards overlay'>
              <div className='img'>
                <img id='now-showing-img' src={require('../assets/4.png')} draggable='false'></img>
                <div className='text-overlay'>
                <h3>Rom Rin</h3>
                <hr></hr>
                <p className='movie-duration'>1 hr 35 mins | PG13</p>
                <p className='movie-rating'>Romance, Some Sexual Reference</p>
                </div>
              </div>
            </li>
            <li className='cards overlay'>
              <div className='img'>
                <img id='now-showing-img' src={require('../assets/7.png')} draggable='false'></img>
                <div className='text-overlay'>
                <h3>Romance in Rome</h3>
                <hr></hr>
                <p className='movie-duration'>1 hr 35 mins | M18</p>
                <p className='movie-rating'>Romance, Some Nudity</p>
                </div>
              </div>
            </li>
            <li className='cards overlay'>
              <div className='img'>
                <img id='now-showing-img' src={require('../assets/3.png')} draggable='false'></img>
                <div className='text-overlay'>
                <h3>Votar 2</h3>
                <hr></hr>
                <p className='movie-duration'>1 hr 20 mins | NC16</p>
                <p className='movie-rating'>Horror, Strong Language</p>
                </div>
              </div>
            </li>
            <li className='cards overlay'>
              <div className='img'>
                <img id='now-showing-img' src={require('../assets/9.png')} draggable='false'></img>
                <div className='text-overlay'>
                <h3>00 Boys: Moving Out</h3>
                <hr></hr>
                <p className='movie-duration'>2 hr 50 mins | PG13</p>
                <p className='movie-rating'>Family Friendly Content</p>
                </div>
              </div>
            </li>
            <li className='cards overlay'>
              <div className='img'>
                <img id='now-showing-img' src={require('../assets/10.png')} draggable='false'></img>
                <div className='text-overlay'>
                <h3>Hary Parrwers</h3>
                <hr></hr>
                <p className='movie-duration'>3 hr 00 mins | NC16</p>
                <p className='movie-rating'>Fantasy, Coarse Language, Some Violence</p>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
  )
};

export default NowShowing