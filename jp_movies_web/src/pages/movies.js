import React from 'react'
import Movies from '../components/Movies'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function movies() {
  return (
    <div>
        <NavBar></NavBar>
        <Movies></Movies>
        <Footer></Footer>
    </div>
  )
}

export default movies