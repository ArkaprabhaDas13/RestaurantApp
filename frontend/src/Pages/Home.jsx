import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Menu from '../Components/Menu'
import WhoAreWe from '../Components/WhoWeAre'
import Reservation from '../Components/Reservation'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
        <Reservation/>
    </>
  )
}

export default Home