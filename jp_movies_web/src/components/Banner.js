import '../styles/Banner.css'

function Banner() {
  //Scrolling banner logic for buttons
  var direction;

  let pressLeft = () => {
    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.carousel');
    if (slider !== null && slider.style !== null) {
      direction = 1;
      carousel.style.justifyContent = 'flex-end';
      slider.style.transform = 'translateX(50%)';
    }
  }

  let pressRight = () => {
    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.carousel');
    if (slider !== null && slider.style !== null) {
      direction = -1;
      carousel.style.justifyContent = 'flex-start';
      slider.style.transform = 'translateX(-50%)';
    }
  };

  let sliderTransitionEnd = () => {
    const slider = document.querySelector('.slider');
      if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
      }
      else if (direction === 1){
        slider.prepend(slider.lastElementChild);
      }
      direction = null;
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s';
      });
    };

  return (
    <div className='container'>
        <div className='carousel'>
          <div className='controls' style={{zIndex:'99'}}>
            <button className='arrow-prev' onClick={pressLeft}><img style={{height:'30px'}} src={require('../assets/Arrow Left.png')}></img></button>
            <button className='arrow-next' onClick={pressRight}><img style={{height:'30px'}} src={require('../assets/Arrow.png')}></img></button>
          </div>
          <div className='slider' onTransitionEnd={sliderTransitionEnd}>
              <img className='imageStyle' src={require('../assets/Banner_1.png')}></img>
              <img className='imageStyle' src={require('../assets/Banner_2.png')}></img>
              <img className='imageStyle' src={require('../assets/Banner_3.png')}></img>
          </div>
      </div>
    </div>
  )
}

export default Banner