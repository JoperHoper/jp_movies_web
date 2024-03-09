import React from 'react'
import '../styles/movies.css'
import { useState } from 'react';
import MoviesPopup from './MoviesPopup';

function Movies() {
    const [toggle, setToggle] = useState(1);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popup, setPopup] = useState(0);

    function updateToggle(id) {
      setToggle(id);
    }

    function updatePopup(id) {
      setButtonPopup(true);
      setPopup(id);
    }

  return (
    <div>
        <div className='movies-container'>
            <div className='moviesTab'>
                <div className={toggle === 1 ? 'mTab mActive-tab':'mTab'} onClick={()=>updateToggle(1)}>Now Showing</div>
                <div className={toggle === 2 ? 'mTab mActive-tab':'mTab'} onClick={()=>updateToggle(2)}>Advanced Sales</div>
                <div className={toggle === 3 ? 'mTab mActive-tab':'mTab'} onClick={()=>updateToggle(3)}>Coming Soon</div>
            </div>
            <div id='Now-Showing' className={toggle === 1 ? 'mActive-content':'mContent'}>
          <table className='mTable'>
            <tr className='mTabRow-Style'>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/1.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/2.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/3.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/4.png')}></img></td>
            </tr>
            <tr>
              <td>
                <button className='mButton' onClick={() => updatePopup(1)}>Buy Tickets</button>
                <MoviesPopup isDisplay={popup === 1 ? buttonPopup:''} trigger={setButtonPopup}>
                <div className={popup === 1 ? 'btn-container':''}>
                    <div className='poster-container'>
                      <img className='btn-imagepopup' src={require('../assets/1.png')}></img>
                    </div>
                    <div className='desc-container'>
                      <div className='title-container'>
                        <h2 className='btntitle-style'>TomOut</h2>
                      </div>
                      <div className='subtitle-container'>
                        <h3 className='sub-style'>Cast</h3>
                        <p className='smalldesc-style'>Chris Evergreen, Scarlett Frost, Alexander Steel</p>
                      </div>
                      <div className='subtitle-container'>
                        <h3 className='sub-style'>Director</h3>
                        <p className='smalldesc-style'>Chris Evergreen, Scarlett Frost, Alexander Steel</p>
                      </div>
                      <div className='synop-container'>
                        <h3 className='sub-style'>Synopsis</h3>
                        <p className='smalldesc-style'>
                        In "TomOut," Tom Anderson (Chris Evergreen) and Agent Kate Reynolds (Scarlett Frost) 
                        unite against Victor Kane (Alexander Steel), unraveling a perilous government conspiracy. 
                        Packed with high-stakes action, betrayals, and suspense, it's a race to prevent catastrophe.
                        </p>
                      </div>
                    </div>
                  </div>
                </MoviesPopup>
              </td>
                <td><button className='mButton' onClick={() => updatePopup(2)}>Buy Tickets</button>
                <MoviesPopup isDisplay={popup === 2 ? buttonPopup:''} trigger={setButtonPopup}>
                  <div className={popup === 2 ? 'btn-container':''}>
                    <div className='poster-container'>
                      <img className='btn-imagepopup' src={require('../assets/2.png')}></img>
                    </div>
                    <div className='desc-container'>
                      <div className='title-container'>
                        <h2 className='btntitle-style'>Coplay: Spy</h2>
                      </div>
                      <div className='subtitle-container'>
                        <h3 className='sub-style'>Cast</h3>
                        <p className='smalldesc-style'>Jake Mirage, Zoe Shadow, Victor Shade</p>
                      </div>
                      <div className='subtitle-container'>
                        <h3 className='sub-style'>Director</h3>
                        <p className='smalldesc-style'>Mia Sterling</p>
                      </div>
                      <div className='synop-container'>
                        <h3 className='sub-style'>Synopsis</h3>
                        <p className='smalldesc-style'>
                          Alex Turner (Jake Mirage), a skilled cosplayer, is unwittingly thrust into a real-life espionage game 
                          when Agent Emily Stone (Zoe Shadow) recruits him to stop the enigmatic Mastermind (Victor Shade). 
                          With cosplay skills turned lethal, Alex embarks on a high-stakes mission, facing danger, deception, 
                          and a villain who plays by no rules.
                        </p>
                      </div>
                    </div>
                  </div>
                </MoviesPopup>
                </td>
                <td><button className='mButton' onClick={() => updatePopup(3)}>Buy Tickets</button>
                  <MoviesPopup isDisplay={popup === 3 ? buttonPopup:''} trigger={setButtonPopup}>
                    <div className={popup === 3 ? 'btn-container':''}>
                      <div className='poster-container'>
                        <img className='btn-imagepopup' src={require('../assets/3.png')}></img>
                      </div>
                      <div className='desc-container'>
                        <div className='title-container'>
                          <h2 className='btntitle-style'>Votar 2</h2>
                        </div>
                        <div className='subtitle-container'>
                          <h3 className='sub-style'>Cast</h3>
                          <p className='smalldesc-style'>Olivia Darkwood, Ethan Nightshade, Damien Shadows</p>
                        </div>
                        <div className='subtitle-container'>
                          <h3 className='sub-style'>Director</h3>
                          <p className='smalldesc-style'>Elara Blackwood</p>
                        </div>
                        <div className='synop-container'>
                          <h3 className='sub-style'>Synopsis</h3>
                          <p className='smalldesc-style'>
                            "Votar 2" follows Sarah Hastings (Olivia Darkwood) and Dr. Adrian Cross (Ethan Nightshade) 
                            as they unwittingly awaken a malevolent spirit (Damien Shadows). 
                            Trapped in a nightmarish realm, they must unravel the sinister secrets of the past to survive
                            the ghostly entity's vengeful wrath.
                          </p>
                        </div>
                      </div>
                    </div>
                  </MoviesPopup>
                </td>
                <td><button className='mButton' onClick={() => updatePopup(4)}>Buy Tickets</button>
                  <MoviesPopup isDisplay={popup === 4 ? buttonPopup:''} trigger={setButtonPopup}>
                      <div className={popup === 4 ? 'btn-container':''}>
                        <div className='poster-container'>
                          <img className='btn-imagepopup' src={require('../assets/4.png')}></img>
                        </div>
                        <div className='desc-container'>
                          <div className='title-container'>
                            <h2 className='btntitle-style'>Rom Rin</h2>
                          </div>
                          <div className='subtitle-container'>
                            <h3 className='sub-style'>Cast</h3>
                            <p className='smalldesc-style'>Lily Bloom, Noah Heart, Grace Fields</p>
                          </div>
                          <div className='subtitle-container'>
                            <h3 className='sub-style'>Director</h3>
                            <p className='smalldesc-style'>Isabella Rose</p>
                          </div>
                          <div className='synop-container'>
                            <h3 className='sub-style'>Synopsis</h3>
                            <p className='smalldesc-style'>
                              "Rom Rin" unfolds the tender love story of Emma (Lily Bloom) and Ethan (Noah Heart), childhood friends 
                              separated by time and circumstance. Fate brings them back together, rekindling old flames. 
                              As Olivia (Grace Fields) adds a twist to their connection, "Rom Rin" explores the complexities of love, 
                              friendship, and second chances in a heartwarming romantic tale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </MoviesPopup>
                </td>
            </tr>
            <tr className='mTabRow-Style'>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/7.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/9.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/10.png')}></img></td>
            </tr>
            <tr>
                <td><button className='mButton' onClick={() => updatePopup(5)}>Buy Tickets</button>
                  <MoviesPopup isDisplay={popup === 5 ? buttonPopup:''} trigger={setButtonPopup}>
                    <div className={popup === 5 ? 'btn-container':''}>
                      <div className='poster-container'>
                        <img className='btn-imagepopup' src={require('../assets/7.png')}></img>
                      </div>
                      <div className='desc-container'>
                        <div className='title-container'>
                          <h2 className='btntitle-style'>Romance in Rome</h2>
                        </div>
                        <div className='subtitle-container'>
                          <h3 className='sub-style'>Cast</h3>
                          <p className='smalldesc-style'>Sophia Bianchi, Luca Romano, Alessia Marino</p>
                        </div>
                        <div className='subtitle-container'>
                          <h3 className='sub-style'>Director</h3>
                          <p className='smalldesc-style'>Alessandra Rossi</p>
                        </div>
                        <div className='synop-container'>
                          <h3 className='sub-style'>Synopsis</h3>
                          <p className='smalldesc-style'>
                            "Romance in Rome" follows the enchanting journey of Isabella (Sophia Bianchi) and Marco (Luca Romano) 
                            as they discover love amidst the timeless beauty of Rome. With Elena (Alessia Marino) adding a touch of drama, 
                            the film weaves a tale of passion, cultural richness, and the magic of love in the heart of the Eternal City.
                          </p>
                        </div>
                      </div>
                    </div>
                  </MoviesPopup>
                </td>
                <td><button className='mButton' onClick={() => updatePopup(6)}>Buy Tickets</button></td>
                <td><button className='mButton' onClick={() => updatePopup(7)}>Buy Tickets</button></td>
            </tr>
          </table>
          </div>
          <div id='Now-Showing' className={toggle === 2 ? 'mActive-content':'mContent'}>
          <table className='mTable'>
            <tr className='mTabRow-Style'>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/16.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/12.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/14.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/13.png')}></img></td>
            </tr>
            <tr>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
            </tr>
         </table>
         </div>
         <div id='Now-Showing' className={toggle === 3 ? 'mActive-content':'mContent'}>
          <table className='mTable'>
            <tr className='mTabRow-Style'>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/16.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/12.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/14.png')}></img></td>
              <td className='mTabCell-Style'><img className='resize' src={require('../assets/13.png')}></img></td>
            </tr>
            <tr>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
            </tr>
            <tr>
                <td className='mTabCell-Style'><img className='resize' src={require('../assets/11.png')}></img></td>
                <td className='mTabCell-Style'><img className='resize' src={require('../assets/8.png')}></img></td>
                <td className='mTabCell-Style'><img className='resize' src={require('../assets/5.png')}></img></td>
                <td className='mTabCell-Style'><img className='resize' src={require('../assets/15.png')}></img></td>
            </tr>
            <tr>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
                <td><button className='mButton'>Buy Tickets</button></td>
            </tr>
         </table>
         </div>
        </div>
    </div>
  )
}

export default Movies