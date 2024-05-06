import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import NowShowing from '../components/NowShowing'
import ComingSoon from '../components/ComingSoon'
import Promotions from '../components/Promotions'
import Footer from '../components/Footer'
import LoginPage from '../components/LoginPage'

function homePage() {
  return (
    <div>
        <NavBar></NavBar>
        <LoginPage></LoginPage>
        <Banner></Banner>
        <NowShowing></NowShowing>
        <ComingSoon></ComingSoon>
        <Promotions></Promotions>
        <Footer></Footer>
    </div>
  )
}

export default homePage