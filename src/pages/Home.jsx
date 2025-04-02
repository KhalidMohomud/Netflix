import React from 'react'
import HomeHero from '../components/HomeHero'
import Feature from '../components/features/Feature'
import Features from '../components/features/Features'

import Faqs from '../components/faqs/Faqs'
import  Footer  from '../components/footer/Footer'
import FooterLiks from '../components/footer/FooterLiks'

const Home = () => {
  return (
    <div className='relative'>
       <HomeHero/>
       <Feature/>
       <Faqs/>
       <Footer/>
    </div>
  )
}

export default Home