import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faYoutube,faCcApplePay,faCcPaypal,faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'


function Footer() {
  return (
    <div id='footer-style'>
      <script src="https://kit.fontawesome.com/594f646203.js" crossOrigin="anonymous"></script>
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <th className='footheader-style'>About</th>
            <th className='footheader-style'>Customer Service</th>
            <th className='footheader-style'>Legal</th>
            <th className='footheader-style'>Connect With Us</th>
          </tr>
          <tr>
            <td style={{verticalAlign:'top'}} rowSpan={'3'}>
              <div id='paragraph-style'>JPMovies</div>
              <div id='paragraph-style'>Careers</div>
            </td>
            <td style={{verticalAlign:'top'}} rowSpan={'3'}>
              <div id='paragraph-style'>Contact Us</div>
              <div id='paragraph-style'>FAQ</div>
            </td> 
            <td style={{verticalAlign:'top'}} rowSpan={'3'}>
              <div id='paragraph-style'>Privacy Policy</div>
              <div id='paragraph-style'>Terms Of Use</div>
            </td>
            <td style={{verticalAlign:'top'}}>
              <FontAwesomeIcon id='icon-style' icon={faFacebook} size="xl" />
              <FontAwesomeIcon id='icon-style' icon={faInstagram} size="xl" />
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </td>
          </tr>
          <tr>
            <th className='footheader-style'>Supported Payments</th>
          </tr>
          <tr>
            <td style={{verticalAlign:'top'}}>
              <FontAwesomeIcon id='icon-style' icon={faCcApplePay} size="xl" />
              <FontAwesomeIcon id='icon-style' icon={faCcPaypal} size="xl" />
              <FontAwesomeIcon icon={faCcMastercard} size="xl" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Footer