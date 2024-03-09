import React from 'react'
import '../styles/cinema.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Cinema() {
  return (
    <div id='div-style'>
      <table id='table-style'>
        <tr>
          <td className='cell-style'>
            <h1 className='cineheader-style'>JP Movies Jurong Point</h1>
            <p className='address-style'>
              <FontAwesomeIcon className='icon-style' icon={faLocationDot} />
              1 Jurong West Central 2, Singapore 648886
            </p>
            <div className='map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7273248017013!2d103.70371367447204!3d1.3399310616086928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f932e116747%3A0x5d28df2a11eb500d!2s1%20Jurong%20West%20Central%202%2C%20Jurong%20Point%2C%20Singapore%20648886!5e0!3m2!1sen!2ssg!4v1707923045325!5m2!1sen!2ssg" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </td>
          <td className='cell-style'>
            <h1 className='cineheader-style'>JP Movies Plaza Singapura</h1>
            <p className='address-style'>
              <FontAwesomeIcon className='icon-style' icon={faLocationDot} />
              68 Orchard Rd, Singapore 238839
            </p>
            <div className='map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.791262716055!2d103.84220817447216!3d1.3000731617348653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19bd7e725147%3A0x73f8899801be03cf!2sPlaza%20Singapura!5e0!3m2!1sen!2ssg!4v1707923594248!5m2!1sen!2ssg" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </td>
          <td className='cell-style'>
            <h1 className='cineheader-style'>JP Movies VivoCity</h1>
            <p className='address-style'>
              <FontAwesomeIcon className='icon-style' icon={faLocationDot} />
              1 HarbourFront Walk, Singapore 098585
            </p>
            <div className='map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.846095743052!2d103.81955177447223!3d1.2648912618440868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1958974bbc2b%3A0xba34578f519df13f!2sVivoCity!5e0!3m2!1sen!2ssg!4v1707923739094!5m2!1sen!2ssg"
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </td>
        </tr>
        <tr>
          <td className='cell-style' style={{backgroundColor:'black'}}></td>
          <td className='cell-style'>
            <h1 className='cineheader-style'>JP Movies Westgate</h1>
              <p className='address-style'>
                <FontAwesomeIcon className='icon-style' icon={faLocationDot} />
                3 Gateway Dr, Singapore 608532
              </p>
              <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7363332765512!2d103.74020867447199!3d1.3343873616263895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da100f542860f3%3A0x1ef4d613d5eb7990!2sWestgate!5e0!3m2!1sen!2ssg!4v1707924678230!5m2!1sen!2ssg"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Cinema