import React from 'react'
import HomeHero from '../components/HomeHero'
import Feature from '../components/features/Feature'
import Features from '../components/features/Features'

import Faqs from '../components/faqs/Faqs'

const Home = () => {
  return (
    <div className='relative'>
       <HomeHero/>
       <Feature/>
       <Faqs/>
    </div>
  )
}

export default Home