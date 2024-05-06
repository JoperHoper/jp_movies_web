import React from 'react'
import '../styles/promotionsTab.css'
import { useState } from 'react';

function Promotion_Tab() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <div>
      <div className='promo-container'>
        <div className='allTabs'>
          <div className={toggle === 1 ? 'tab active-tab':'tab'} onClick={()=>updateToggle(1)}>Current Promotion</div>
          <div className={toggle === 2 ? 'tab active-tab':'tab'} onClick={()=>updateToggle(2)}>JP Annual Pass</div>
          <div className={toggle === 3 ? 'tab active-tab':'tab'} onClick={()=>updateToggle(3)}>Movie Perks</div>
        </div>
        <div id='Current-Promotion' className={toggle === 1 ? 'active-content':'content'}>
          <table className='ptTable'>
            <tbody>
              <tr className='tabRow-Style'>
                <td className='tabCell-Style'><img src={require('../assets/Promo1.png')}></img></td>
                <td className='tabCell-Style'><img src={require('../assets/Promo2.png')}></img></td>
                <td className='tabCell-Style'><img src={require('../assets/Promo3.png')}></img></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id='JP-Annual-Pass' className={toggle === 2 ? 'active-content':'content'}>
          <table className='ptTable'>
            <tbody>
              <tr className='tabRow-Style'>
                <td className='tabCell-Style'><img src={require('../assets/Promo5.png')}></img></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id='Movie-Perks' className={toggle === 3 ? 'active-content':'content'}>
          <table className='ptTable'>
            <tbody>
              <tr className='tabRow-Style'>
                <td className='tabCell-Style'><img src={require('../assets/Promo4.png')}></img></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Promotion_Tab