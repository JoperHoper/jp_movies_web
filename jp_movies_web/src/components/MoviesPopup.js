import React from 'react'
import '../styles/moviespopup.css'

function MoviesPopup(props) {
  return (props.isDisplay) ? (
    <div className='Moviespopup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => {props.trigger(false)}}>&times;</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default MoviesPopup